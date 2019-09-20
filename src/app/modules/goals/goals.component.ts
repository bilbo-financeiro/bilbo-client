import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

const GOALS_CATEGORY = [
  {
    name: 'Estudos',
    value: 'studies',
  }
];

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  public goalsForm: FormGroup;

  public goalsCategory = GOALS_CATEGORY;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() { }

  public initForm(): void {
    this.goalsForm = this.formBuilder.group({
      name: '',
      value: 0,
      type: GoalsStatus.Inactive,
      category: '',
    });
  }

}







