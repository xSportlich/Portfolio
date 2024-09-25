import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyskilsComponent } from './myskils.component';

describe('MyskilsComponent', () => {
  let component: MyskilsComponent;
  let fixture: ComponentFixture<MyskilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyskilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyskilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
