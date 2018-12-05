import {Pipe, PipeTransform} from '@angular/core';
import {Mapping} from './select-api.component';

@Pipe({
  name: 'mappingPipe'
})
export class MappingPipe implements PipeTransform {

  transform(data: any, props: any, mapping: Mapping): any {
    if (props) {
      return data[mapping[props]];
    }
  }

}
