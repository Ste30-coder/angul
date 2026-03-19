import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todoing } from './todoing';

describe('Todoing', () => {
  let component: Todoing;
  let fixture: ComponentFixture<Todoing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todoing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todoing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
