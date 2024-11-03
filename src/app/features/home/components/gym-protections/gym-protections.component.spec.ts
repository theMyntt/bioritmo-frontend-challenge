import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymProtectionsComponent } from './gym-protections.component';

describe('GymProtectionsComponent', () => {
  let component: GymProtectionsComponent;
  let fixture: ComponentFixture<GymProtectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymProtectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymProtectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
