import './index.less'

import Snake from './snake'
import Food from './food'
import ScoreBoard from './scoreBoard'



class GameControl {

  direction:string
  snake:Snake
  food:Food 
  scoreBoard:ScoreBoard

  constructor(){
    this.direction = ''
    this.food = new Food()
    this.snake = new Snake()
    this.scoreBoard =new ScoreBoard()
    this.init()
    this.run()
  }
  init(){
    document.addEventListener('keydown',this.directionHandler.bind(this))
  }
  run(){
    let X = this.snake.X
    let Y = this.snake.Y
    switch(this.direction){
      case 'ArrowUp':
      case 'Up':{
        Y = Y-10
        break
      }
      case 'ArrowDown':
      case 'Down':{
        Y = Y+10
        break
      }
      case 'ArrowLeft':
      case 'Left':{
        X = X-10
        break
      }
      case 'ArrowRight':
      case 'Right':{
        X = X+10
        break
      }

    }

    this.checkEat(X,Y)

    try{
      this.snake.X = X
      this.snake.Y = Y
    }catch(e){
      if (e instanceof Error) {
        alert(e.message)
      }
      this.snake.isLive = false
    }
   
    
    this.snake.isLive &&  setTimeout(()=>this.run(),300-this.scoreBoard.level*30)
  }
  //食物在蛇身上则重新改变位置
  changeFood(){
    let flag = false
    this.food.change()
     //判断food有没有在蛇身上
     for(let i = 0;i<this.snake.body.length;i++){
        const tem = (this.snake.body[i] as HTMLElement)
        if( tem.offsetLeft === this.food.X  &&tem.offsetTop === this.food.Y ) {
          flag = true
        }
     }
     if(flag) {
      this.changeFood()
     }
  }
  checkEat(X:number,Y:number){
    if(X === this.food.X && Y === this.food.Y) {
    
      this.changeFood()
     
      this.scoreBoard.addScore()
      this.snake.addBody()
    }
  }
  directionHandler(e:KeyboardEvent){
   
    switch(e.key){
      case 'ArrowRight':
      case 'Right':
      case 'ArrowLeft':
      case 'Left':
      case 'ArrowDown':
      case 'Down':
      case 'ArrowUp':
      case 'Up':{
        this.direction = e.key
        break
      }
    }
  }
}

new GameControl()