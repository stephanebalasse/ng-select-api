import {NgModule} from '@angular/core';
import {MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SelectApiComponent} from './select-api.component';
import {HttpClientModule} from '@angular/common/http';

export {SelectApiComponent} from './select-api.component';
import {MappingPipe} from './mapping.pipe';

@NgModule({
  imports: [MatSelectModule, BrowserAnimationsModule, NoopAnimationsModule, HttpClientModule],
  declarations: [SelectApiComponent, MappingPipe],
  exports: [SelectApiComponent]
})
export class SelectApiModule {
}
