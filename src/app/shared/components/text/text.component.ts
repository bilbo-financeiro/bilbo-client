import { ChangeDetectionStrategy, Component, Input, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export enum TextSize {
  none,
  small,
  medium,
  large
}

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TextComponent,
    multi: true
  }]
})
export class TextComponent implements ControlValueAccessor {

  @Input()
  id: string;

  @Input()
  size: TextSize;

  @Input()
  invalid: boolean;

  @ViewChild('textInput', {static: true})
  textInput: ElementRef;

  public value: string;
  private onChange: (value: string) => void;
  public disabled: boolean;

  constructor(private ref: ChangeDetectorRef) { }

  public writeValue(value: string): void {
    if (value != null) {
      this.value = value;
      this.ref.markForCheck();
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(): void { }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.ref.markForCheck();
  }

  public change(value: string): void {
    this.value = value;
    this.onChange(value);
  }
}
