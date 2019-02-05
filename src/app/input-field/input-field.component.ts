import { Component, OnInit, Input, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFieldComponent implements OnInit, DoCheck {
  @Input() formGroup: FormGroup;
  @Input() value: string;
  changeDetectionCounter = 0;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.changeDetectionCounter++;
    this.cd.markForCheck();
    console.log('check change on input with value: ' + this.value);
  }
}
