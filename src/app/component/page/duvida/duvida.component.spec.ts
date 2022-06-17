import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuvidaComponent } from './duvida.component';

describe('DuvidaComponent', () => {
  let component: DuvidaComponent;
  let fixture: ComponentFixture<DuvidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuvidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuvidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
