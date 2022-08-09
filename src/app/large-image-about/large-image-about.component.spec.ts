import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeImageAboutComponent } from './large-image-about.component';

describe('LargeImageAboutComponent', () => {
  let component: LargeImageAboutComponent;
  let fixture: ComponentFixture<LargeImageAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeImageAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeImageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
