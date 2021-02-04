import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import 'jspdf-autotable';
@Component({
  selector: 'app-registro-consultoria',
  templateUrl: './registro-consultoria.component.html',
  styleUrls: ['./registro-consultoria.component.scss']
})
export class RegistroConsultoriaComponent implements OnInit {

  emailPattern: any = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/;
  nombrePattern: any = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
  fechaPattern: any = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;

  form: FormGroup;

  @ViewChild('htmlData') htmlData: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.emptyForm();    
  }

  emptyForm(){
    this.form = new FormGroup({
      'fecha': new FormControl('', [Validators.required]),
      'nombreyapellido': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(40), Validators.pattern(this.nombrePattern)]),
      'identificacion': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]),
      'correo': new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      'cantidad': new FormControl('', [Validators.required]),
      'servicio': new FormControl('', [Validators.required]),
      'zona': new FormControl('', [Validators.required])
    });
  }


  public downloadPDF(): void {
    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF('p', 'mm');
    doc.setFontSize(10);
    doc.setTextColor("black");

    var niceimage = new Image();

    niceimage.src = '/assets/img/logo-visas';
    var columns2 = ["Cliente:", this.form.value['nombreyapellido']];
    var info = [["Identificacion:", this.form.value['identificacion']], ["Correo:", this.form.value['correo']], ["Fecha:", this.form.value['fecha']],
    ["Ciudad:", "Bogotá D.C."], ["Vendedor:", "Gina Garcia"]];

    var columns = ["Codigo", "Descripcion", "Cantidad", "Valor Total"];
    var data = [["-", this.form.value['servicio'], this.form.value['cantidad'], "160.000"]];

    var columns3 = ["Subtotal:", "$160.000"];
    var info2 = [["IVA", "$0"], ["Valor Neto a Pagar", "160.000"]];

    const autoTable = 'autoTable';
    doc.addImage(niceimage, 'JPEG', 10, 10, 80, 26);
    doc.text("www.visascontinental.com", 85, 20);
    doc.text("Telefono: 302 2155592 ", 85, 25);
    doc.text("Email: asesorias@visascontinental.com", 85, 30);
    doc.text("Cra 11B # 99 - 25 Bogotá, Colombia", 85, 35);
    doc.setFontSize(14);
    doc.setTextColor("darkblue");
    doc.text("COMPROBANTE DE PAGO", 80, 65);
    doc[autoTable](columns2, info, { startY: 80, theme: 'plain' });
    doc[autoTable](columns, data, { startY: 130 });
    doc[autoTable](columns3, info2, { tableWidth: 100, margin:{left:95, right:0}, startY:170 });
    doc.setFontSize(10);
    doc.setTextColor("black");


    var niceimage = new Image();

    niceimage.src = '/assets/img/firma2.jpg';
    doc.addImage(niceimage, 'JPEG', 50, 210, 45, 18);
    doc.setFontSize(8);
    doc.setTextColor("black");
    doc.text("_______________________________", 45, 220);
    doc.text("Firma Autorizada",55,230);
    doc.text("_______________________________", 105, 220);
    doc.text("Recibida y aceptada",115,230);
    doc.text("*El presente comprobante de pago se asimila en todos sus efectos a una letra de cambio, según el artículo 774 del Código de Comercio.",10,267);
    doc.text("*El presente comprobante de pago devengará intereses de mora a la máxima tasa legal vigente después de su vencimiento.",10,272);
    doc.text("*Nota: Pago a través de Consignación o transferencia a uenta de ahorros Davivienda 005170154362 y/o cuenta de ahorros Bancolombia ",10,282);
    doc.text("C211- 000002- 95 a nombre de Andres Ayure.",10,286);
    
    doc.save("comprobante-de-pago.pdf");
  }


  public errorMessages = {
    fecha:[
      { type: 'required', message: 'Fecha es requerida' },
      { type: 'maxlength', message: 'La fecha no es valida' },
      { type: 'minlength', message: 'La fecha no es valida' }
    ],
    nombreyapellido:[
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'maxlength', message: 'Los datos no son validos' },
      { type: 'minlength', message: 'Los datos no son validos' },
      { type: 'pattern', message: ' Los datos no son validos' }

    ],
    identificacion:[
      { type: 'required', message: 'Identificacion es requerido' },
      { type: 'maxlength', message: 'La Identificacion no es valida' },
      { type: 'minlength', message: 'La Identificacion no es valida' }
    ],
    correo:[
      { type: 'required', message: 'Correo es requerido' },
      { type: 'pattern', message: 'El correo no es valido' }
    ],
    cantidad:[
      { type: 'required', message: 'La cantidad es requerida' }
    ]
  };

  get fecha() {
    return this.form.get('fecha');
  }

  get nombreyapellido() {
    return this.form.get('nombreyapellido');
  }

  get identificacion() {
    return this.form.get('identificacion');
  }
  get correo() {
    return this.form.get('correo');
  }
  get cantidad() {
    return this.form.get('cantidad');
  }

  get servicio() {
    return this.form.get('servicio');
  }
  get zona() {
    return this.form.get('zona');
  }
}
