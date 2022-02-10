import { NgModule } from "@angular/core";


import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';


@NgModule({
  exports: [
    CardModule,
    MenubarModule,
    ButtonModule,
    DividerModule
  ]
})
export class PrimengModules {}