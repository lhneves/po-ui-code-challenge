import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorettoUiComponent } from './doretto-ui.component';

describe('DorettoUiComponent', () => {
  let component: DorettoUiComponent;
  let fixture: ComponentFixture<DorettoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DorettoUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DorettoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
