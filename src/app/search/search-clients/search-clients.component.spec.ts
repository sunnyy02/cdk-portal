import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClientsComponent } from './search-clients.component';

describe('SearchClientsComponent', () => {
  let component: SearchClientsComponent;
  let fixture: ComponentFixture<SearchClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
