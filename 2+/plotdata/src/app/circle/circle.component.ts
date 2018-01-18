import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RectType } from '../types/rect.type';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'circle',
  template: `
  <svg [attr.height]="svgHeight" [attr.width]="svgWidth">
    <rect *ngFor="let r of rectArray" 
    [attr.width]="r.width"
    [attr.height]="r.height"
    [attr.y]="r.y"
    [attr.fill]="r.color"/>
  </svg>
  `,
  styleUrls: ['./circle.component.css'],
  providers: [UtilsService]
})

export class CircleComponent implements OnInit {
  @Input() inData: number[];

  svgHeight: number = 400;
  svgWidth: number = 400;
  svgRectHeight: number = 0;

  rectArray:RectType[];

  svgData:string = '';
  percentOfHighest: number[];

  constructor(private _utilsService: UtilsService) {
    this.percentOfHighest = Array();
    this.rectArray = Array();
   }

  ngOnInit() {
  }

  ngOnChanges(){
    this.rectArray = [];

    let highest:number = 0;

    for(var i = 0; i<this.inData.length;i++){
      if(this.inData[i] > highest){
        highest = this.inData[i];
      }
    }

    for(var i = 0; i<this.inData.length;i++){
      if(highest == 0){
        this.percentOfHighest[i] = 0;
      }else{
        this.percentOfHighest[i] = this.inData[i]/highest;
      }
    }

    this.svgRectHeight = this.svgHeight/this.percentOfHighest.length;


    for(var i = 0; i<this.percentOfHighest.length;i++){
      this.rectArray.push(
        new RectType(
          this.percentOfHighest[i]*this.svgWidth,
          this.svgRectHeight,
          this.svgRectHeight*i,
          this._utilsService.rgbToHex(
            Math.floor(Math.random() * 255) + 0,
            Math.floor(Math.random() * 255) + 0,
            Math.floor(Math.random() * 255) + 0))
        );

        console.log(this.rectArray);
    }
  }

}
