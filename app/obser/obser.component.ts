/**
 * @author Temur Mahmudov
 */
import {Component} from 'angular2/core';

@Component({
    selector: "obser",
    template: `
        <input type="text" id="search" class="form-control" placeholder="Search" />
    `
})
export class ObserComponent {
    constructor(){
        
        var debounced = debounced(function(text){
             var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
            $.getJSON(url, function(artists){
               console.log(artists); 
            });
        }, 400);
        
        $("#search").keyup(function(e){
            var text = e.target.value;
            
            if(text.length < 3) return;     
            
            debounced(text);       
              
        });
    }
}