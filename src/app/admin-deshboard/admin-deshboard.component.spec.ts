import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeshboardComponent } from './admin-deshboard.component';

describe('AdminDeshboardComponent', () => {
  let component: AdminDeshboardComponent;
  let fixture: ComponentFixture<AdminDeshboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeshboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
