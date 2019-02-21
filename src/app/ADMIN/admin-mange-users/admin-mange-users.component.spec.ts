import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMangeUsersComponent } from './admin-mange-users.component';

describe('AdminMangeUsersComponent', () => {
  let component: AdminMangeUsersComponent;
  let fixture: ComponentFixture<AdminMangeUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMangeUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMangeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
