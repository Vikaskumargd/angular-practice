import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];


  constructor(
    private heroService: HeroService,
    private router: Router
  ) {


  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() {

    this.heroService.getHeroes().then(h => this.heroes = h);
    // return this.heroes = this.heroService.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
