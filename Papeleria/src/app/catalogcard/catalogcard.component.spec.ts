import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogcardComponent } from './catalogcard.component';

describe('CatalogcardComponent', () => {
  let component: CatalogcardComponent;
  let fixture: ComponentFixture<CatalogcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
