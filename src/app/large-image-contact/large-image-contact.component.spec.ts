import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeImageContactComponent } from './large-image-contact.component';

describe('LargeImageContactComponent', () => {
  let component: LargeImageContactComponent;
  let fixture: ComponentFixture<LargeImageContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeImageContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeImageContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
