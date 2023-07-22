

class ScoreBoard {
  score:number
  level:number

  upgradScore:number
  maxlevel:number

  scoreDiv:HTMLElement
  levelDiv:HTMLElement

  constructor(maxlevel:number = 10,upgradScore:number = 2){
    this.score = 0
    this.level = 1
    this.upgradScore = upgradScore
    this.maxlevel = maxlevel
    this.scoreDiv = document.querySelector('#score')!
    this.levelDiv = document.querySelector('#level')!

  }
  //增加分数
  addScore(){
    this.score++
    //超过设置的阈值 增加一级
    if(this.score%this.upgradScore === 0) {
      this.addLevel()
    }
    this.scoreDiv.innerHTML = this.score +''
  }

  addLevel(){
    if(this.level<this.maxlevel) {
      this.levelDiv.innerHTML = ++this.level +''
    }
  }
  
}

export default ScoreBoard