import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  data: any;
  imgs = [{id: 1, url: '../../../assets/img/stroller_pizza.png'}, {id: 2, url: '../../../assets/img/sbarro_pizza.png'}];

  constructor(private services: ServiceService) { }

  async ngOnInit() {
    this.data = await this.services.getData();
  }

  getImg(restaurant: any) {
    // console.log(restaurant);
    let temp: string;
    this.imgs.forEach(element => {
      if (element.id === restaurant.id) {
        console.log(element.url);
        temp = element.url;
      }
    });
    return temp;
  }
}
