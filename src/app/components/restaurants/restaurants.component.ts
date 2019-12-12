import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  @Output() restaurantObject = new EventEmitter<object>();

  data: any;
  imgs = [
    {id: 1, url: '../../../assets/img/stroller_pizza.png'},
    {id: 2, url: '../../../assets/img/Sbarro.png'},
    {id: 3, url: '../../../assets/img/Panos_pizza.png'},
    {id: 4, url: '../../../assets/img/pizzeria_camion.png'},
    {id: 5, url: '../../../assets/img/trulli.png'},
  ];

  constructor(private services: ServiceService, private router: Router) { }

  async ngOnInit() {
    this.data = await this.services.getData();
  }

  getImg(restaurant: any) {
    let temp = '../../../assets/img/sbarro_pizza.png';
    this.imgs.forEach(element => {
      if (element.id === restaurant.id) {
        temp = element.url;
      }
    });
    return temp;
  }

  sendRestaurantInfo(restaurant: any) {
    const tempObjs = String(restaurant.products);
    console.log(tempObjs);
    // this.restaurantObject.emit(restaurant);
    // console.log(temp);cambio?
    // this.router.navigate(['/restaurant']);
  }

  logout() {
    localStorage.removeItem('email');
    this.router.navigate(['/singin']);
  }
}
