import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  searchTypes = [
    { name: 'Clients', route: 'client' },
    { name: 'Orders', route: 'order' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: DashboardService
  ) {}
  ngOnInit(): void {}

  onChange(e) {
    console.log('route', e);
    if (e.value) {
      const serviceType = e.value;
      this.service.searchType$.next(serviceType);
      this.router.navigate([`${serviceType}`], { relativeTo: this.route });
    }
  }
}
