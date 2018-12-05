import {Component, forwardRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SelectApiService} from './select-api.service';



export interface Mapping {
  id: string;
  label: string;
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
    },
    SelectApiService
  ]
})
export class SelectApiComponent implements OnInit, ControlValueAccessor {

  // value of the select
  private _value: any;
  private _disabled = false;
  public datas: any[] = [];
  public loading = true;

  @Input() placeholder: string;
  @Input() mapping: Mapping;
  @Input() inputs: string | any[];
  @Input() url: string;


  constructor(private selectApi: SelectApiService) {
  }

  ngOnInit() {
    if (!this.mapping && !this.url) {
      this.mapping = {id: 'id', label: 'label', description: 'description'};
    }
    if (typeof this.inputs === 'string') {
      this.datas = [];
      this.loading = true;
      this.selectApi.get(this.inputs).subscribe((datas) => {
        this.datas = datas;
        this.loading = false;
      });
    } else {
      this.datas = this.inputs;
      this.loading = false;
    }
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
