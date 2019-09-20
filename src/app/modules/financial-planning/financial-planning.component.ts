import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-financial-planning',
  templateUrl: './financial-planning.component.html',
  styleUrls: ['./financial-planning.component.scss']
})
export class FinancialPlanningComponent implements OnInit {

  public planningForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.planningForm = this.formBuilder.group({
      name: '',
      value: 0,
      type: PlanningItem.Active,
      category: '',
    });
  }

}
enum PlanningItem {
  Active = 'active',
  Passive = 'passive'
}

