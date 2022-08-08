import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeImageShopComponent } from './large-image-shop.component';

describe('LargeImageShopComponent', () => {
  let component: LargeImageShopComponent;
  let fixture: ComponentFixture<LargeImageShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeImageShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeImageShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
