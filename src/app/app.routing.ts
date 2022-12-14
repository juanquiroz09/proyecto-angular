import { ModuleWithProviders } from '@angular/core';
import{Routes, RouterModule} from '@angular/router'

import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { SliderComponent } from './components/slider/slider.component';

const appRoutes: Routes = [
    {path: ' ', component: AboutmeComponent},
    {path: 'aboutme', component: AboutmeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'create-project', component: CreateComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'project-detail/:id', component: DetailComponent},
    {path: 'project-edit/:id', component: EditComponent},
    {path: 'galery', component: SliderComponent},
    {path: '**', component: ErrorComponent},
];
export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);