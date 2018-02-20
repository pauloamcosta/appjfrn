import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LotacaoService } from '../../services/domain/lotacao.service';


@IonicPage()
@Component({
  selector: 'page-lotacoes',
  templateUrl: 'lotacoes.html',
})
export class LotacoesPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public lotacaoService: LotacaoService
    ) {
  }

  ionViewDidLoad() {
    this.lotacaoService.findAll()
    .subscribe(response => { 
       console.log(response);
    },
    error => {
      console.log(error);
    });
  }


}

