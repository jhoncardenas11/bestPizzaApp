import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  data: any;

  constructor(private services: ServiceService) { }

  async ngOnInit() {
    this.data = await this.services.getData();
  }
}
