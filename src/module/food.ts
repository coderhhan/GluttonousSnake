class Food{
  element:HTMLElement
  constructor(){
    //存储食物的div
   this.element = document.querySelector('#food')!
  }

  set X(value:number){
    this.element.style.left = value +'px'
  }

  get X(){
    return this.element.offsetLeft
  }

  set Y(value:number){
    this.element.style.top = value +'px'
  }

  get Y(){
    return this.element.offsetTop
  }

  change(){
    // 300-10
    let y = Math.floor(Math.random()*29)*10
    //350-10
    let x = Math.floor(Math.random()*34)*10
    this.element.style.left = x+'px'
    this.element.style.top = y+'px'
  }
}


export default Food
