import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontantComponent } from './maincontant.component';

describe('MaincontantComponent', () => {
  let component: MaincontantComponent;
  let fixture: ComponentFixture<MaincontantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaincontantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaincontantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
