/**
 * @author Temur Mahmudov
 */
import {Component, Input} from 'angular2/core'
import {TweetService} from '../tweet/tweet.service'

@Component({
    selector: 'tweets',
    template: `
        <div *ngFor="#tweet of tweets">
            <br><div class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object" src="http://lorempixel.com/110/110/people/?{{ tweet.id }}" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ tweet.heading }} 
                    <span class="text-color">
                        {{ tweet.texts }}
                    </span>
                </h4>
                {{ tweet.name }}<br>
                <i
                    class="glyphicon glyphicon-heart"
                    [class.highlighted]="iLike"
                    (click)="onClick(tweet['id'])">
                </i>
                <span>{{ totalLikes }}</span>
            </div>
            </div>
        </div>    
        `,
        styles: [`
            .text-color {
                color: #808080;   
            }
            .media-object {
                border-radius: 10px;
                margin-left: 40px;
            }
            .media-heading {
                font-weight: bold;
                font-size: 18px;
            }
            .media-body {
                font-weight: bold;
                font-size: 16px;
                font-family: Verdata;
            }
                .glyphicon-heart {
                color: #ccc;
                cursor:pointer;
            }
            .highlighted {
                color: deeppink;
            }
        `],
        providers: [TweetService]
})
export class TweetComponent {
    tweets;
    @Input() totalLikes = 0;
    @Input() iLike = false;
    
    onClick($event){
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1: -1;
    }
    
    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }
}