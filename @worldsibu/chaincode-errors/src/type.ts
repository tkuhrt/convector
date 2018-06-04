export class InvalidTypeError extends Error {
  public static test(type: string) {
    if (!type) {
      throw new InvalidTypeError();
    }
  }

  public message = 'Invalid Type for chaincode model';
}
