import { Router } from '@angular/router';
import { LoginService } from './../../_service/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {


  form: FormGroup;

  constructor(private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  login(){
    this.loginService.login(this.form.value['usuario'], this.form.value['contrasena']).subscribe(data => {
      //sessionStorage.setItem(environment.TOKEN_NAME, data.access_token);
      this.router.navigate(['']);
    });
  }

  
  iniciarFormulario(){
    this.form = new FormGroup({
     'usuario': new FormControl('', [Validators.required]),
     'contrasena': new FormControl('', [Validators.required])
    });
  }

  get usuario() {
    return this.form.get('usuario');
  }

  get contrasenia() {
    return this.form.get('contrasena');
  }

}
