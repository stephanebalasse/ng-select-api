import {NgModule} from '@angular/core';
import {MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SelectApiComponent} from './select-api.component';

export {SelectApiComponent} from './select-api.component';

@NgModule({
  imports: [MatSelectModule, BrowserAnimationsModule, NoopAnimationsModule],
  declarations: [SelectApiComponent],
  exports: [SelectApiComponent]
})
export class SelectApiModule {}
