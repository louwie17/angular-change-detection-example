import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListRowComponent implements OnInit {
  @Input() item: {name: string};
  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  attach() {
  }

  onChange() {
    this.change.emit('change');
  }
}
