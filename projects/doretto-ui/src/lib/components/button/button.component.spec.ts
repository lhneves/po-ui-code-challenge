import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { ButtonVariants } from './button-variants.enum';
import { ButtonSizes } from './button-sizes.enum';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label', () => {
    component.label = 'Click me';
    fixture.detectChanges();

    const buttonLabel = fixture.nativeElement.querySelector('.ui-btn-label');
    expect(buttonLabel.textContent).toBe('Click me');
  });

  it('should apply the correct variant class', () => {
    component.variant = ButtonVariants.secondary;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.ui-btn');
    expect(button.getAttribute('variant')).toBe('secondary');
  });

  it('should apply the correct size class', () => {
    component.size = ButtonSizes.large;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.ui-btn');
    expect(button.getAttribute('size')).toBe('large');
  });

  it('should apply the danger class', () => {
    component.danger = true;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.ui-btn');
    expect(button.getAttribute('danger')).toBe('true');
  });

  it('should be disabled', () => {
    component.disabled = true;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.ui-btn');
    expect(button.disabled).toBeTrue();
  });

  it('should emit the click event', () => {
    spyOn(component.onClick, 'emit');
    const button = fixture.nativeElement.querySelector('.ui-btn');
    button.click();
    expect(component.onClick.emit).toHaveBeenCalled();
  });

  it('should have the correct aria-label', () => {
    component.ariaLabel = 'Click the button';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.ui-btn');
    expect(button.getAttribute('aria-label')).toBe('Click the button');
  });

  it('should have the correct type', () => {
    component.type = 'submit';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.ui-btn');
    expect(button.type).toBe('submit');
  });
});
