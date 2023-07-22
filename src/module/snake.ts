
class Snake{
  head:HTMLElement
  body:HTMLCollection
  isLive:boolean

  constructor(){
    //蛇头
   this.head = document.querySelector('#snake > div')!
   //蛇身
   this.body = document.getElementById('snake')!.getElementsByTagName('div')

   this.isLive = true
  }
  
  get X(){
    return this.head.offsetLeft
  }

  get Y(){
    return this.head.offsetTop
  }

  //设置蛇头左边

  set X(value:number) {
    if(value === this.X) {
      return
    }

    if(value<0 || value>340) {
      throw new Error('撞到了')
    }
    
    if(this.body && this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
      //头和身即将重叠

      if(value > this.X ) {
        //即将设置的值大于头的x 说明 头走左，你要它走右
        value = this.X - 10 
      }else{
        value =  this.X  + 10 
      }

    }
   
    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkHeadBody()
   
  }

  set Y(value:number) {
    if(value === this.Y) {
      return
    }

    if(value<0 || value>290) {
      throw new Error('撞到了')
    }

    if(this.body && this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
      //头和身即将重叠

      if(value > this.Y ) {
        //即将设置的值大于头的x 说明 头走左，你要它走右
        value = this.Y - 10 
      }else{
        value =  this.Y  + 10 
      }

    }
    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkHeadBody()
  }
  //增加蛇的身体
  addBody(){
    document.getElementById('snake')?.insertAdjacentElement('beforeend',document.createElement('div'))
  }
  moveBody(){
    for(let i = this.body.length-1;i>0;i--){
      let X = (this.body[i-1] as HTMLElement).offsetLeft;
      let Y = (this.body[i-1] as HTMLElement).offsetTop;
      (this.body[i] as HTMLElement).style.left = X +"px";

      (this.body[i] as HTMLElement).style.top =  Y +"px";
    }
  }
  checkHeadBody(){
    for(let i = 1;i<this.body.length;i++){
      let X = (this.body[i] as HTMLElement).offsetLeft;
      let Y = (this.body[i] as HTMLElement).offsetTop;
      if(this.X === X && Y=== this.Y) {
        throw new Error('撞到了自己了')
      }
    }
  }
}

export default Snake