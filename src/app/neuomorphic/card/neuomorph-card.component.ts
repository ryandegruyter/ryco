import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'ryco-neuomorph-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeuomorphCardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
