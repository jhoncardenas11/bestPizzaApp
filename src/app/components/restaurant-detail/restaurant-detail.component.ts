import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  data: any;

  constructor(private router: ActivatedRoute, private nav: Router) { }

  ngOnInit() {
    this.router.queryParamMap.subscribe((data: any) => {
      console.log(data.params);
      this.data = data.params;
    });
  }

  logout() {
    localStorage.removeItem('email');
    this.nav.navigate(['/singin']);
  }

}
