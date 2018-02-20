import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/aoi.config";
import { LotacaoDTO } from "../../models/lotacao.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class LotacaoService{

    constructor(public http: HttpClient){

    }
    findAll(): Observable<LotacaoDTO[]>{
        return this.http.get<LotacaoDTO[]>(`${API_CONFIG.baseUrl}/lotacoes`)
    }
}