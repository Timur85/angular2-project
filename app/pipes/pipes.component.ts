/**
 * @author Temur Mahmudov
 */
import {Component} from 'angular2/core'

@Component({
    selector: 'pipes',
    template: `
            {{ course.title | uppercase | lowercase }}
            <br/>
            {{ course.students | number }}
            <br/>
            {{ course.rating | number:'2.2-2' }}
            <br/>
            {{ course.price | currency:'AUD':true:'2.2-2'}}
            <br/>
            {{ course.releaseDate | date:'MMM yyyy'}}
            <br/>
            {{ course | json }}
            `
})
export class PipesComponent {
    course = {
        title: "Angular2 for beginners",
        rating: 4.9745,
        student: 5981,
        price: 99.95,
        releaseDate: new Date(2016,5,28)   
    }  
}