import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LotacoesPage } from './lotacoes';

@NgModule({
  declarations: [
    LotacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(LotacoesPage),
  ],
})
export class LotacoesPageModule {}
