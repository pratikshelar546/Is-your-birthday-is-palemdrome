const birthdate = document.querySelector("#date");
const click = document.querySelector("#btn");

const output = document.querySelector("#ot");

function palemdromeORNot(){
    const date = birthdate.value;
    console.log(date);
    const newType = date.split("-");
    console.log(newType);
  var year = newType[0];
    var month =newType[1];
    var day = newType[2];
    const newDate = day+ month+ year;
    console.log("Date "+ newDate)

    const splitDate = newDate.split('');
    console.log("splited "+ splitDate);
    const reverseDate = splitDate.reverse();
    console.log("reverse "+ reverseDate);
    const joinedDate = reverseDate.join('');
    console.log("joined  " + joinedDate)

    if(joinedDate === newDate){
       output.innerText="Your birthdate is paledrome ";

    }else{
        output.innerText="Your birthdate is not  paledrome ";
    }

}

click.addEventListener("click", palemdromeORNot)