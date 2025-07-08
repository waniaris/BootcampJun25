const fullName = "  john doe  ";
     const formattedName = fullName
       .trim()
       .split(" ")
       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
       .join(" ");
     console.log(formattedName); 


     console.log(fullName); 
    
     console.log(fullName.trim()); 
     console.log(fullName.trim().split(" "));
     console.log(fullName.trim().split(" ").map((word) => word.charAt(1).toUpperCase() + word.slice(2)));



    var test = "abcde"

    var a = test.charAt(4).toUpperCase()

    console.log(a)
    console.log(test)
