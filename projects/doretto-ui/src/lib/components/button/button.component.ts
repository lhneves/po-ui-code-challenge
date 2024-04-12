import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonVariants } from './button-variants.enum';
import { ButtonSizes } from './button-sizes.enum';

@Component({
  selector: 'ui-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input('label') label?: string;

  @Input('variant') variant?: ButtonVariants = ButtonVariants.primary;

  @Input('danger') danger?: boolean = false;

  @Input('size') size?: ButtonSizes = ButtonSizes.medium;

  @Input('disabled') disabled?: boolean = false;

  @Output('onClick') onClick = new EventEmitter<Event>();

  @Input('aria-label') ariaLabel?: string;

  @Input('type') type?: 'submit' | 'reset' | 'button' = 'button';
}
