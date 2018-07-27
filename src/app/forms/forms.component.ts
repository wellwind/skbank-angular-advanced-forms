import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('mText') mText: NgModel;
  @ViewChild('form') form: NgForm;
  name = '';
  age = 18;
  isUserNameExist = false;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // console.log(this.mText);
    console.log(this.form);
    // this.mText.valueChanges.subscribe(data => {
    //   this.httpClient.get(`https://foo.com/checkUserName/${data}`)
    //     .subscribe((result: boolean) => {
    //       this.isUserNameExist = result;
    //   });
    // });

    this.mText.valueChanges.pipe(
      debounceTime(300),
      switchMap((data) => {
        console.log(data);
        return of(true);
      })
    ).subscribe((result: boolean) => {
      this.isUserNameExist = result;
    });

    // this.mText.subscribe(status => {
    //   console.log(status);
    // });
  }

  submitForm(formData) {
    console.log(formData);
  }
}
