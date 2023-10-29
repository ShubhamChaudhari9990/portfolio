import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    MainmenuComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    NgbModule,
    FormsModule
  ]
})
export class PagesModule { }
