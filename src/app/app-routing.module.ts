import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guard/auth.guard';
import { SecurityGuard } from '@core/guard/security.guard';
import { Role } from '@shared/role/model/Role';
import { DetailsComponent } from './presentation/details/details.component';
import { HomeComponent } from './feature/home/component/home.component';
import { ListComponent } from './presentation/offers/list/list.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('@auth/auth.module').then(mod => mod.AuthModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'user',
    loadChildren: () => import('@user/user.module').then(mod => mod.UserModule),
    canActivate: [SecurityGuard],
    data: { rolesEsperados: [ Role.ADMINISTRADOR, Role.ESTUDIANTE ]}
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'vehicle',
    loadChildren: () => import('@vehicle/vehicle.module').then(mod => mod.VehicleModule),
    canActivate: [SecurityGuard],
    data: { rolesEsperados: [ Role.ADMINISTRADOR, Role.ESTUDIANTE ]}
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/presentation/dashboard/dashboard.module').then((module)=>module.DashboardModule),
  },
  {
    path:'offers',
    loadChildren:()=>import('../app/presentation/offers/offers-routing.module').then(mod=>mod.OffersRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
