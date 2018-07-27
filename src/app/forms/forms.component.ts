import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, NgForm, NgModel } from '@angular/forms';
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
  comment = 'test';

  isUserNameExist = false;

  modelForm: FormGroup;

  cities = [
    {
      id: '1',
      name: '台北市'
    },
    {
      id: '2',
      name: '新北市'
    }
  ];

  get interests(): AbstractControl[] {
    return (this.modelForm.get('interests') as FormArray).controls;
  }

  constructor(private httpClient: HttpClient, private fb: FormBuilder) {

  }

  ngOnInit() {

    this.modelForm = this.fb.group({
      title: this.fb.control('Allen'),
      info: this.fb.group({
        city: this.fb.control('2'),
        newsletter: this.fb.control(true)
      }),
      interests: this.fb.array(
        [
          this.fb.control('Baseball'),
          this.fb.control('Basketball'),
          this.fb.control('test'),
        ]
      )
    });

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

  submitForm(formData: NgForm) {
    if(!formData.submitted && formData.valid) {
      // 處理後端資料
    }
    console.log(formData.value);
  }
}
