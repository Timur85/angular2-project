/**
 * @author Temur Mahmudov
 */
import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';
import {BasicValidators} from '../shared/basicValidators';

import {UserService} from './users.service';
import {Users} from './users';

@Component({
    templateUrl: 'app/users/user-form.component.html',
    providers: [UserService]
})
export class UserFormComponent implements OnInit, CanDeactivate {
	form: ControlGroup;
    title: string;
    user = new Users();

	constructor(
        fb: FormBuilder,
        private router: Router,
        private routeParams: RouteParams,
        private userService: UserService
    ) {
		this.form = fb.group({
			name: ['', Validators.required],
			email: ['', BasicValidators.email],
			phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
			})
		});
	}
    
    ngOnInit(){
        var id = this.routeParams.get("id");
        
        this.title = id ? "Edit User" : "New User";
        
        if (!id)
			return;
            
        this.userService.getUser(id)
			.subscribe(
                user => this.user = user,
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
    }
    
    routerCanDeactivate(){
		if (this.form.dirty)
			return confirm('You have unsaved changes. Are you sure you want to navigate away?');

		return true; 
	}
    
    save(){
        var result;
        
        if (this.user.id) 
            result = this.userService.updateUser(this.user);
        else
            result = this.userService.addUser(this.user)
            
		result.subscribe(x => {
            // Ideally, here we'd want:
            // this.form.markAsPristine();
            this.router.navigate(['Users']);
        });
	}
}