import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicregisterComponent } from './dynamicregister.component';

describe('DynamicregisterComponent', () => {
  let component: DynamicregisterComponent;
  let fixture: ComponentFixture<DynamicregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
