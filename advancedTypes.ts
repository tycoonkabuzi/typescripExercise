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
const usersByRole: UsersByRole = {
  admin: [{ name: "adam", role: "admin", password: "querty" }],
  user: [{ name: "Reed", role: "user", password: "HelloWorld123" }],
  guest: [{ name: "Manick", role: "guest", password: "@Dativa1981" }],
};
// abstract another way of type of objects.

// type User={ id:number; name:string; email:string};

// type Order={
// orderId:number;
//     userId:number;
//     items:{
//         productId:number;
//         quantity: number;
// }[];
// };

// type Admin= User & {
//     role:"Admin";
//     permissions:string[];
// }
// const canProcessOrder=(user:User|Admin)=>{
//     if(  "permissions" in user && user.permissions.includes("process-order") ){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }
// const userOne: Admin={
//     id:1,name:"Tycoon", email:"kabuzitycoon@gmail.com", role:"Admin",permissions:["process-orders","teach", "buy-groceries"]
// }
// canProcessOrder(userOne);

// Generic type: this works like parameters and arguments

type FormValue<T, U, K = string> = { value: T; age: U; isConnected: K };

const form1: FormValue<string, number> = {
  value: "Hello World",
  age: 12,
  isConnected: "Boss",
};

//-----------------------------------------------------------------------------------------------------------------------------
// the value type can change based on the argument type we provide, we can also assign a default value:
type Product<T> = {
  id: number;
  name: string;
  data: T;
};
type WareHouse<T> = Product<T>[];

const addProduct = <T>(WareHouse: WareHouse<T>, product: Product<T>) => {
  WareHouse.push(product);
  return WareHouse;
};
let firstProduct: Product<Number> = {
  id: 1,
  name: "Macbook",
  data: 123,
};

const findProductById = <T>(warehouse: WareHouse<T>, id: number) => {
  return warehouse.filter((product) => product.id === id);
};

let secondProduct: Product<number> = {
  id: 2,
  name: "Macbook",
  data: 2,
};
let store: WareHouse<number> = [];
console.log(findProductById(store, 1));
console.log(addProduct(store, firstProduct));
// extends object
