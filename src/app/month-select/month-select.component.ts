import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'month-select',
  templateUrl: './month-select.component.html',
  styleUrls: ['./month-select.component.scss']
})
export class MonthSelectComponent implements OnInit {
  @Input() currentYear: number;
  @Input() currentMonth: number;

  @Output() prev = new EventEmitter();
  @Output() next = new EventEmitter();

  monthNames = [
                'January', 'February', 'March', 'April', 
                'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December'
              ]
  
  constructor() { }

  ngOnInit() {
  }

  onPrev() {
    this.prev.emit();
  }

  onNext() {
    this.next.emit();
  }
}
