import { Component, OnInit, Input } from '@angular/core';
import { Tea } from 'src/app/Model/tea.model';
import { TeaService } from 'src/app/Services/tea.service';

@Component({
  selector: 'app-tea-card',
  templateUrl: './tea-card.component.html',
  styleUrls: ['./tea-card.component.scss'],
})
export class TeaCardComponent implements OnInit {

  @Input() teaItem: Tea;
  constructor(private teaService: TeaService) { }

  ngOnInit() {}

  async like(teaItem){
    await this.teaService.likeUnlike(teaItem, true);
  }

  async dislike(teaItem){
    await this.teaService.likeUnlike(teaItem, false);
  }

}
