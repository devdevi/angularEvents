import { Component, OnInit } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';
// El componente controla todo, desde aquÍ lo que contro

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
// EL PROVEDOR CREA LA INSTANCIA
  constructor(private auth: FormioAuthService) { }

  ngOnInit() {
  }

}
