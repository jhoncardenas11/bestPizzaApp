import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  data: any;
  imgs = [{id: 1, url: '../../../assets/img/stroller_pizza.png'}, {id: 2, url: '../../../assets/img/sbarro_pizza.png'}];

  constructor(private services: ServiceService, private router: Router) { }

  async ngOnInit() {
    this.data = await this.services.getData();
  }

  getImg(restaurant: any) {
    let temp = '../../../assets/img/sbarro_pizza.png';
    this.imgs.forEach(element => {
      if (element.id === restaurant.id) {
        console.log(element.url);
        temp = element.url;
      }
    });
    return temp;
  }

  sendRestaurantInfo(restaurant: any) {
    this.router.navigate(['/restaurant'], {queryParams: restaurant});
  }
}
