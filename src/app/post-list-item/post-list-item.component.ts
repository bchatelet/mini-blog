import { Component, OnInit,Input } from '@angular/core';
import { Post } from '../post';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post_item_title;
  @Input() post_item_content;
  @Input() post_item_loveIts;
  @Input() post_item_created_at;
  constructor() { }
  ngOnInit() {
  }

  onLoveIt(){
this.post_item_loveIts++;
}
onDontLoveIt(){
 this.post_item_loveIts--;
}

}
