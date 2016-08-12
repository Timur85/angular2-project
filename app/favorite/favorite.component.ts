/**
 * @author Temur Mahmudov
 */
import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite/favorite.template.html',
    //outputs: ['change:favoriteChange'],
    //inputs: ['isFavorite:is-favorite'],
    styles: [`
        i {
            font-size: 30px; 
        }
        .glyphicon-star {
            color: orange;
        }
    `],
   
    //styleUrls: [],
    //inputs: ['isFavourite:is-favourite'], // Made this field part of public API (another way)
    //outputs: ['change:favouriteChange'], // Made this event part of public API
})
export class FavoriteComponent {
    @Input() isFavorite = false;
    
    @Output() change = new EventEmitter();
    
    onClick(){
        this.isFavorite=!this.isFavorite;
        this.change.emit({ newValue: this.isFavorite })
    }
}