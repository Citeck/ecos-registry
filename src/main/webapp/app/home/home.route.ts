import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/shared';
import { HomeComponent } from './';

export const HOME_ROUTE: Route = {
    path: '',
    component: HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'ECOS-Registry Registry'
    },
    canActivate: [UserRouteAccessService]
};
