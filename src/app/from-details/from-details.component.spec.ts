import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromDetailsComponent } from './from-details.component';

describe('FromDetailsComponent', () => {
  let component: FromDetailsComponent;
  let fixture: ComponentFixture<FromDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
