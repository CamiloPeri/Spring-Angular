import { Component, OnInit } from '@angular/core';
import { CLIENTES } from '../../../assets/clientes.json';
import {Clientes} from '../../../models/clientes'
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  clientes: Clientes[]
  constructor() {}

  ngOnInit(): void {
    this.clientes = CLIENTES;
  }
}
