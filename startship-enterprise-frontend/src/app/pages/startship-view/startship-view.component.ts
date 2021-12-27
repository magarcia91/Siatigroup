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
    
    const parametros = { 
      danioA: this.starshipForm.get("danioA")?.value,
      danioB:this.starshipForm.get("danioB")?.value,
      danioC: this.starshipForm.get("danioC")?.value,
      velocidadLuz:this.starshipForm.get("velocidadLuz")?.value, 
      res: this.starshipForm.get("res")?.value,                
    }    

    console.log(parametros);
    this.startshipService.listResultados().subscribe(data => {
      console.log(data)                     
    },     
    error => console.log(error));   
  }
  
}
