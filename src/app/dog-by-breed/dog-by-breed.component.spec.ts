import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogByBreedComponent } from './dog-by-breed.component';

describe('DogByBreedComponent', () => {
  let component: DogByBreedComponent;
  let fixture: ComponentFixture<DogByBreedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogByBreedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogByBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
