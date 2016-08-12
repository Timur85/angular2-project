/**
 * @author Temur Mahmudov
 */
import {Component} from 'angular2/core'

@Component({
    selector: 'ngIf1',
    template: `
    <div [hidden]="courses.length == 0">
        List of courses
    </div>
    <div [hidden]="courses.length > 0">
        You dont't have any courses yet.
    </div>
    `
    
})
export class NgIfComponent {
    courses = [];
}