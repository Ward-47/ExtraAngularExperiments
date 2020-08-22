import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.component'; // Must have, if you want the directives array in @Component to work.
import { AuthorsComponent } from './authors.component';

// NOTE: ./ represents start searching for the current folder as shown in the second import of this file. 

@Component({
    selector: 'my-app',
    template: `
    <h1>Halo Infinite is going to be awesome!</h1>
    <courses></courses>
    <authors></authors>`,
    directives: [CoursesComponent, AuthorsComponent] // An array
})
export class AppComponent { }