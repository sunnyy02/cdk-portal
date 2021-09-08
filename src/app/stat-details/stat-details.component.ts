import { CdkPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, Injector, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stat-details',
  template: `
    <ng-template cdk-portal>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [
  ]
})
export class StatDetailsComponent implements AfterViewInit, OnDestroy{

  @ViewChild(CdkPortal)
  private portal: CdkPortal;

  private host: DomPortalOutlet;

  constructor(
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  ngAfterViewInit(): void {
    this.host = new DomPortalOutlet(
      document.querySelector('#stats'),
      this.cfr,
      this.appRef,
      this.injector
    );

    this.host.attach(this.portal);
  }
  ngOnDestroy(): void {
    this.host.detach();
  }
}
