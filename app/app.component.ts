/**
 * @author Temur Mahmudov
 */
import {Component} from 'angular2/core';

import {UsersComponent} from './users/users.component';
import {UserFormComponent} from './users/user-form.component';
import {PostsComponent} from './posts/posts.component';
import {HomeComponent} from './home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NedbComponent} from './nedb/nedb.component';

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@RouteConfig([
    { path: '/', name: 'Home',  component: HomeComponent, useAsDefault: true },
    { path: '/users', name: 'Users', component: UsersComponent },
    { path: '/nedb', name: 'NeDB', component: NedbComponent },
    { path: '/users/:id', name: 'EditUser', component: UserFormComponent },
	{ path: '/users/new', name: 'NewUser', component: UserFormComponent },
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template: `
               <navbar></navbar>              
                <div class="container">
                    <router-outlet></router-outlet>
                </div>
                `,
    directives: [ROUTER_DIRECTIVES, 
                 NavbarComponent]
})
export class AppComponent {     
}