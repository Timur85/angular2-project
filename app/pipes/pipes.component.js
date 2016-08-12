System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var PipesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PipesComponent = (function () {
                function PipesComponent() {
                    this.course = {
                        title: "Angular2 for beginners",
                        rating: 4.9745,
                        student: 5981,
                        price: 99.95,
                        releaseDate: new Date(2016, 5, 28)
                    };
                }
                PipesComponent = __decorate([
                    core_1.Component({
                        selector: 'pipes',
                        template: "\n            {{ course.title | uppercase | lowercase }}\n            <br/>\n            {{ course.students | number }}\n            <br/>\n            {{ course.rating | number:'2.2-2' }}\n            <br/>\n            {{ course.price | currency:'AUD':true:'2.2-2'}}\n            <br/>\n            {{ course.releaseDate | date:'MMM yyyy'}}\n            <br/>\n            {{ course | json }}\n            "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PipesComponent);
                return PipesComponent;
            }());
            exports_1("PipesComponent", PipesComponent);
        }
    }
});
//# sourceMappingURL=pipes.component.js.map