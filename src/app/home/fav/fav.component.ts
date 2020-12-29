import { Component, Input, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/auth/services/pelicula.service';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  peliculas: Pelicula[];
  @Input() favoritas: string;

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(){
    this.peliculas = this.peliculaService.Peliculas;
   }

}
