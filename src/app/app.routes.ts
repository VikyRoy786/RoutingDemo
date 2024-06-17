import { Routes } from '@angular/router';
import { HomeComponent } from '../Component/home/home.component';
import { Component } from '@angular/core';
import { AboutComponent } from '../Component/about/about.component';
import { ChildFeedBackComponent } from '../Component/about/child-feed-back/child-feed-back.component';
import { ChildRatingComponent } from '../Component/about/child-rating/child-rating.component';
import { ServicesComponent } from '../Component/services/services.component';
import { ContactComponent } from '../Component/contact/contact.component';

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

];
