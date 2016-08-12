/**
 * @author Temur Mahmudov
 */
import {Component} from 'angular2/core'

@Component({
    selector: 'fors',
    template: `
            <ul>
                <li *ngFor="#course of courses, #i = index">
                    {{ i + 1 }} - {{ course }}
                </li>
            </ul>
              `
    
})
export class ForComponent {
    courses = ["Course 1", "Course 2", "Course 3"];
}