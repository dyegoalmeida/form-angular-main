import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {SearchCepService} from "../service/search-cep.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
      private router: Router,
      private searchCepService: SearchCepService
  ) { }

  ngOnInit(): void {
  }

  searchCep(ev: any, f: NgForm){
    const cep = ev.target.value;
    if (cep !== "") {
      this.searchCepService.getSearchCep(cep)
          .subscribe((result) =>{
            this.complementAddress(result, f);
          });
    }
  }

  complementAddress(data: any, f: NgForm) {
    f.form.patchValue({
      address: data.logradouro,
      complement: data.complemento,
      district: data.bairro,
      city: data.localidade,
      state: data.uf
    });
  }

  register(form: NgForm){
    if (form.valid){
      this.router.navigate(['./success']);
    } else {
      alert('Formulário inválido');
    }
  }
}
