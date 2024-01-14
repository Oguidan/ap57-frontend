import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleDayComponent } from './get-single-day.component';

describe('GetSingleDayComponent', () => {
  let component: GetSingleDayComponent;
  let fixture: ComponentFixture<GetSingleDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSingleDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetSingleDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
