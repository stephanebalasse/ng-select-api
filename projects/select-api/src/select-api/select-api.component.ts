import {Component, forwardRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export interface Mapping {
  id: string;
  value: string;
  description: string;
}

@Component({
  selector: 'app-select-api',
  templateUrl: './select-api.component.html',
  styleUrls: ['./select-api.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectApiComponent),
      multi: true
    }
  ]
})
export class SelectApiComponent implements OnInit, ControlValueAccessor {

  // value of the select
  private _value: any;
  private _disabled = false;

  @Input() placeholder: string;
  @Input() style: string;
  private _mapping: Mapping ;

  @Input()
  set mapping(mapp: Mapping) {
    this._mapping = mapp;
  }
  get mapping() { return this._mapping ; }



  constructor() {

  }

  ngOnInit() {
    console.log(this.mapping.value);
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  onChange = (newValue: string) => {
  };
  onTouch = () => {
  };

}
