const boxes = document.querySelectorAll(".col")

for(var i=0; i<boxes.length; i++){
  boxes[i].textContent = i+1
}

const colors = [
  'rgb(148, 0, 211)', //0 
  'rgb(186, 85, 211)', //1
  'rgb(128, 0, 128)', //2
  'rgb(147, 112, 219)', //3
  'rgb(138, 43, 226)' //4
]

class Squares{
  constructor(colors){
    this.colors = colors
    this.addClickHandler()
  }
  changeNumber(num){
    for(var i = num; i>0; i--){
      let value = parseInt(boxes[i-1].textContent)
      value = (value >= 9) ? 1 : value + 1
      boxes[i-1].textContent = value  
    }
  }
  
  changeColor(num){
    for(var i=num; i>0; i--){
      let style = window.getComputedStyle(boxes[i-1])
      let index = this.colors.indexOf(style.backgroundColor)
      index = (index >= this.colors.length -1) ? 0 : index +1
      boxes[i-1].style.backgroundColor = this.colors[index]
    }
  }

  addClickHandler(){
    boxes.forEach(box=>{
      box.addEventListener("click", e=>{
        this.changeNumber(box.dataset.place)
        this.changeColor(box.dataset.place)
      })
    })
  }
}

const squares = new Squares(colors)
