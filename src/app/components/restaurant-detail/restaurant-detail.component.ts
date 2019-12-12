import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  data: any;
  id: any;
  restaurants: any;

  imgs = [
    {id: 1, url: '../../../assets/img/stroller_pizza.png'},
    {id: 2, url: '../../../assets/img/Sbarro.png'},
    {id: 3, url: '../../../assets/img/Panos_pizza.png'},
    {id: 4, url: '../../../assets/img/pizzeria_camion.png'},
    {id: 5, url: '../../../assets/img/trulli.png'},
  ];

  constructor(private router: ActivatedRoute, private nav: Router, private service: ServiceService) { }

  async ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.data = await this.service.getData();
    this.restaurants = this.data.response.stores;
    this.fillData(parseInt(this.id, 10));
    console.log(this.data);
  }

  fillData(id: number) {
    this.restaurants.forEach((elem: any) => {
      console.log(elem.id === id);
      if (elem.id === id) {
        this.data = elem;
        console.log(elem);
      }
    });
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

  logout() {
    localStorage.removeItem('email');
    this.nav.navigate(['/singin']);
  }

}
