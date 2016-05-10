/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/

//my answer
function first(array, cb) {
  cb(array[0]);
}
//end of my answer


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



//myanswer
function last(array, cb) {
  cb(array[array.length - 1]);
}
//end of my answer//

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //my answer
  function multiply (num1, num2, cb) {
    cb(num1 * num2);
  }
  //end of my answer

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //my answer
function contains(array, str, cb) {
  var isColt = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === str) {
     isColt = true;
    }
  }
  cb(isColt);
}
  //end of my answer

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
//sorted = Blaine, Cahlan, Cahlan, Colt, Ryan, Tyler, Tyler
    //start of my answer
    function uniq(array, cb) {
      var newArray = array.sort();
      var fixedArray = [];
      for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] !== newArray[i + 1]) {
          fixedArray.push(newArray[i]);
        }
      }
      cb(fixedArray);
    }
    //end of my answer

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




//my answer start
function each(array, cb) {
  for (var i = 0; i < array.length; i++) {
    cb(array[i], i);
  }
}
//my answer end

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //start of my answer
 function getUserById(arr, str, cb) {
   var user = undefined;
   for (var i = 0; i < arr.length; i++) {
     if (arr[i].id === str) {
       user = arr[i];
     }
   }
   cb(user);
 }
 //end of my answer

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
