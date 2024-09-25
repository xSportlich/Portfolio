import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMeSiteComponent } from './why-me-site.component';

describe('WhyMeSiteComponent', () => {
  let component: WhyMeSiteComponent;
  let fixture: ComponentFixture<WhyMeSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyMeSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyMeSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
