import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';


const URL = environment.imgPath;

//Este name es el nombre del pipe que llamamos en los tabspage
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {

    if(!img) {
      return './assets/no-image-banner.jpg';
    }

    const imgURL = `${ URL }/${ size }${img}`;
    // console.log('URL', imgURL);
  
    
    return imgURL;
  }

}
