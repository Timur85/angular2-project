/**
 * @author Temur Mahmudov
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'style-binding',
    template: `
        <button class="btn btn-primary"
               [style.backgroundColor]="isActive ? 'blue' : 'gray' ">Submit
        </button>
    `
})
export class StyleBindComponent {
    isActive = true;
}