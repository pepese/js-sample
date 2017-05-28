import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
