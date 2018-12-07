import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontagesComponent } from './montages.component';

describe('MontagesComponent', () => {
  let component: MontagesComponent;
  let fixture: ComponentFixture<MontagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
