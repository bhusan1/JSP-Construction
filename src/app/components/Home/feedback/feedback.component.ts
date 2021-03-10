import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FeedService } from '../feedbackService/feed-ser.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;
  selectedCat: any[];
  msg: any;
  submitted = false; 
  public category: Array<any>;

  constructor(private formBuilder: FormBuilder, private contact: FeedService) { 
    this.category = [
      { id: 1, value: 'Residential Design and Engineering' },
      { id: 2, value: 'Commercial Design and Engineering' },
      { id: 3, value: 'Repairs and Damage' }
    ];
    this.selectedCat = this.category[0].id;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {    
    this.feedbackForm = this.formBuilder.group({
      msg: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      category: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    /*both will work for set value manually*/
    /* this.feedbackForm.get('category').setValue(this.selectedCat); */
    this.feedbackForm.controls["category"].setValue(this.selectedCat);
  }

  sendFeedback(feedbackForm) {
    console.log(feedbackForm)
    this.contact.PostMessage(feedbackForm)
    .subscribe(response => {
      location.href = 'https://mailthis.to/confirm'
      console.log(response)
      this.feedbackForm.reset()
    }, error => {
      console.warn(error.responseText)
      console.log({ error })
    })
 /*    this.submitted = true;
    // stop here if form is invalid
    if (this.feedbackForm.invalid) {
      return;
    }
    else{
      this.msg = 'Your feedback is submitted successfully';
      console.log(this.feedbackForm.value);
    } */

  }

}