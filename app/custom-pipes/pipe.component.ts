/**
 * @author Temur Mahmudov
 */
import {Component} from 'angular2/core'

@Component({
    selector: 'pipe',
    template: `
        {{ post.title }}
        <br/>
        {{ post.body | summary }}
        `
})
export class PipeComponent {
    post = {
        title: "Angular Tutorial",
        body: `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        `
    }
}