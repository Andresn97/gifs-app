import {Component, Input, OnInit} from '@angular/core';
import {Gif} from "../../interfaces/gifs.interfaces";

@Component({
  selector: 'gif-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  public gif!: Gif;

  ngOnInit() {
    if ( !this.gif ) throw new Error('No se encontró ningún Gif');
  }

  protected readonly Number = Number;
}
