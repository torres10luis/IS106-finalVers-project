import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentJobsComponent } from './current-jobs.component';

describe('CurrentJobsComponent', () => {
  let component: CurrentJobsComponent;
  let fixture: ComponentFixture<CurrentJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
