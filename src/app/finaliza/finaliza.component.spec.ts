import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizaComponent } from './finaliza.component';

describe('FinalizaComponent', () => {
  let component: FinalizaComponent;
  let fixture: ComponentFixture<FinalizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
