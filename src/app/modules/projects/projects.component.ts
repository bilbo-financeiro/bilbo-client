import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public wishesForm: FormGroup;

  public wishesList: any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.wishesForm = this.formBuilder.group({
      name: '',
      value: ''
    });
  }

  insertWish(): void {
    this.wishesList.push(this.wishesForm.value);
  }

  removeWish(index: number): void {
    this.wishesList.splice(index, 1);
  }

}
