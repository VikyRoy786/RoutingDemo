import { Routes } from '@angular/router';
import { HomeComponent } from '../Component/home/home.component';
import { Component } from '@angular/core';
import { AboutComponent } from '../Component/about/about.component';
import { ChildFeedBackComponent } from '../Component/about/child-feed-back/child-feed-back.component';
import { ChildRatingComponent } from '../Component/about/child-rating/child-rating.component';
import { ServicesComponent } from '../Component/services/services.component';
import { ContactComponent } from '../Component/contact/contact.component';
import { TemplateComponent } from '../Component/template/template.component';
import { Template2Component } from '../Component/template2/template2.component';
import { ReactiveFormComponent } from '../Component/reactive-form/reactive-form.component';
import { ReactiveFrom2Component } from '../Component/reactive-from2/reactive-from2.component';

export const routes: Routes = [
    {path: '', component : HomeComponent},
    {path : 'about', 
        component : AboutComponent,
        children:[
            {path : 'feedback', component: ChildFeedBackComponent},
            {path : 'rating', component: ChildRatingComponent}
        ]
    },
    {path : 'service', component: ServicesComponent},
    {path : 'contact', component: ContactComponent},
    {path: 'template', component:TemplateComponent},
    {path: 'template2', component:Template2Component},
    {path:'reactiveForm', component:ReactiveFormComponent},
    {path:'reactiveForm2', component:ReactiveFrom2Component},
    {path: 'home', component:HomeComponent}

];
