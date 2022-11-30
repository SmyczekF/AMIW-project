import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  words: string[] = ['division','frank','user','heal','crouch','excitement',
                  'solution', 'blast', 'outlook', 'short', 'production', 'iron',
                  'earwax', 'hunter', 'conscious']
  
  chosenWord: string = '';  
  toGuess: string = '';
  score = 0;
  isVictoryVisible = false;
  isFailureVisible = false;
  isPanelVisible = false;
constructor(){
    window.setInterval(() => {
      this.chosenWord = this.words[Math.floor(Math.random() * this.words.length)];
    }, 500);
    this.generateToGuess();
  } 

  checkResult(){
    if(this.chosenWord === this.toGuess){
      this.score++;
      this.generateToGuess();
    }
    else this.score--;
    
    if(this.score > 5){
      this.score = 0;
      this.isVictoryVisible = true;
      this.isPanelVisible = true;
      setTimeout(() => {
        this.isPanelVisible = false;
        this.isVictoryVisible = false;
      }, 3000)
    }
    else if(this.score < 0){
      this.score = 0;
      this.isFailureVisible = true;
      this.isPanelVisible = true;
      setTimeout(() => {
        this.isFailureVisible = false;
        this.isPanelVisible = false;
      }, 3000)
    }
  }

  generateToGuess(){
    this.toGuess = this.words[Math.floor(Math.random() * this.words.length)];
  }
  // reset(){
  //   this.counter = 0;
  // }

  // update(e: Event){
  //   this.counter = parseInt((e.target as HTMLInputElement).value);
  // }

  
}
