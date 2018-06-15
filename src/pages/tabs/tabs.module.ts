import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../../shared/shared.module';
import { TabsPage } from './tabs';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    SharedModule,
    ComponentsModule
  ],
  exports: [
    TabsPage
  ]
})

export class TabsPageModule { }