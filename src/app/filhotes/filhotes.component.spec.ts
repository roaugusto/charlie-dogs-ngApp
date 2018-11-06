import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhotesComponent } from './filhotes.component';

describe('FilhotesComponent', () => {
  let component: FilhotesComponent;
  let fixture: ComponentFixture<FilhotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilhotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilhotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
