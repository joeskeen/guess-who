import { NgModule } from '@angular/core';
import {
  ButtonModule,
  FormFieldModule,
  InputModule,
  ModalModule,
  TileModule,
  ToasterModule,
} from '@healthcatalyst/cashmere';

@NgModule({
  exports: [
    TileModule,
    ButtonModule,
    InputModule,
    FormFieldModule,
    ModalModule,
    ToasterModule,
  ],
})
export class CashmereModule {}
