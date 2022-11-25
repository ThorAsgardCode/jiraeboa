import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { AdicionarOcorrenciasComponent } from './Components/adicionar-ocorrencias/adicionar-ocorrencias.component';
import { VisualizarOcorrenciasComponent } from './Components/visualizar-ocorrencias/visualizar-ocorrencias.component';
import { AnalizarOcorrenciasComponent } from './Components/analizar-ocorrencias/analizar-ocorrencias.component';
import { AdicionarActividadesComponent } from './Components/adicionar-actividades/adicionar-actividades.component';
import { VisualizarActividadesComponent } from './Components/visualizar-actividades/visualizar-actividades.component';
import { AdicionarProjectosComponent } from './Components/adicionar-projectos/adicionar-projectos.component';
import { VisualizarProjectosComponent } from './Components/visualizar-projectos/visualizar-projectos.component';
import { VerProjectoComponent } from './Components/ver-projecto/ver-projecto.component';
import { GestaoColaboradoresComponent } from './Components/gestao-colaboradores/gestao-colaboradores.component';
import { GestaoUtilizadoresComponent } from './Components/gestao-utilizadores/gestao-utilizadores.component';
import { GestaoActasComponent } from './Components/gestao-actas/gestao-actas.component';
import { VerActaComponent } from './Components/ver-acta/ver-acta.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './Components/inicio/inicio.component';
import { VerPerfilComponent } from './Components/ver-perfil/ver-perfil.component';
import { VerDefinicoesComponent } from './Components/ver-definicoes/ver-definicoes.component';
import { VerLogsComponent } from './Components/ver-logs/ver-logs.component';
import { VerAllAlertsComponent } from './Components/ver-all-alerts/ver-all-alerts.component';
import { VerOcorrenciaNumeroComponent } from './Components/ver-ocorrencia-numero/ver-ocorrencia-numero.component';
import { VerActividadeNumeroComponent } from './Components/ver-actividade-numero/ver-actividade-numero.component';
import { VerprojectoNumeroComponent } from './Components/verprojecto-numero/verprojecto-numero.component';
import { VerColaboradorNumeroComponent } from './Components/ver-colaborador-numero/ver-colaborador-numero.component';
import { VerUtilizadorNumeroComponent } from './Components/ver-utilizador-numero/ver-utilizador-numero.component';
import { VerActaNumeroComponent } from './Components/ver-acta-numero/ver-acta-numero.component';
import { VisualizarRecursosComponent } from './Components/visualizar-recursos/visualizar-recursos.component';
import { AdicionarRecursosComponent } from './Components/adicionar-recursos/adicionar-recursos.component';
import { AdicionarActasComponent } from './Components/adicionar-actas/adicionar-actas.component';
import { AlertToastService } from './alert-toast/alert-toast.service';
import { AddColaboradorComponent } from './Components/add-colaborador/add-colaborador.component';
import { JwtInterceptor } from './_helpers';
import { SelectColaboradorComponent } from './Components/select-colaborador/select-colaborador.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CenterContentComponent,
    FooterContentComponent,
    AppComponent,
    LoginComponent,
    AdicionarOcorrenciasComponent,
    VisualizarOcorrenciasComponent,
    AnalizarOcorrenciasComponent,
    AdicionarActividadesComponent,
    VisualizarActividadesComponent,
    AdicionarProjectosComponent,
    VisualizarProjectosComponent,
    VerProjectoComponent,
    GestaoColaboradoresComponent,
    GestaoUtilizadoresComponent,
    GestaoActasComponent,
    VerActaComponent,
    DashboardComponent,
    InicioComponent,
    VerPerfilComponent,
    VerDefinicoesComponent,
    VerLogsComponent,
    VerAllAlertsComponent,
    VerOcorrenciaNumeroComponent,
    VerActividadeNumeroComponent,
    VerprojectoNumeroComponent,
    VerColaboradorNumeroComponent,
    VerUtilizadorNumeroComponent,
    VerActaNumeroComponent,
    VisualizarRecursosComponent,
    AdicionarRecursosComponent,
    AdicionarActasComponent,
    AddColaboradorComponent,
    SelectColaboradorComponent

  ],
  imports: [
    ToastNotificationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormlyBootstrapModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'Required Field' }
      ],
    }),
    NgbModule,

  ],
  providers: [
    AlertToastService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
