System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            /**
             * @author Temur Mahmudov
             */
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        { texts: '@Best_Android_dev', heading: 'Media heading 1', name: 'Lorem Ipsum is simply dummy text 1.', id: 1 },
                        { texts: '@Native_script', heading: 'Media heading 2', name: 'Lorem Ipsum is simply dummy text 2.', id: 2 },
                        { texts: '@Angular_text', heading: 'Media heading 3', name: 'Lorem Ipsum is simply dummy text 3.', id: 3 },
                        { texts: '@JavaScript_text', heading: 'Media heading 4', name: 'Lorem Ipsum is simply dummy text 4.', id: 4 },
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map