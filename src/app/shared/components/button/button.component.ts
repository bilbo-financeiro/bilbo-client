import { ChangeDetectionStrategy, Component, Input, HostListener } from '@angular/core';

export enum ButtonType {
  Primary,
  Secondary,
  Save,
  Icon,
  Warning,
  Tertiary
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input()
  public id: string;

  @Input()
  public type: ButtonType;

  @Input()
  public label: string;

  @Input()
  public icon: string;

  @Input()
  public disabled: boolean;

  @Input()
  public arrow: boolean;

  public click(event: MouseEvent): void {
    if (this.disabled) {
      event.stopPropagation();
    }
  }

  @HostListener('click', ['$event'])
  public clickEvent(event: MouseEvent): void {
    event.stopPropagation();
  }
}
