import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.interface';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  compensation: number = 10000;
  dateJoined: Date = new Date('01/01/1870');
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private myhttp: HttpClient) {}

  // Automatically exceute
  ngOnInit(): void {
    console.log('ngOnInit method was ecevyted');
    // get method
    console.log('DATE: ', this.myhttp.get(this.url));
    // Subscribe契約を結んで、JSON内の情報を応答をする
    // Type casting 　なんのデータがくるか分からないのでエラーが出ている、
    // <User[]>でresponseのデータタイプを指定できる、<any>を指定すれば、なんでも受け入れOKになる
    // 受け取り側の、箱(this.users)ではインターフェイスでデータタイプを指定しているのに、どのようなデータが入ってくるかわからないからエラーが出ている
    this.myhttp.get<User[]>(this.url).subscribe((response) => {
      console.log('RESOINSE FROM', this.url, 'is', response);
      this.users = response;
    });
  }
}
