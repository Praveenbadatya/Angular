import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielineComponent } from './movieline.component';

describe('MovielineComponent', () => {
  let component: MovielineComponent;
  let fixture: ComponentFixture<MovielineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovielineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovielineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
