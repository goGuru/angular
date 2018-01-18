import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PopularComponent } from './popular/popular.component';
import { LatestComponent } from './latest/latest.component';
import { HomepageComponent } from './homepage/homepage.component';

export const router:Routes = [
    { path: 'popular', component: PopularComponent, data: {title: 'Project X - Popular'}},
    { path: 'latest', component: LatestComponent, data: {title: 'Project X - Latest'}},
    { path: '', component: HomepageComponent, data: {title: 'Project X'}}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);