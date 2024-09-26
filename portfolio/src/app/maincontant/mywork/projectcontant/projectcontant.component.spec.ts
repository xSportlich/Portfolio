import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcontantComponent } from './projectcontant.component';

describe('ProjectcontantComponent', () => {
  let component: ProjectcontantComponent;
  let fixture: ComponentFixture<ProjectcontantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectcontantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectcontantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
