import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectPage } from './architect.page';

describe('ArchitectPage', () => {
  let component: ArchitectPage;
  let fixture: ComponentFixture<ArchitectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
