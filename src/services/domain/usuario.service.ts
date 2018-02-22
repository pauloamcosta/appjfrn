import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http/";
import { Observable } from "rxjs/Rx";

import { UsuarioDTO } from "../../models/usuario.dto";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";

@Injectable()
export class UsuarioService{
    constructor(public http: HttpClient,
    public storage: StorageService){

    }

    findByLogin(login: string) : Observable<UsuarioDTO>{

        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer '+ token});
        return this.http.get<UsuarioDTO>(
            `${API_CONFIG.baseUrl}/usuarios/usuario?value=${login}`,
        {'headers': authHeader});
    }
    getImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/usu${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }
}