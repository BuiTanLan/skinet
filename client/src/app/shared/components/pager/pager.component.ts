import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
  @Input() totalCount!: number;
  @Input() pageSize!: number;
  @Input() pageIndex!: number;
  @Output() pageChanged = new EventEmitter<number>();
  constructor() {}
  onPaperChange(event: any) {
    this.pageChanged.emit(event.page);
  }
}
