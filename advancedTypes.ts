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

// create a type based on another
type UserWithoutRole = Pick<User, "name" | "password">;
type UserWithoutRoleAlso = Omit<User, "role">;

// records
type UsersByRole = Record<UserRole, User[]>;
const usersByRole:UsersByRole {
  admin: [{ name: "adam", role: "admin", password: "querty" }],
  users: [],
  guest: [],
};
// abstract another way of type of objects.


const User:{ id:number; name:string; email:string};
const Order:{
orderId:number;
    userId:number;
    items:[{
        productId:number;
        quantity: number;
    }]
}
type Admin= User & {
    role:"Admin";
    permissions:string[];
}
const canProcessOrder=(user:User|Admin)=>{
    if(user.includes(role==="Admin"))){
        console.log()
    }
}