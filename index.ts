// variables

let userName: string = "admin";
let age: number = 35;
let isAdmin: boolean = true;

isAdmin = false;
//arrays

let names: string[] = ["Hello", "make", userName];
let ages: number[] = [1, 2];

// tuple not often used

let data: [number, boolean, string] = [15, false, "hi"]; // everything has to be in order ?

//Enum

enum Lights {
  red = "Red",
  yellow = "Yellow",
  green = "Green",
}
console.log(Lights.green === "Green");

// Special types

let someValue: any = "hello"; // This brings us to how Js works by default

let value: unknown = "Hello"; // similar we can write whatever value, if we want to use it
if (typeof value == "string") {
  console.log(value.toUpperCase());
}

let someNull: null = null; // rare
let someUndefined: undefined = undefined;
