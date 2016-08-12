/**
 * @author Temur Mahmudov
 */
import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'inputs',
    template: `
         <i
            class="glyphicon"
            [ngClass]="{
                'glyphicon-star-empty': !isFavorite,
                'glyphicon-star': isFavorite
            }"
            (click)="onClick()">
        </i>    
    `
})
export class InputComponent {
    
    @Input() isFavorite = false;

    @Output() change = new EventEmitter();
    
    onClick(){
        this.isFavorite=!this.isFavorite;
        this.change.emit({ newValue: this.isFavorite});
    }
}