import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KeyCode } from './model/keycode.model';

export enum Size {
  none,
  extraSmall,
  small,
  medium,
  large
}
@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumberComponent,
    multi: true
  }]
})
export class NumberComponent implements ControlValueAccessor, OnInit {
  @Input() public id: string;
  @Input() public size: Size;
  @Input() public limitValue: number = null;
  @Input() public value: number = null;
  @Input() public invalid: boolean;
  @Input() public disabled: boolean;
  @Input() public showArrows = true;


  @ViewChild('input', { static: true }) elementRef: ElementRef;
  private inputElement: HTMLInputElement;

  public model: number;
  public interval: number;
  public timeout: number;
  public onChange: (value: number) => void;

  constructor(public ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.inputElement = this.elementRef.nativeElement;
  }

  public writeValue(model: number): void {
    this.model = model;
    this.elementRef.nativeElement.value = this.model;
    this.ref.markForCheck();
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(): void { }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
    this.ref.markForCheck();
  }

  public incrementOrDecrement(operator: 'inc' | 'dec'): void {
    if (operator === 'inc') {
      if (this.limitValue) {
        if (this.elementRef.nativeElement.value < this.limitValue) {
          this.elementRef.nativeElement.value++;
          this.changeNumber();
        }
      } else {
        this.elementRef.nativeElement.value++;
        this.changeNumber();
      }
    }
    if (operator === 'dec' && this.elementRef.nativeElement.value >= 1 && this.elementRef.nativeElement.value >= 1) {
      this.elementRef.nativeElement.value--;
      this.changeNumber();
    }
  }

  public setValue(value: number): void {
    this.elementRef.nativeElement.value = value;
  }

  public initInterval(operator: 'inc' | 'dec'): void {
    this.interval = setInterval(() => this.incrementOrDecrement(operator), 50) as any;
    clearInterval(this.interval);
  }

  public changeNumber() {
    this.model = this.elementRef.nativeElement.value.length ? +this.elementRef.nativeElement.value : null;
    this.onChange(this.model);
  }

  public onMouseDown(event: MouseEvent, operator: 'inc' | 'dec'): void {
    event.stopPropagation();
    this.timeout = setTimeout(() => this.initInterval(operator), 500) as any;
    clearInterval(this.timeout);
  }

  public onKeyPress(event: KeyboardEvent): void | boolean {
    if (this.limitValue) {
      const value = parseInt(this.elementRef.nativeElement.value, 10);
      const key = String.fromCharCode(event.which) as any;
      if (value + key > this.limitValue) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    if ((KeyCode.NumpadZero === event.keyCode) || (KeyCode.DigitZero === event.keyCode) &&
      parseInt(this.elementRef.nativeElement.value, 10) === 0) {
      event.preventDefault();
      event.stopPropagation();
    } else if (parseInt(this.elementRef.nativeElement.value, 10) === 0) {
      this.elementRef.nativeElement.value = null;
      this.changeNumber();
    }
  }

  public onKeyDown(event: KeyboardEvent): void | boolean {
    if ([KeyCode.Delete, KeyCode.Backspace, KeyCode.Tab, KeyCode.Escape, KeyCode.Enter].indexOf(event.keyCode) !== -1 ||
      (event.keyCode === KeyCode.A && (event.ctrlKey || event.metaKey)) ||
      (event.keyCode === KeyCode.C && (event.ctrlKey || event.metaKey)) ||
      (event.keyCode === KeyCode.X && (event.ctrlKey || event.metaKey)) ||
      (event.keyCode >= 35 && event.keyCode <= 37) ||
      (event.keyCode === 39)) {
      return;
    }

    if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (event.keyCode === KeyCode.Up) {
      this.incrementOrDecrement('inc');
    }

    if (event.keyCode === KeyCode.Down) {
      this.incrementOrDecrement('dec');
    }
  }
}
