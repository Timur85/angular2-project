/**
 * @author Temur Mahmudov
 */
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

    private url = "http://jsonplaceholder.typicode.com/users";

    constructor(private http: Http) {

    }

    getUsers(){
			return this.http.get(this.url)
				.map(res => res.json());
		}
    
    getUser(userId){
			return this.http.get(this.getUserUrl(userId))
				.map(res => res.json());
		}
    
    addUser(user){
			return this.http.post(this.url, JSON.stringify(user))
				.map(res => res.json());
		}
    
    updateUser(user){
			return this.http.put(this.getUserUrl(user.id), JSON.stringify(user))
				.map(res => res.json());
		}
    
    deleteUser(userId){
			return this.http.delete(this.getUserUrl(userId))
				.map(res => res.json());
		}
    
    private getUserUrl(userId){
			return this.url + "/" + userId;
		}

}