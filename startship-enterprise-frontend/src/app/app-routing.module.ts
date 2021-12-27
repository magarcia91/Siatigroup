import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartshipViewComponent } from './pages/startship-view/startship-view.component';

const routes: Routes = [
  { path: 'resultados', component: StartshipViewComponent, data: { title: "Administracion de Potencia" } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
