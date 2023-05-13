import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidoYFacilComponent } from './rapido-y-facil.component';

describe('RapidoYFacilComponent', () => {
  let component: RapidoYFacilComponent;
  let fixture: ComponentFixture<RapidoYFacilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapidoYFacilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidoYFacilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
