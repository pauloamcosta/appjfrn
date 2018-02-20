import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LotacaoService } from '../../services/domain/lotacao.service';
import { LotacaoDTO } from '../../models/lotacao.dto';
import { API_CONFIG } from '../../config/api.config';


@IonicPage()
@Component({
  selector: 'page-lotacoes',
  templateUrl: 'lotacoes.html',
})
export class LotacoesPage {
  bucketUrl: string = API_CONFIG.bucketBaseUrl;
  items: LotacaoDTO[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public lotacaoService: LotacaoService
    ) {
  }

  ionViewDidLoad() {
    this.lotacaoService.findAll()
    .subscribe(response => { 
    this.items = response;
    },
    error => {
      console.log(error);
    });
  }


}

