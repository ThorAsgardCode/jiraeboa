import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiProvider } from './api';
import * as _ from 'lodash';
@Injectable()
export class FilesProvider { 
    path = '/files';

    public httpOptions = {
        headers: new HttpHeaders({
          'tokkenHeader':'123',
        'Access-Control-Allow-Origin' : '*',
        })
      }

    constructor(public http: HttpClient) {}

    api: ApiProvider = new ApiProvider(this.http);

    fileValidate(files: any) {
      //this.imageError = null;
      let filesLista = [];
      
        if (files && files) {
          // Size Filter Bytes
          const max_size = 20971520;
          const allowed_types = ['image/png', 'image/jpeg', 'txt/plain', 'application/pdf'];
          const max_height = 15200;
          const max_width = 25600;
  
          if (files.size > max_size) {
           // this.imageError =
            //  'Maximum size allowed is ' + max_size / 1000 + 'Mb';
  
            return false;
          }
          if (!_.includes(allowed_types, files.type)) {
           // this.imageError = 'Only Images are allowed ( JPG | PNG )';
            return false;
          }
          
          
          return true;
  
          
        }
      
      return false;
  
    }

    /**
     * Creates a "Projetos"
     * @body Projetos JSON
     * @param callback 
     */
     upload(files, callback){
        const formData = new FormData();
        formData.append('file',files);
        
        this.http.post(this.api.baseUrl + this.path + '/upload', formData ,this.httpOptions).subscribe(
            (response) => callback(null, response),
            (error) => callback(error),
            
        );
    }
    
}