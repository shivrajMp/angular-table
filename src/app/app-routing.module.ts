import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/user-list',
    pathMatch: 'full' 
  },
  {
    path: '**',
    redirectTo: '/user-list'
  },
  {
    path: 'user-list',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppRoutingModule {}
