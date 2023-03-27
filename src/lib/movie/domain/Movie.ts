export class Movie {
  constructor(readonly id: string, readonly title: string, readonly year: number) {
  }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getYear(): number {
    return this.year;
  }
}
