import { Injectable } from '@angular/core';

export interface Person {
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private cachedData: Person[];
  private dataPromise: Promise<Person[]> = null;

  async getData(): Promise<Person[]> {
    if (this.cachedData) {
      return this.cachedData;
    }
    if (this.dataPromise) {
      return this.dataPromise;
    }
    this.dataPromise = fetch('assets/people.json').then((resp) => resp.json());
    this.cachedData = await this.dataPromise;
    return this.cachedData;
  }
}
