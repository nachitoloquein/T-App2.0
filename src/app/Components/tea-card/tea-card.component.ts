import { Component, OnInit, Input } from '@angular/core';
import { Tea } from 'src/app/Model/tea.model';

@Component({
  selector: 'app-tea-card',
  templateUrl: './tea-card.component.html',
  styleUrls: ['./tea-card.component.scss'],
})
export class TeaCardComponent implements OnInit {

  @Input() teaItem: Tea;
  constructor() { }

  ngOnInit() {}

}
