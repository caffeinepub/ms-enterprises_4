import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

let _counter = 0;
function genId() {
  _counter += 1;
  return `inq_${Date.now()}_${_counter}`;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      const id = genId();
      await actor.submitInquiry(
        id,
        data.name,
        data.phone,
        data.email,
        data.message,
      );
    },
  });
}
