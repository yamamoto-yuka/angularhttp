import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/posts';
  posts: any = [];
  postTitle: string = 'Bill Gates 1';
  postBody: string = '';

  constructor(private postHttp: HttpClient) {}

  post() {
    console.log('THIS IS THE POSTTING IN BACKEND:', this.postTitle);
    let newPost = {
      title: this.postTitle,
      body: this.postBody,
      userId: 1,
    };
    console.log(newPost);
    this.postHttp.post(this.url, newPost).subscribe((newPostResponse) => {
      console.log('new post', newPostResponse);
      this.posts.push(newPostResponse);
    });
  }

  ngOnInit(): void {
    this.postHttp.get<any[]>(this.url).subscribe((responsePosts) => {
      this.posts = responsePosts;
    });
  }
}
