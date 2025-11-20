import {Component, computed, inject, signal} from '@angular/core';
import {Pokemon} from './Pokemon.model';
import {PokemonBorderDirective} from './pokemon-border.directive';
import {DatePipe} from '@angular/common';
import {PokemonService} from "./pokemon.service";

@Component({
  selector: 'app-root',
  imports: [PokemonBorderDirective, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  readonly #pokemonService = inject(PokemonService);
  readonly pokemonList = signal(this.#pokemonService.getPokemonList());
  readonly searchTerm = signal('');
  readonly pokemonListFilter = computed(() => {
      const searchTerm = this.searchTerm();
      const pokemonList = this.pokemonList();
      return pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.trim().toLowerCase()));
  });
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
