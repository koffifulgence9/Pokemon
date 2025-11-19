import {Component, computed, signal} from '@angular/core';
import {POKEMON_LIST} from './Pokemon-list.fake';
import {Pokemon} from './Pokemon.model';
import {PokemonBorderDirective} from './pokemon-border.directive';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [PokemonBorderDirective, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pokemonList = signal(POKEMON_LIST);
    size(pokemon: Pokemon){
       if(pokemon.life <= 15){
         return 'Petit';
       }
       if(pokemon.life <= 25){
         return 'Moyen';
       }
       return 'Grand';
    }
   incrementLife(pokemon : Pokemon) {
      pokemon.life = pokemon.life + 1;
  }

   decrementLife(pokemon: Pokemon) {
      pokemon.life = pokemon.life - 1;
  };

}
