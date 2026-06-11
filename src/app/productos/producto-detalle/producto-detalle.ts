import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  imports: [RouterLink],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle implements OnInit {
  
  productoId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {  
    this.productoId = this.route.snapshot.paramMap.get('id');
    sessionStorage.setItem('ultimoModulo', `productos/${this.productoId}`);
  }
}
