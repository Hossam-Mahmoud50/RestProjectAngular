import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdcutNewComponent } from './admin-prodcut-new.component';

describe('AdminProdcutNewComponent', () => {
  let component: AdminProdcutNewComponent;
  let fixture: ComponentFixture<AdminProdcutNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdcutNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdcutNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
