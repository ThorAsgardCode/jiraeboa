import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiProvider } from './api';

@Injectable()
export class ProjetoProvider { 
    path = '/projetos';
    constructor(public http: HttpClient) {}

    api: ApiProvider = new ApiProvider(this.http);

    /**
     * Returns all "Projetos"
     * @param callback 
     */
    getAll(query,field,page,numElem,callback){
        this.http.get(this.api.baseUrl + this.path + '/list?page='+page+'&numElem='+numElem+'&query='+query+'&field='+field, this.api.httpOptions).subscribe(
            (response) => callback(null, response),
            (error) => callback(error.error.message)
        );
    }

    /**
     * Returns all "Actividades"
     * @param callback 
     */
    getTotais(callback){
    this.http.get(this.api.baseUrl + this.path + '/totais', this.api.httpOptions).subscribe(
        (response) => callback(null, response),
        (error) => callback(error.error.message)
    );
    }

    
    /**
     * Returns all Projetos Por Aprovar
     * @param callback 
     */
    getAllPorAprovar(callback){
        this.http.get(this.api.baseUrl + this.path + '/listarPendentes', this.api.httpOptions).subscribe(
            
            (response) => callback(null, response),
            (error) => callback(error.error.message)
        );
    }

     /**
     * Returns all "Projetos"
     * @param callback 
     */
    getOne(ocorrenciaNumero,callback){
        this.http.get(this.api.baseUrl + this.path + '/ver?idOcorrencia='+ocorrenciaNumero,this.api.httpOptions).subscribe(
            (response) => callback(null, response),
            (error) => callback(error.error.message)
        );
    }

    /**
    * Searchs a "Projetos"
    * Returns all "Projetos by given queary"
    * @param callback
    * @param searchQuery 
    */ 
   search(searchQuery,callback){
       this.http.get(this.api.baseUrl + this.path + '/search?searchQuery='+searchQuery,this.api.httpOptions).subscribe(
           (response) => callback(null, response),
           (error) => callback(error.error.message)
       );
   }

  
    /**
     * Creates a "Projetos"
     * @body Projetos JSON
     * @param callback 
     */
    create(obj, callback){
        
        
        this.http.post(this.api.baseUrl + this.path + '/add?sessionId=123', obj ,this.api.httpOptions).subscribe(
            (response) => callback(null, response),
            (error) => callback(error)
        );
    }

    /**
     * Creates a "Projetos"
     * @body Atividades JSON
     * @param callback 
     */
    edit(obj, callback){
        this.http.post(this.api.baseUrl + this.path + '/add?sessionId=123', obj ,this.api.httpOptions).subscribe(
            (response) => callback(null, response),
            (error) => callback(error)
        );
    }
/**
     * Creates a "Atividades"
     * @body Atividades JSON
     * @param callback 
     */
    aprovar(id, callback){
        
        

        this.http.post(this.api.baseUrl + this.path + '/aprovar/'+id ,{},this.api.httpOptions).subscribe(
            (response) => callback(null, response),
            (error) => callback(error)
        );
    }

    pararevisao(id, callback){
        
        

        this.http.post(this.api.baseUrl + this.path + '/reprovar/'+id ,{},this.api.httpOptions).subscribe(
            (response) => callback(null, response),
            (error) => callback(error)
        );
    }
    
}