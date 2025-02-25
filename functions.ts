// functions , parameters have to have a type and also the argument
// we would like to explicitly mark what type will our function return that is why we have after the (): number, it can be also String etc.

function addNumber(num1: number, num2: number, addNegatives?: boolean): number {
  return num1 + num2;
}
addNumber(15, 9);

// Methods:

const props = {
  name: "component",
  title: "Test",
  printData(isTrue: string): string {
    return `my Name i ${this.name} and it is ${isTrue}`;
  },
};

/* We still have the possibility to have a type already created which will hold all the type instead of assigning them like the previous example, it works normal, we just create the type and we assign the type to the element in the object we could also create a method and assign the received value and the returned value */

// generic functions
function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}
