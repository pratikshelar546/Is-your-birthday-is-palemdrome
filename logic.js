function reverseStr(str) {
  const splitStr = str.split("");
  const newStr = splitStr.reverse();
  const reverseStr = newStr.join("");
  return reverseStr;
}
function checkStrIsPalemdrome(str) {
  var reverse = reverseStr(str);
  return reverse === str;
}

function dateToStr(date) {
  var dateStr = { day: "", month: "", year: "" };

  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }
  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.month.toString();
  }
  dateStr.year = date.year.toString();
  return dateStr;
}
function allDateFormat(date) {
  const dateStr = dateToStr(date);
  const ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  const mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  const yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  const ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  const mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  const yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
  return [ddmmyyyy, mmddyyyy, yyyymmdd, mmddyy, ddmmyy, yymmdd];
}

function checkAllDateFormat(date) {
  var listOfPalemdrome = allDateFormat(date);
  var flag = false;
  for (var i = 0; i < listOfPalemdrome.length; i++) {
    if (checkStrIsPalemdrome(listOfPalemdrome[i])) {
      flag = true;
      break;
    }
  }
  return flag;
}
function isLeapYear(year) {
  if (year % 400 === 0) return true;

  if (year % 100 === 0) return false;

  if (year % 4 === 0) return true;

  return false;
}

function nextDay(date) {
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

  var dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month = 3;
      }
    } else {
      if (day > 28) {
        day = 1;
        month = 3;
      }
    }
  } else {
    if (day > dayInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }
  if (month > 12) {
    month = 1;
    year++;
  }
  return {
    day: day,
    month: month,
    year: year,
  };
}
function getNextPalemdromeDate(date) {
  var ctr = 0;
  var nextDate = nextDay(date);
  while (1) {
    ctr++;

    var listResult = checkAllDateFormat(nextDate);

    if (listResult) {
      return [ctr, nextDate];
    }
    nextDate = nextDay(nextDate);
  }

  // return true
}

//past palemdrome date

function isLeapPastYear(year) {
  if (year % 400 === 0) return true;

  if (year % 100 === 0) return false;

  if (year % 4 === 0) return true;

  return false;
}

function pritDay(date) {
  var day = date.day - 1;

  var month = date.month;
  var year = date.year;

  var dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 3) {
    if ((day < 1)) {
      if (isLeapYear(year)) {
        day = 30;
        month--;
      } else {
        day = 29;
        month--;
      
      }
    }
  } else {
    if (day < 1) {
      //feb 1
      day = dayInMonth[month - 2]; //day =31
      month--;
    }
  }
  if (month < 1) {
    month = 12;
    day = dayInMonth[month - 1];
    year--;
  }
  return {
    day: day,
    month: month,
    year: year,
  };
}
function getNextPalemdromeDate(date) {
  var ctr = 0;
  var nextDate = nextDay(date);
  while (1) {
    ctr++;

    var listResult = checkAllDateFormat(nextDate);

    if (listResult) {
      return [ctr, nextDate];
    }
    nextDate = nextDay(nextDate);
  }
}

function getPrivpalemdromeDate(date) {
  var counter = 0;
  var privDate = pritDay(date);

  while (1) {
    counter++;
    var privListResult = checkAllDateFormat(privDate);
    if (privListResult) {
      return [counter, privDate];
    }
    privDate = pritDay(privDate);

  }
}

function compareNextAndPastDate(date) {
 const[ctr,nexDate] = getNextPalemdromeDate(date);
  const [counter,pridate] = getPrivpalemdromeDate(date);

  if (ctr > counter) {
   output.innerText= "The nearest palindrome date is  " + pridate.day +"-" + pridate.month +"-" + pridate.year + ", you missed by " + counter + " Days";
  } else {
   output.innerText = "The nearest palindrome date is  " + nexDate.day +"-" + nexDate.month +"-" + nexDate.year + ", you missed by " + ctr + " Days";
  }
}
// var date={
//   day:1,
//   month:1,
//   year:2020
// }
// console.log(getPrivpalemdromeDate(date));

const birthdate = document.querySelector("#date");
const click = document.querySelector("#btn");
const output = document.querySelector("#ot");

function clickhandler() {
  const bdayStr = birthdate.value;
  if (bdayStr !== "") {
    const bdayDate = bdayStr.split("-");
    var date = {
      day: Number(bdayDate[2]),
      month: Number(bdayDate[1]),
      year: Number(bdayDate[0]),
    };
    var ispalindrome = checkAllDateFormat(date);
    if(ispalindrome){
      output.innerText = "yeh! Your birthdate is palindrome";
    }else{

      var dateStrr = compareNextAndPastDate(date);
      
 
    }
  }
}

click.addEventListener("click", clickhandler);
