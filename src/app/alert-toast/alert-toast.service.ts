import { Component, OnInit, Injectable } from '@angular/core';
import{ Toaster } from 'ngx-toast-notifications';

@Injectable()
export class AlertToastService {

  constructor(public toaster:Toaster) { }


    mostrarToast(mensagem,type){
      this.toaster.open({
        text: mensagem,
        type:type,
        duration:3000,
        position:'top-center'
      });
    }

    mostrarToastByTime(mensagem,type,time){
      this.toaster.open({
        text: mensagem,
        type:type,
        duration:time,
        position:'top-center'
      });
    }
  

}
