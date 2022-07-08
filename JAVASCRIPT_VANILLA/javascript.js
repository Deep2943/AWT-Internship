function demoExternalAlert(){
    alert("External Alert.");
  }

  function demoExternalConfirm(){
    if(confirm("Are You Sure..??")){
      alert("YESSS...")
    }
    else{
      alert("NOOOO..")
    }
  }

  function demoExternalPrompt(){
    var FName = prompt("Enter your first name here..");
    var LName = prompt("Enter your last name...");

    alert(FName + " " + LName);
  }