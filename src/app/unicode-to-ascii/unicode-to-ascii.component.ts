import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-unicode-to-ascii',
  templateUrl: './unicode-to-ascii.component.html',
  styleUrls: ['./unicode-to-ascii.component.css']
})
export class UnicodeToAsciiComponent implements OnInit {
  result: string;
  constructor(private converter:ConverterService) { }

  ngOnInit() {
  }

  convert(input:string):void {
    this.result = this.converter.convertFromUnicode(input);
  }
}
