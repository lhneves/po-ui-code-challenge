import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    component.options = options;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct initial state', () => {
    const selectTrigger = fixture.nativeElement.querySelector('.ui-select');
    expect(selectTrigger.value).toBe('');
    expect(component.selectedOption).toBeNull();
  });

  it('should select rigth option', () => {
    const selectTrigger = fixture.nativeElement.querySelector('.ui-select');
    selectTrigger.click();

    const optionsEl = fixture.nativeElement.querySelectorAll('option');
    optionsEl[1].click();

    expect(component.selectedOption).toEqual(options[0]);
  });

  it('should work with ngModel', () => {
    component.writeValue('2');
    fixture.detectChanges();

    expect(component.selectedOption).toEqual(options[1]);
  });

  it('should work with Reactive Forms', () => {
    component.registerOnChange((value: any) => {
      expect(value).toBe('2');
    });
    component.registerOnTouched(() => {});
    component.writeValue('2');
    fixture.detectChanges();

    expect(component.selectedOption).toEqual(options[1]);
  });
});
