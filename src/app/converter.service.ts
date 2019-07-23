import { Injectable } from '@angular/core';
import { BrailleCell } from './braillecell';

@Injectable({
  providedIn: 'root'
})

export class ConverterService {
  conversion: BrailleCell[] = [
    {unicode: " ", ascii: " "},
    {unicode: "\u2800", ascii: " "},
    {unicode: "\u2801", ascii: "a"},
    {unicode: "\u2802", ascii: "1"},
    {unicode: "\u2803", ascii: "b"},
    {unicode: "\u2804", ascii: "'"},
    {unicode: "\u2805", ascii: "k"},
    {unicode: "\u2806", ascii: "2"},
    {unicode: "\u2807", ascii: "l"},
    {unicode: "\u2808", ascii: "@"},
    {unicode: "\u2809", ascii: "c"},
    {unicode: "\u280A", ascii: "i"},
    {unicode: "\u280B", ascii: "f"},
    {unicode: "\u280C", ascii: "/"},
    {unicode: "\u280D", ascii: "m"},
    {unicode: "\u280E", ascii: "s"},
    {unicode: "\u280F", ascii: "p"},
    {unicode: "\u2810", ascii: '"'},
    {unicode: "\u2811", ascii: "e"},
    {unicode: "\u2812", ascii: "3"},
    {unicode: "\u2813", ascii: "h"},
    {unicode: "\u2814", ascii: "9"},
    {unicode: "\u2815", ascii: "o"},
    {unicode: "\u2816", ascii: "6"},
    {unicode: "\u2817", ascii: "r"},
    {unicode: "\u2818", ascii: "^"},
    {unicode: "\u2819", ascii: "d"},
    {unicode: "\u281A", ascii: "j"},
    {unicode: "\u281B", ascii: "g"},
    {unicode: "\u281C", ascii: ">"},
    {unicode: "\u281D", ascii: "n"},
    {unicode: "\u281E", ascii: "t"},
    {unicode: "\u281F", ascii: "q"},
    {unicode: "\u2820", ascii: ","},
    {unicode: "\u2821", ascii: "*"},
    {unicode: "\u2822", ascii: "5"},
    {unicode: "\u2823", ascii: "<"},
    {unicode: "\u2824", ascii: "-"},
    {unicode: "\u2825", ascii: "u"},
    {unicode: "\u2826", ascii: "8"},
    {unicode: "\u2827", ascii: "v"},
    {unicode: "\u2828", ascii: "."},
    {unicode: "\u2829", ascii: "%"},
    {unicode: "\u282A", ascii: "["},
    {unicode: "\u282B", ascii: "$"},
    {unicode: "\u282C", ascii: "+"},
    {unicode: "\u282D", ascii: "x"},
    {unicode: "\u282E", ascii: "!"},
    {unicode: "\u282F", ascii: "&"},
    {unicode: "\u2830", ascii: ';'},
    {unicode: "\u2831", ascii: ":"},
    {unicode: "\u2832", ascii: "4"},
    {unicode: "\u2833", ascii: "\\"},
    {unicode: "\u2834", ascii: "0"},
    {unicode: "\u2835", ascii: "z"},
    {unicode: "\u2836", ascii: "7"},
    {unicode: "\u2837", ascii: "("},
    {unicode: "\u2838", ascii: "_"},
    {unicode: "\u2839", ascii: "?"},
    {unicode: "\u283A", ascii: "w"},
    {unicode: "\u283B", ascii: "]"},
    {unicode: "\u283C", ascii: "#"},
    {unicode: "\u283D", ascii: "y"},
    {unicode: "\u283E", ascii: ")"},
    {unicode: "\u283F", ascii: "="}
  ];
  
  convertFromUnicode(input: string): string {
    var i:number;
    var result:string = "";
    for(i = 0; i < input.length; i++){
      var char = input.charAt(i);
      var newResultChar:string;
      for(let entry of this.conversion){
        if(entry.unicode === char){
          newResultChar = entry.ascii;
          break;
        }
      }
      if(!newResultChar){
        newResultChar = "~";
      }
      result += newResultChar;
      newResultChar = "";
    }
    return result;
  }

}
