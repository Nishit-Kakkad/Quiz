import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Quiz';
  questions = [];
  answers = [];
  answersCount = [];
  userAnswers = [];

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.getQuestions().subscribe(data => {
      this.questions = data;
      this.questions.sort((a, b) => {
        return Math.random() - 0.5;
      });
    });

    this.getAnswers().subscribe(data => {
      this.answers = data;
      for (let i = 0 ; i < this.answers.length ; i++) {
        this.answersCount[i] = i + 1;
      }
      this.answers.sort((a, b) => {
        return Math.random() - 0.5;
      });
    });
  }

  getQuestions(): Observable<any> {
    return this.http.get('assets/questions.json')
      .map((response: Response) => {
        return response.json();
      });
  }

  getAnswers(): Observable<any> {
    return this.http.get('assets/answers.json')
      .map((response: Response) => {
        return response.json();
      });
  }

  verifyAnswers() {
    alert();
  }
}
