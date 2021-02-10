class Quiz{
    constructor(){


        
    }

    result(){

        text(contestantname , 400,20 );
        var dp= 50  
        for(var i=1; i< 4 ; i++){

            if(crtAns[i-1]=== options[i-1]){
                fill("green")
            }
            else{
                fill("red")
            }
             textSize(17)


            text(i + " answer :" + options[i-1], 350,dp)
            dp = dp+30
          
          }
       
    
    }
}