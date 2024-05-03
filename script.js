let data={Vignesh:"vignesh@1",Ashoke:"Ash22A",Saiteja:"Sai23#"};
let username1;
function  validate(){
     a=data[document.getElementById("username").value];
     b=document.getElementById("password").value;
     username1=document.getElementById("username").value;
        if(a==b){
            return true;}
    
        else{
            let y=document.getElementById("error");
            y.innerHTML="Please enter a valid id or password ";
            return false;
        }


    }

