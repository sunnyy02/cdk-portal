import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  template: `
    <div class="col-xs-6">
      <div class="panel panel-default">
        <div class="panel-heading"><h2>Stats</h2></div>
        <div class="panel-body">
          <div id="stats"></div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
