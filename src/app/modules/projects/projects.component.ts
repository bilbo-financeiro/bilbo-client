import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs';

import { ProjectsService } from './projects.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public wishesForm: FormGroup;

  public total: number;

  public wishesList:  Observable<any>;
  constructor(
    private formBuilder: FormBuilder,
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.initForm();
    this.wishesList = this.projectsService.getAll()
      .pipe(map(wishs => this.showTotalValueWish(wishs)));
  }

  initForm(): void {
    this.wishesForm = this.formBuilder.group({
      name: '',
      value: ''
    });
  }

  insertWish(): void {
    const wish: Wish = this.wishesForm.value;
    this.projectsService.insert(wish);
    this.initForm();
  }

  removeWish(key: string): void {
    this.projectsService.delete(key);
  }

  showTotalValueWish(items: any): any {
    const data: any[] = items;
    const result = data.reduce((previous, current) => previous + current.value, 1);
    this.total = result;
    return items;
  }

}


interface Wish {
  name: string;
  value: number;
}
