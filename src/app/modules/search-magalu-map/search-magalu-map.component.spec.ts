import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMagaluMapComponent } from './search-magalu-map.component';

describe('SearchMagaluMapComponent', () => {
  let component: SearchMagaluMapComponent;
  let fixture: ComponentFixture<SearchMagaluMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMagaluMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMagaluMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
