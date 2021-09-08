import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-action',
  template: `
    <div class="col-xs-12">
      <div class="panel panel-default">
        <div class="panel-heading"><h2>Action</h2></div>
        <div class="panel-body">
          <div id="action"></div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ActionComponent implements OnInit {
  constructor(private service: DashboardService) {}

  ngOnInit(): void {}
}
