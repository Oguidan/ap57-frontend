import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationStatusComponent } from './station-status.component';

describe('StationStatusComponent', () => {
  let component: StationStatusComponent;
  let fixture: ComponentFixture<StationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
