//@flow

export function shuffleArray(arr: Array<any>): Array<any> {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }

  return arr;
}

export function getRndInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function isAllElementsInArrayEqual(
    arr: Array<any>, propertyName?: any): boolean {
  if (propertyName) {
    return !!arr.reduce((a, b) => a[propertyName] === b[propertyName]);
  }
  return !!arr.reduce((a, b) => a === b);
}