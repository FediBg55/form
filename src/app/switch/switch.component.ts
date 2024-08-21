import { Component, Input } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-switch',
  styleUrls: ['./switch.component.scss'],
  templateUrl: './switch.component.html',
})
export class SwitchTypeComponent {
  @Input() field!: FormlyFieldConfig;
}
