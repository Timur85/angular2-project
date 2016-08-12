System.register(['angular2/core', '../tweet/tweet.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tweet_service_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(tweetService) {
                    this.totalLikes = 0;
                    this.iLike = false;
                    this.tweets = tweetService.getTweets();
                }
                TweetComponent.prototype.onClick = function ($event) {
                    this.iLike = !this.iLike;
                    this.totalLikes += this.iLike ? 1 : -1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "totalLikes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "iLike", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweets',
                        template: "\n        <div *ngFor=\"#tweet of tweets\">\n            <br><div class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                <img class=\"media-object\" src=\"http://lorempixel.com/110/110/people/?{{ tweet.id }}\" alt=\"...\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{ tweet.heading }} \n                    <span class=\"text-color\">\n                        {{ tweet.texts }}\n                    </span>\n                </h4>\n                {{ tweet.name }}<br>\n                <i\n                    class=\"glyphicon glyphicon-heart\"\n                    [class.highlighted]=\"iLike\"\n                    (click)=\"onClick(tweet['id'])\">\n                </i>\n                <span>{{ totalLikes }}</span>\n            </div>\n            </div>\n        </div>    \n        ",
                        styles: ["\n            .text-color {\n                color: #808080;   \n            }\n            .media-object {\n                border-radius: 10px;\n                margin-left: 40px;\n            }\n            .media-heading {\n                font-weight: bold;\n                font-size: 18px;\n            }\n            .media-body {\n                font-weight: bold;\n                font-size: 16px;\n                font-family: Verdata;\n            }\n                .glyphicon-heart {\n                color: #ccc;\n                cursor:pointer;\n            }\n            .highlighted {\n                color: deeppink;\n            }\n        "],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map