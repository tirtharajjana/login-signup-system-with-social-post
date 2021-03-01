import { Post } from './../../models/Post';
import { Component, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  @ViewChild("formDirective") formDirective: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();
  form: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.form = this.createFromGroup();

  }

  createFromGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl("", [Validators.required, Validators.minLength(5)]),
      body: new FormControl("", [Validators.required, Validators.minLength(10)])
    });
  };

  onSubmit(formData: Pick<Post, "title" | 'body'>): void {
    console.log(formData);
    this.create.emit(null);
    this.form.reset();
    this.formDirective.resetForm();
  }
}
