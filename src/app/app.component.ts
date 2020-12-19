import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { hash } from './hash';
import { DataService, Person } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly gameCodeControl = new FormControl('');
  gameId = 0;
  gamePeople: Person[];
  yourPerson: Person;

  constructor(private dataService: DataService) {
    this.gameCodeControl.valueChanges
      .pipe(
        debounceTime(1000),
        mergeMap((val) => from(hash(val))),
        map((val) => parseInt(val, 16))
      )
      .subscribe((val) => this.newGame(val));
  }

  async newGame(gameId: number): Promise<void> {
    this.gamePeople = [];
    this.yourPerson = null;
    this.gameId = gameId;
    const allPeople = await this.dataService.getData();
    const gamePeople: Person[] = [];
    const personCount = 25;
    let i = gameId % allPeople.length;
    while (gamePeople.length < personCount) {
      const person = allPeople[i];
      if (gamePeople.includes(person)) {
        i = (i + 1) % allPeople.length;
      } else {
        gamePeople.push(person);
        i = (i + gameId) % allPeople.length;
      }
    }
    this.gamePeople = gamePeople;
    this.yourPerson = gamePeople[Math.floor(Math.random() * gamePeople.length)];
    console.log(this.gamePeople);
    console.log(this.yourPerson);
  }
}
