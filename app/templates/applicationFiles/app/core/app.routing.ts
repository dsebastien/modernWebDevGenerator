import { Routes, RouterModule } from '@angular/router';

// app components
import { Home } from '../pages/home/home';

const appRoutes: Routes = [
    { path: '/', component: Home }
];

export const routing = RouterModule.forRoot(appRoutes);