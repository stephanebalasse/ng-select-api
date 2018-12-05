import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Mapping} from '../../../projects/select-api/src/select-api/select-api.component';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    mysel: new FormControl({ disabled: false}, Validators.required),
  });

  public mapping: Mapping = {id: 'id', value: 'myValue', description: 'description'};

  constructor() {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);

  }

}
