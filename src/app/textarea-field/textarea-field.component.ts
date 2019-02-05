import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss']
})
export class TextareaFieldComponent implements OnInit, OnChanges {
  @Input() formGroup: FormGroup;
  favoriteRecipe = '';

  constructor() { }

  ngOnInit() {
    this.favoriteRecipe = this.formGroup.get('favoriteRecipe').value;
  }

  ngOnChanges() {
    console.log('Check text-area component');
  }

  onChange(newValue) {
    this.favoriteRecipe = newValue;
    this.formGroup.get('favoriteRecipe').setValue(newValue);
  }
}
