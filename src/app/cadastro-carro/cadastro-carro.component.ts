import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CarroService } from "../services/carro.service";

@Component({
  selector: 'app-cadastro-carro',
  templateUrl: './cadastro-carro.component.html',
  styleUrls: ['./cadastro-carro.component.css']
})
export class CadastroCarroComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private carroServ: CarroService) { }

  ngOnInit() {
  }

cadastrar(){
  this.carroServ.insert(this.formGroup.value)
  .subscribe(response =>{
    alert("Cadastro realizado com sucesso")
    this.formCarro();
  }, error => {
     alert("Erro ao cadastrar!")
  })
}

formCarro() {
    this.formGroup = this.formBuilder.group({
      modelo: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      ano: ['', [Validators.required]],
      preco: ['', [Validators.required]]
    })
  }
}
