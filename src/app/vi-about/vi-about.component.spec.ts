import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViAboutComponent } from './vi-about.component';

describe('ViAboutComponent', () => {
  let component: ViAboutComponent;
  let fixture: ComponentFixture<ViAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
