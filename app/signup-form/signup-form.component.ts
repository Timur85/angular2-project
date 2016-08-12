/**
 * @author Temur Mahmudov
 */
import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common'
import {UsernameValidator} from './usernameValidator';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form/signup-form.component.html'
})
export class SignUpFormComponent {
    form: ControlGroup;
    
    constructor(fb: FormBuilder){
        this.form = fb.group({
           username: ['', Validators.compose([
                          Validators.required, 
                          UsernameValidator.cannotContainSpace
                     ]),  UsernameValidator.shouldBeUnique],
           password: ['', Validators.required] 
        });
    }
    
    singup(){
        // var result = authService.login(this.form.value);
        this.form.find('username').setErrors({
            invalidLogin: true
        });
        console.log(this.form.value);
    }
}