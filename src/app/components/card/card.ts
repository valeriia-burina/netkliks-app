import { Component } from '@angular/core';
import { Input } from '../../../../node_modules/@angular/core/discovery.d';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() title = ''
}
