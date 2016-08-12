/**
 * @author Temur Mahmudov
 */
import {Component, View} from 'angular2/core';
import {CoursesService} from '../courses/courses.service';
import {AutoGrowDirective} from '../auto-grow/auto-grow.directive';

@Component({
    selector: 'courses',
    template: `
    <h1>Courses</h1>
    {{ title }}
    <input type="text" autoGrow />
    <ul>
        <li *ngFor ="#course of courses">
        {{ course }}
        </li>
    </ul>
    `,
    providers: [CoursesService], 
    directives: [AutoGrowDirective]
})

export class CoursesComponent {
    title = "The list of the courses";
    courses;
    
    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }
    
}