class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");

    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');


   
  }

  start(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    this.input1.position(400,200)
    this.button.position(290, 300);
    
    this.button.mousePressed(()=>{
      this.title.hide();

      contestantname = this.input1.value();
      console.log(contestantname)

      this.input1.hide();
     // this.display1();
       i=0
    console.log(arr[i])
      if(arr[i]===1){
        this.display1()

      }
      else if(arr[i]== 2){
        this.display2()
      }
      else if(arr[i]== 3){
        this.display3()
      }
    
      

    })
  }

    display1 = function(){
  
    
    this.input2 = createInput("Enter Correct Option No..");
      this.input2.position(350, 230);

    this.question.html("Question 1:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(150, 80);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

    
    var  ca1 = "2";
    crtAns.push(ca1)

    this.button.mousePressed(()=>{
     op1 = this.input2.value();
     options.push(op1)
     console.log(op1)

     this.input2.hide()
     
     QA++
     //this.display2()
     if(QA<3){
        i++
        if(arr[i]===2){
          this.display2()
        }
        else if(arr[i]===3){
          this.display3()
        }
      }
      else if(QA === 3){
        this.hidee();
        gameState= 1
      }
    });
  }

  display2 =function(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.input3 = createInput("enter")
     this.input3.position(350,230)

    this.question.html("Question 2:- what is our national bird ?" );
    this.question.position(150, 80);
    this.option1.html("1: parrot " );
    this.option1.position(150, 100);
    this.option2.html("2: pecock" );
    this.option2.position(150, 120);
    this.option3.html("3: pig " );
    this.option3.position(150, 140);
    this.option4.html("4: cow" );
    this.option4.position(150, 160);

    this.button.position(290, 300);

    var  ca2 = "2";
    crtAns.push(ca2)

    this.button.mousePressed(()=>{
      var op2= this.input3.value()
      options.push(op2)
      console.log(op2);

      this.input3.hide()
      this.display3()
      QA++
      if(QA < 3){
      i++
      if(arr[i]===1){
        this.display1()
      }
      else if(arr[i]===3){
        this.display3()
      }
    }
    else if(QA === 3){
      this.hidee();
      gameState= 1
    }
    });
  }

  display3=function(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.input4 = createInput("enter the option")
    this.input4.position(350,230)
  
    this.question.html("Question 3:- how many colours does our national flag has? " );
    this.question.position(150, 80);
    this.option1.html("1: three " );
    this.option1.position(150, 100);
    this.option2.html("2: two" );
    this.option2.position(150, 120);
    this.option3.html("3: four " );
    this.option3.position(150, 140);
    this.option4.html("4: five" );
    this.option4.position(150, 160);

   
    this.button.position(290, 300);

    var  ca3 = "1";
    crtAns.push(ca3)

    this.button.mousePressed(()=>{
     

      this.input4.hide();

     // this.input3.hide();
     // this.input2.hide();


      var op3= this.input4.value()
      options.push(op3)

      console.log(op3);
      //gameState = 1
      
      QA++
      i++
      if(QA < 3){
          if(arr[i]===1){
            this.display1()
          }
          else if(arr[i]===2){
            this.display2()
          }
      }
      else if(QA === 3){
          this.hidee();
          gameState = 1
      }
    });
  }

  hidee(){
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.button.hide()
  }
  
}
