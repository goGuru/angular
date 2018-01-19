import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ERectType } from './e-rect.type';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'e-rect',
  template: `
  <svg [attr.height]="svgHeight" [attr.width]="svgWidth">
    <rect *ngFor="let r of eRectData"
      [attr.width]="r.width"
      [attr.height]="r.height"
      [attr.y]="r.y"
      [attr.fill]="r.color"/>
  </svg>
  `,
  styleUrls: ['./e-rect.component.css']
})
export class ERectComponent implements OnInit {
  @Input() inData: number[];

  svgHeight: number = 400;
  svgWidth: number = 400;
  svgRectHeight: number = 0;

  eRectData: ERectType[];
  percentOfHighest: number[];

  constructor(private utilsService:UtilsService) {
    this.percentOfHighest = Array();
    this.eRectData = Array();
  }

  ngOnInit() {

  }

  ngOnChanges(){
    this.eRectData = [];

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
      this.eRectData.push(
        new ERectType(
          this.percentOfHighest[i]*this.svgWidth,
          this.svgRectHeight,
          this.svgRectHeight*i,
          this.utilsService.rgbToHex(
            Math.floor(Math.random() * 255) + 0,
            Math.floor(Math.random() * 255) + 0,
            Math.floor(Math.random() * 255) + 0) 
        )
      );
    }
  }

}
