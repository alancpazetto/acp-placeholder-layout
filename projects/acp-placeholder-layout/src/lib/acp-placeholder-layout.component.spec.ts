import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcpPlaceholderLayoutComponent } from './acp-placeholder-layout.component';

describe('AcpPlaceholderLayoutComponent', () => {
  let component: AcpPlaceholderLayoutComponent;
  let fixture: ComponentFixture<AcpPlaceholderLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcpPlaceholderLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcpPlaceholderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
