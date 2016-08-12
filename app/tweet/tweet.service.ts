/**
 * @author Temur Mahmudov
 */
export class TweetService {
    getTweets() : Object[] {
       return[
            { texts: '@Best_Android_dev', heading: 'Media heading 1', name: 'Lorem Ipsum is simply dummy text 1.', id: 1 },
            { texts: '@Native_script', heading: 'Media heading 2', name: 'Lorem Ipsum is simply dummy text 2.', id: 2 },
            { texts: '@Angular_text', heading: 'Media heading 3', name: 'Lorem Ipsum is simply dummy text 3.', id: 3 },
            { texts: '@JavaScript_text', heading: 'Media heading 4', name: 'Lorem Ipsum is simply dummy text 4.', id: 4 },
       ]
    }
}