import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StartshipService } from 'src/app/services/startship.service';

@Component({
  selector: 'app-startship-view',
  templateUrl: './startship-view.component.html',
  styleUrls: ['./startship-view.component.css']
})
export class StartshipViewComponent implements OnInit {
  starshipForm: FormGroup;
  starshipFormControl = new FormControl();
  resultado:any;

  constructor(private startshipService: StartshipService,private fb: FormBuilder,private router:Router) { 
    
  }

  ngOnInit() {
    this.starshipForm = this.fb.group({       
      danioA: new FormControl(''),
      danioB: new FormControl(''),
      danioC: new FormControl(''),
      velocidadLuz: new FormControl(''),
      res: new FormControl(''),     
    })
  }

  onSubmit(){ 

    this.startshipService.listResultados(
      Number(this.starshipForm.get("danioA")?.value),
      Number(this.starshipForm.get("danioB")?.value),
      Number(this.starshipForm.get("danioC")?.value),
      Number(this.starshipForm.get("velocidadLuz")?.value)
    ).subscribe((data:any) => {
      this.resultado = data.mensaje;
      console.log(data)                     
    },     
    error => console.log(error));   
  }
  
}
