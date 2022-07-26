export class AppModelStepTwo {
  constructor(
    public amount: number = null,
    public date: Date = new Date(),
    public status: string = null,
    public letter: string = null
  ) {}
}
export class AppStatus {
  constructor(public name: string = null, public code: string = null) {}
}
