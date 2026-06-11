import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {  
    const ultimaRuta = sessionStorage.getItem('ultimoModulo');
    if (ultimaRuta) {
      this.router.navigate([`/${ultimaRuta}`]);
    }
  }

}
