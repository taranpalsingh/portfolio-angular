import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ProjectComponent } from './pages/projects/project/project.component';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {path: 'projects', component: ProjectsComponent},
    {path: 'home', component: HomeComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}
