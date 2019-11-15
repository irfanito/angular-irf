export class IrfArrays {
  static exists<T>(array: T[], value: T): boolean {
    return array.indexOf(value) !== -1;
  }

  static removeFirst<T>(array: T[], value: T): void {
    let index: number = array.indexOf(value);
    array.splice(index, 1);
  }
}
