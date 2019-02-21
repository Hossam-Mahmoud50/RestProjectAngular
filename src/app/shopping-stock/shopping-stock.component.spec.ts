import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingStockComponent } from './shopping-stock.component';

describe('ShoppingStockComponent', () => {
  let component: ShoppingStockComponent;
  let fixture: ComponentFixture<ShoppingStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
