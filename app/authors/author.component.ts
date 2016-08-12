/**
 * @author Temur Mahmudov
 */
import {Component, View} from 'angular2/core';
import {AuthorsService} from '../authors/authors.service';

@Component({
    selector: 'authors',
    providers: [AuthorsService]
})
@View({
    template: `<h1>Authors</h1>
    {{ title }}
    <ul>
        <li *ngFor="#author of authors">
            {{ author}}
        </li>
    </ul>
    `
})
export class AuthorsComponent {
    title = "The list of authors";
    authors: string[];
    
    constructor(authorsService :AuthorsService) {
        this.authors = authorsService.getAuthors();
    }
}