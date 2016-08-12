/**
 * @author Temur Mahmudov
 */
import {Component} from 'angular2/core'
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'callback',
    template: `
    <input type="text" id="search" class="form-control" placeholder="Search" />
    `
})
export class CallbackComponent {
    
    constructor() {
        // USING observable

        var search = "#search";

        var keyups = Observable.fromEvent($("#search"), "keyup")
            .map(e=>e.target.value)
            .filter(text=>text.length >=3)
            .debounceTime(400)
            .distinctUntilChanged()
            .flatMap(searchTerm =>{
                var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
                var promose =  $.getJSON(url);
                return Observable.fromPromise(promose);

            });

        var subscr = keyups.subscribe(data => console.log(data));
        subscr.unsubscribe();

        // USING CALLBACK HELL
        // var debounced = _.debounce(function(text){
        //     var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
        //     $.getJSON(url, function(artist){
        //         console.log(artist);
        //     });
        // }, 400);

        // $("#search").keyup(function(e){
        //     var text = e.target.value;

        //     if (text.length < 3)
        //         return;

        //     debounced(text);
        // });
    }
}