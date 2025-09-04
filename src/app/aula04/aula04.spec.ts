import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula04 } from './aula04';

describe('Aula04', () => {
  let component: Aula04;
  let fixture: ComponentFixture<Aula04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aula04]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula04);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
