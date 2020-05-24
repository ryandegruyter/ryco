import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'ryco-neuomorph-card',
  templateUrl: './neuomorph-card.component.html',
  styleUrls: ['./neuomorph-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeuomorphCardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
