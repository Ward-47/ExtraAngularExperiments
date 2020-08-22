import {Component} from 'angular2/core'; // imports the decorator Component from the angular2/core module
import {AuthorService} from './author.service';

//calls the components doecorator that takes an object
@Component({
    selector: 'authors', // attribute that is a string
    
    // html that will be insterted when the component is rendered
    template: `          
    <h2>Halo Characters</h2>
    {{ title }}
    <input type="text" autoGrow />
    <ul> 
        <li *ngFor="#author of authors">
        {{ author }}
        </li>
    </ul>
    `,
    providers: [AuthorService]
})

// It's called a module that exports courses component class
export class AuthorsComponent { 
    authors: string[]; // This will display on the webpage
    title = "List of Halo Characters";

    // This is where we pass a parameter for courseService
    constructor(authorService: AuthorService){ 
        this.authors = authorService.getAuthors();
    }
}