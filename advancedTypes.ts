// unions which is there to unify
type UserRole = "admin" | "user" | "guest";
const currentUser: UserRole = "admin";
const usersRoles: UserRole[] = ["admin", "user"];

type RegularUser = Exclude<UserRole, "guest">; //create an union based on an union already in place but excluding an element
type regularUserAlso = Extract<UserRole, "admin" | "user">; //create a new one by extracting only the two elements

type User = {
  name: string;
  role: UserRole;
  password: string;
};
type UserDetails = {
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
};

type UserWithDetails = User & UserDetails;

const aUserWithDetails: UserWithDetails = {
  name: "Tycoon",
  role: "admin",
  password: "@DativaMunyandoha1207",
  address: {
    street: "przewoz",
    city: "poland",
    zipCode: "40-123",
  },
};
