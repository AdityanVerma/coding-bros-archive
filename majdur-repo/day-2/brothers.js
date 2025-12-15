function brothers(name1, name2){
    let firstLastName, secondLastName;
    for(i=0;i<(name1.length>name2.length?name1.length:name2.length);i++){   // custom split function to prevent calling split twice
        if(name1[i]===" "){
            firstLastName = name1[i+1, name1.length-1];
        }
        if(name2[i]===" "){
            secondLastName = name2[i+1, name2.length-1];
        }
    }
    if(firstLastName === secondLastName) {
        console.log(firstLastName, secondLastName);
        console.log("ARE BROTHERS");
    }
    else {
        console.log("NOT");
    }
}


brothers("Adityan Verma", "Priyanshu Verma");
brothers("Rajesh Mehta", "Jagdish Mehta");
brothers("Raju Agarwal", "Taklu Bajaj");