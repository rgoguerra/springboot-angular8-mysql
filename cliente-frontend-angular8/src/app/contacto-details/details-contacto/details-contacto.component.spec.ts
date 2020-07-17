import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsContactoComponent } from './details-contacto.component';

describe('DetailsContactoComponent', () => {
  let component: DetailsContactoComponent;
  let fixture: ComponentFixture<DetailsContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
