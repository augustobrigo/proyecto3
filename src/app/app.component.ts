import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Proyecto3';
  Ciclo:string="DAW";
  nombreUsuario:string="";
  cambiarNombre(){
    this.Ciclo="Desarrollo de Aplicaciones Web"
  }
  RetornarNombre(){
    this.Ciclo="DAW";
  }
 cargarNombreUsuario(nombre:string){
  this.nombreUsuario=nombre.toUpperCase();
 }
}
