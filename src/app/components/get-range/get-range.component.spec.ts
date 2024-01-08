import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRangeComponent } from './get-range.component';

describe('GetRangeComponent', () => {
  let component: GetRangeComponent;
  let fixture: ComponentFixture<GetRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetRangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
