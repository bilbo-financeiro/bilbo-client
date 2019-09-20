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
  public wishesList:  Observable<Wish>;
  public total: number;
  public totalAchived: number;
  public totalNotAchived: number;
  public isEdit: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.initForm();
    this.wishesList = this.projectsService.getAll()
      .pipe(
        map(wishs => this.showTotalValueWish(wishs))
      );
  }

  initForm(): void {
    this.wishesForm = this.formBuilder.group({
      name: '',
      value: '',
      achieved: false
    });
  }

  insertWish(): void {
    const wish: Wish = this.wishesForm.value;
    this.projectsService.insert(wish);
    this.initForm();
  }

  changeState(wish: Wish): void {
    wish.achieved = !wish.achieved;
    this.projectsService.update(wish, wish.key);
  }

  removeWish(key: string): void {
    this.projectsService.delete(key);
  }

  showTotalValueWish(items: any): any {
    this.total = items.reduce((previous, current) => previous + current.value, 1);
    this.totalAchived = items.filter(data => data.achieved).reduce((previous, current) => previous + current.value, 1);
    this.totalNotAchived = items.filter(data => !data.achieved).reduce((previous, current) => previous + current.value, 1);
    return items;
  }

}

interface Wish {
  key?: string;
  name: string;
  value: number;
  achieved: boolean;
}
