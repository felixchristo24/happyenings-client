import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CovidComponent } from './covid/covid.component';

const appRouting: Routes = [
    { path: '', component: HomeComponent },
    { path: 'covid', component: CovidComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRouting)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
