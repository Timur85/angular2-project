/**
 * @author Temur Mahmudov
 */
import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {UserService} from './users.service';

@Component({
    selector: 'users',
    templateUrl: 'app/users/users.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]
})
export class UsersComponent implements OnInit{

    users: any[];

    constructor(private userService: UserService){
    }

    ngOnInit(){
        this.userService.getUsers()
            .subscribe(users => this.users = users);
    }

    deleteUser(user){
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			var index = this.users.indexOf(user)
			// Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);

			this.userService.deleteUser(user.id)
				.subscribe(null, 
					err => {
						alert("Could not delete the user.");
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
						this.users.splice(index, 0, user);
					});
		}
	}
    

}