import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula03 } from './aula03';

describe('Aula03', () => {
  let component: Aula03;
  let fixture: ComponentFixture<Aula03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aula03]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula03);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
