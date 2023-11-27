import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register(form: NgForm){
    // if (form.valid){
    //   this.router.navigate(['./success']);
    // } else {
    //   alert('Formulário inválido');
    // }
    console.log(form.controls);
  }
}
