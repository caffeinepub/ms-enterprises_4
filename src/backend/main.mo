import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Iter "mo:core/Iter";

actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
  };

  let inquiries = Map.empty<Text, Inquiry>();

  public shared ({ caller }) func submitInquiry(id : Text, name : Text, phone : Text, email : Text, message : Text) : async () {
    if (inquiries.containsKey(id)) {
      Runtime.trap("Inquiry already exists");
    };
    inquiries.add(
      id,
      {
        name;
        phone;
        email;
        message;
      },
    );
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray();
  };

  public query ({ caller }) func getInquiry(id : Text) : async Inquiry {
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };
};
