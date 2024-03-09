import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../receta.model';

@Component({
  selector: 'app-receta-item',
  templateUrl: './receta-item.component.html',
  styleUrls: ['./receta-item.component.scss'],
})
export class RecetaItemComponent  implements OnInit {
  @Input() recetasItem: Receta;

  constructor() { }

  ngOnInit() {}

}
