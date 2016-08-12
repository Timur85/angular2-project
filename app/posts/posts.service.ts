/**
 * @author Temur Mahmudov
 */
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService {
    private url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private http: Http){

    }

    getPosts(filter?) {
        var url = this.url;
        
        if (filter && filter.userId)
            url += "?userId=" + filter.userId;
        
		return this.http.get(url)
			.map(res => res.json());
	}
    
	getComments(postId){
		return this.http.get(this.url + "/" + postId + "/comments")
			.map(res => res.json());
	}

}