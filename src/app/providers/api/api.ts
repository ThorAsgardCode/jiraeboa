import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiProvider {
  public baseUrl: string = "https://8080-thorasgardc-jiraeboabac-7vl8rvx6fp0.ws-eu77.gitpod.io"//gitpod
  constructor(public http: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    })
  }

}

