import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProjectComponent } from './pages/projects/project/project.component';
import { ProjectDialogComponent } from './pages/projects/project/project-dialog/project-dialog.component';
import { CarouselComponent } from './UI/carousel/carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { FeatureCardComponent } from './pages/about/feature-card/feature-card.component';
import { CompaniesComponent } from './pages/about/companies/companies.component';
import { PieChartComponent } from './UI/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { CertificateDialogComponent } from './pages/certifications/certificate-dialog/certificate-dialog.component';
import { BackgroundComponent } from './pages/home/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ProjectComponent,
    ProjectDialogComponent,
    CarouselComponent,
    FeatureCardComponent,
    CompaniesComponent,
    PieChartComponent,
    CertificationsComponent,
    CertificateDialogComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
