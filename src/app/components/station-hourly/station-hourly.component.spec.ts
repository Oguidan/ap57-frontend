import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationHourlyComponent } from './station-hourly.component';

describe('StationHourlyComponent', () => {
  let component: StationHourlyComponent;
  let fixture: ComponentFixture<StationHourlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationHourlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationHourlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
