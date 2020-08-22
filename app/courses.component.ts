import {Component} from 'angular2/core' // imports the decorator Component from the angular2/core module
import {CourseService} from './course.service'
import { AutoGrowDirective } from './auto-grow.directive';

//calls the components doecorator that takes an object
@Component({
    selector: 'courses', // attribute that is a string
    
    // html that will be insterted when the component is rendered
    template: `          
    <h2>Halo Games</h2>
    {{ title }}
    <input type="text" autoGrow />
    <ul> 
        <li *ngFor="#course of courses">
        {{ course }}
        </li>
    </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

// It's called a module that exports courses component class
export class CoursesComponent { 
    title = "The title of Halo games"; // This will display on the webpage
    courses; // An array containing list of courses

    // This is where we pass a parameter for courseService
    constructor(courseService: CourseService){ 
        this.courses = courseService.getCourses();
    }
}