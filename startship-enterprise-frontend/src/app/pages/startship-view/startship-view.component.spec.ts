import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartshipViewComponent } from './startship-view.component';

describe('StartshipViewComponent', () => {
  let component: StartshipViewComponent;
  let fixture: ComponentFixture<StartshipViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartshipViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartshipViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
