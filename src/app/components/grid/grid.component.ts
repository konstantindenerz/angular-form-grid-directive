import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {

  @Output()
  public dataChange = new EventEmitter<any>();
  public data: any;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => this.dataChange.emit(this.data = 'foo'), 2000);
  }

}
