import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhotesAddComponent } from './filhotes-add.component';

describe('FilhotesAddComponent', () => {
  let component: FilhotesAddComponent;
  let fixture: ComponentFixture<FilhotesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilhotesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilhotesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
