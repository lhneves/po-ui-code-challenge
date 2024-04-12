import { NgFor } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-custom-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements ControlValueAccessor {
  @Input() formControlName: string = '';

  @Input() options: SelectOption[] = [];
  @Input() disabled: boolean = false;
  @Input() error: boolean = false;

  @Input() placeholder: string = 'Choose an option';

  selectedOption: SelectOption | null = null;

  private onTouched: () => void = () => {};
  private onChange: (value: any) => void = () => {};

  selectOption(option: SelectOption) {
    this.selectedOption = option;
    this.onChange(option.value);
  }

  writeValue(value: any): void {
    this.selectedOption =
      this.options.find((option) => option.value === value) || null;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
