import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-lista',
  imports: [],
  templateUrl: './usuario-lista.html',
  styleUrl: './usuario-lista.css',
})
export class UsuarioLista implements OnInit {
  ngOnInit(): void {   
    sessionStorage.setItem('ultimoModulo', 'usuarios');
  }
}
