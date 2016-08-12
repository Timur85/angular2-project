/**
 * @author Temur Mahmudov
 */
import {Component} from 'angular2/core'

@Component({
    selector: 'switchs',
    template: `
            <!-- <ul class="nav nav-pills">
                <li [class.active]="viewMode=='map'">
                    <a (click)="viewMode='map' " >Map View</a>
                </li>
                <li [class.active]="viewMode=='list'>
                    <a (click)="viewMode='list' " >Map List</a>
                </li>
            </ul> -->
            <div [ngSwitch]="viewMode">
                <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
                <template [ngSwitchWhen]="'list'">List View Content</template>
            </div>
            `
})
export class SwitchComponent {
    viewMode = 'map';
}