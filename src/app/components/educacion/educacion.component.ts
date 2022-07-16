import { Component, OnInit } from '@angular/core';

import { subscribeOn } from 'rxjs';
import { EducacionService } from 'src/app/services/educacion.service';

import { FormControl } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion:any;
  addForm: any;
  nuevaEducacion = new FormControl;
     
  constructor(private datosEducacion:EducacionService) { }

  ngOnInit(): void {
    this.datosEducacion.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.educacion=data;
    });
  }

  guardarEducacion(){
    console.log("hola");
  }

}
/*
this.productService.create(this.product).subscribe(() => {
  this.productService.showMessage('Produto criado!')
  this.router.navigate(['/products'])

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }*/