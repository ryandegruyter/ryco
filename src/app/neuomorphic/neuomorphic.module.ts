import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NeuomorphCardComponent} from './card/neuomorph-card.component';


@NgModule({
  declarations: [NeuomorphCardComponent],
  exports: [
    NeuomorphCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NeuomorphicModule {
}
