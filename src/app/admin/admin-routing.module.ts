import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutInfoComponent } from './about-info/about-info.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', component: AboutInfoComponent },
  { path: 'contacts', component: ContactsComponent},
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
