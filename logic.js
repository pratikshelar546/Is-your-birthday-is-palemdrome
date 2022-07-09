function reverseStr(str){
const splitStr = str.split('');
const newStr = splitStr.reverse();
const reverseStr = newStr.join('');
return reverseStr;

}
function checkStrIsPalemdrome(str){
    var reverse = reverseStr(str);
    return reverse === str;
}

function dateToStr(date){
  var dateStr={day: '', month:'',year:''};
  
  if(date.day < 10){
    dateStr.day = '0'+date.day;

  }else{
    dateStr.day= date.day.toString();
  }
  if(date.month<10){
    dateStr.month = "0"+date.month;
  }else{
    dateStr.month= date.month.toString();
  }
  dateStr.year = date.year.toString();
  return dateStr;
}
function allDateFormat(date){
    const dateStr = dateToStr(date);
    const ddmmyyyy = dateStr.day+dateStr.month+dateStr.year;
    const mmddyyyy = dateStr.month + dateStr.day +dateStr.year;
    const yyyymmdd = dateStr.year +dateStr.month +dateStr.day;
    const ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2); 
    const mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    const yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;  
    return [ddmmyyyy , mmddyyyy , yyyymmdd , ddmmyy , yymmdd]
}

function checkAllDateFormat(date){
    var listOfPalemdrome = allDateFormat(date);
    var flag = false;
    for(var i =0; i<listOfPalemdrome.length; i++){
        if(checkStrIsPalemdrome(listOfPalemdrome[i])){
            flag = true;
            break;
        }

    }
    return flag;
}

function nextDay(){
    const day = day+1;
}

var date = {
    day: 2,
    month: 11,
    year:2020
}

console.log(checkAllDateFormat(date));
//  console.log(checkStrIsPalemdrome("oppo"));
//  console.log(checkStrIsPalemdrome("nayan"));
