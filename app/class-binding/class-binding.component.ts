/**
 * @author Temur Mahmudov
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'class-binding',
    template: `
        <button class="btn btn-primary"
                [class.active]="isActive">
        Submit</button>
    `
})
export class ClassBindComponent {
    isActive = false;
}