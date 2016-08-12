/**
 * @author Temur Mahmudov
 */
import {Component, Input} from 'angular2/core'

@Component({
    selector: 'zippy',
    template: `
        <div class="zippy">
            <div
                class="zippy-title"
                (click)="toggle()">
                {{ title }}
                <i
                    class="pull-right glyphicon"
                    [ngClass]="
                    {
                        'glyphicon-chevron-down': !isExpended,
                        'glyphicon-chevron-up': isExpended,
                    }
                    ">
                
                </i>
            </div>
            <div *ngIf="isExpended" class="zippy-content">
                <ng-content></ng-content>
            </div>
        </div>
        
        `
})
export class ZippyComponent {
    isExpended = false;
    @Input() title: string;
    
    toggle(){
        this.isExpended = !this.isExpended;
    }
    
}