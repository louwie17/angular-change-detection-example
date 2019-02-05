import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnChanges {
  data = ['test', 'b', 'c', 'd'].map(name => {
    return { name };
  });

  ngOnChanges() {
    console.log('app component change');
  }

  onChange(newItem, index) {
    this.data[index].name = newItem;
  }

  doNothing() {}
}
