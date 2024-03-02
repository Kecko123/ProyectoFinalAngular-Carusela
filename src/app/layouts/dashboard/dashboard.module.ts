import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../../shared/shared.module';
import { BigtextDirective } from '../../shared/bigtext.directive';
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { InscriptionsComponent } from './pages/inscriptions/inscriptions.component';
import { adminGuard } from '../../core/guards/admin.guard';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    SharedModule,
    MatListModule,
    RouterModule.forChild([
      {
        path: 'alumns',
        canActivate: [adminGuard],
        component: UsersComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'courses',
        canActivate: [adminGuard],
        component: CoursesComponent
      },
      {
        path: 'inscriptions',
        canActivate: [adminGuard],
        component: InscriptionsComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      },
    ])
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
