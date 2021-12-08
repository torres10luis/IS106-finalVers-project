import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelJobsComponent } from './cancel-jobs.component';

describe('CancelJobsComponent', () => {
  let component: CancelJobsComponent;
  let fixture: ComponentFixture<CancelJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
