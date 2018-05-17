import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LivroService } from "../services/livro.service";

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.css']
})
export class CadastroLivroComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private livroServ: LivroService) { }

  ngOnInit() {
  }

  cadastrar() {
    this.livroServ.insert(this.formGroup.value)
      .subscribe(response => {
        alert("cadastro realizado com sucesso")
        this.formLivro();
      }, error => {
        alert("Erro ao cadastrar!")
      })
  }

  formLivro() {
    this.formGroup = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      autor: ['', [Validators.required]]
    })
  }
}


