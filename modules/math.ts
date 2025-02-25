export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export type QuadraticCoefficients = {
  a: number;
  b: number;
  c: number;
};

function calculateDelta(coefficients: QuadraticCoefficients): number {
  const { a, b, c } = coefficients;
  if (a === 0) {
    throw new Error(" A should not be equal to 0");
  }
  return b * b - 4 * a * c;
}
