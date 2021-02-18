import { ActivatedRoute, Router } from '@angular/router';
import { Users } from './../../../_model/Users';
import { UserService } from './../../../_service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-consultor',
  templateUrl: './agregar-consultor.component.html',
  styleUrls: ['./agregar-consultor.component.scss'],
  providers:[UserService]
})
export class AgregarConsultorComponent implements OnInit {

  form: FormGroup;

  constructor(private usuarioService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.inicializarFormVacio();
  }

  inicializarFormVacio() {
    this.form = new FormGroup({
      'nombres': new FormControl('', [Validators.required]),
      'identificacion': new FormControl('', [Validators.required]),
      'correo': new FormControl('', [Validators.required]),
      'contrasena': new FormControl('', [Validators.required]),
      'telefono': new FormControl('', [Validators.required]),
    });
  }

  guardar() {
    let usuario = new Users();
    usuario.name = this.form.value['nombres'];
    usuario.email = this.form.value['correo'];
    usuario.password = this.form.value['contrasena'];
    usuario.cedula = this.form.value['identificacion'];
    usuario.telefono = this.form.value['telefono'];

    this.usuarioService.registrar(usuario).subscribe((res) => {
      console.log(res);
      this.form.reset();
      this.usuarioService.mensajeCambio.next('Consultor guardado satisfactoriamente');
      this.router.navigate(['/conductor']);
    });
    
  }

  get nombres(){
    return this.form.get('nombres');
  }

  get correo(){
    return this.form.get('correo');
  }

  get identificacion(){
    return this.form.get('identificacion');
  }

  get contrasena(){
    return this.form.get('contrasena');
  }

  get telefono(){
    return this.form.get('telefono');
  }
}
