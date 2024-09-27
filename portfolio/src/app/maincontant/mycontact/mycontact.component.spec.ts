import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycontactComponent } from './mycontact.component';

describe('MycontactComponent', () => {
  let component: MycontactComponent;
  let fixture: ComponentFixture<MycontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MycontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MycontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
