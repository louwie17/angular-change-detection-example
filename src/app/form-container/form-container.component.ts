import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit, OnChanges {
  userForm = new FormGroup({
    favoriteFood: new FormControl(''),
    favoriteRecipe: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('Check form container');
  }

  setValue() {
    this.userForm.get('favoriteFood').setValue('test');
  }
}
