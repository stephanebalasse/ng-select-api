import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Mapping} from '../../../projects/select-api/src/select-api/select-api.component';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  profileForm = new FormGroup({
    selectData: new FormControl('', Validators.required),
    selectDataCustom: new FormControl(''),
    selectDataUrl: new FormControl('', Validators.required),
  });

  public mapping: Mapping = {id: 'id', label: 'label', description: 'description'};

  public datas = [
    {
      id: 'PS',
      label: 'PS',
      description: 'PS'
    },
    {
      id: 'CP',
      label: 'CP',
      description: 'Court préparatoire'
    },
    {
      id: 'CE1',
      label: 'CE1',
      description: 'Classe élémentaire 1'
    }
  ];
  public mappingCustom: Mapping = {id: 'id', label: 'value', description: 'description'};
  public datasCustom = [
    {
      id: 'PS',
      value: 'PS',
      description: 'PS'
    },
    {
      id: 'CP',
      value: 'CP',
      description: 'Court préparatoire'
    },
    {
      id: 'CE1',
      value: 'CE1',
      description: 'Classe élémentaire 1'
    },
  ];

  public mappingUrl: Mapping = {id: 'id', label: 'title', description: 'description'};
  public datasUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor() {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
   alert(JSON.stringify(this.profileForm.value));

  }

}
