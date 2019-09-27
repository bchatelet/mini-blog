import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}
)
export class AppComponent {
  title = 'Posts';
  list_posts: Post[]= [
    new Post("Mon Premier Post","blabla 1er et mlkmker mlk emlke melk rem lke elmkr kmelk",0),
    new Post("Mon deuxième Post","blabla 2er et mlkmker mlk emlke melk rem lke elmkr kmelk",0),
    new Post("Encore un Post","blabla dernier et mlkmker mlk emlke melk rem lke elmkr kmelk",0)
  ]
 }






