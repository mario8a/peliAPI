import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;
  //mi solucion  -> existe: boolean;

  estrella = 'star-outline';

  slideOptActores  = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  }

  constructor(private movieService: MoviesService,
              private modalCtrl: ModalController,
              private dataLocal: DataLocalService) { }

  ngOnInit() {
    //console.log('ID', this.id);
    //mi solcion
    // this.existe = await this.dataLocal.existePelicula(this.id);
    // console.log('Detalle compo existe', this.existe);


     this.dataLocal.existePelicula(this.id)
         .then(existe => this.estrella = (existe) ? 'star' : 'star-outline');

     this.movieService.getPeliculaDetalle(this.id)
        .subscribe(resp => {
          console.log(resp);
          this.pelicula = resp;
        });

     this.movieService.getActoresPelicula(this.id)
    .subscribe(resp => {
      console.log(resp);
      this.actores = resp.cast;
    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  favorito() {
    const existe = this.dataLocal.guardarPelicula(this.pelicula);
    this.estrella = (existe) ? 'star' : 'star-outline';

  }

}
