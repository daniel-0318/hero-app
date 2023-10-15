import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-card-heroes',
  templateUrl: './card-heroes.component.html',
  styles: [
  ]
})
export class CardHeroesComponent implements OnInit{
  
  @Input()  public hero!:Hero;
  
  ngOnInit(): void {
    if(!this.hero) throw new Error('Hero property is required');
  }
}
