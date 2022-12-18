import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecuentedQuestionsComponent } from './frecuented-questions.component';

describe('FrecuentedQuestionsComponent', () => {
  let component: FrecuentedQuestionsComponent;
  let fixture: ComponentFixture<FrecuentedQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrecuentedQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrecuentedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
