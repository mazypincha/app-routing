import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-lista',
  imports: [CommonModule, RouterLink],
  templateUrl: './producto-lista.html',
  styleUrl: './producto-lista.css',
})
export class ProductoLista implements OnInit {
  ngOnInit(): void {
    sessionStorage.setItem('ultimoModulo', 'productos');
  }
}
