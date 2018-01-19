export class ERectType{
    width:number;
    height:number;
    y:number;
    color:string;

    refWidth:number;
    eWidth:number;

    constructor(rectWidth:number, rectHeight:number, y:number, color:string){
      this.width = 0;
      this.height = rectHeight;
      this.refWidth = rectWidth;
      this.eWidth = this.refWidth - this.width;
      this.y = y;
      this.color = color;
      this.bounce();
    }

    bounce(){
      let timer = setInterval(() => {
        this.width += this.eWidth/100;

        this.eWidth = this.refWidth - this.width;
        //console.log(this.eWidth);

        if(this.eWidth < 5.0){
          clearInterval(timer);
        }
      }, 10);
    }
  }