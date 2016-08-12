/**
 * @author Temur Mahmudov
 */
import {Component} from 'angular2/core'

@Component({
    selector: 'styles',
    template: `
        <button
            [ngStyle]="{
                backgroundColor: canSave ? 'blue' : 'gray',
                color: canSave ? 'white' : 'black',
                fortWeight: canSave ? 'bold' : 'normal'
            }"
            >Submit</button>
        `
})
export class StylesComponent {
    canSave = true;
}