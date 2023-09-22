// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

// var geek = [[],[],[]];

// 2. Declare and initialize a multidimensional array representing the following matrix:

// var geek = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// for(let i= 0; i<geek.length; i++){
       
//   for(let j = 0; j<4; j++){
//     document.write(geek[i][j] + " ")
//   }
//   document.write( "<br> ")
// }


// 3. Write a program to print numeric counting from 1 to 10.

// for(let i= 1; i<=10; i++){
       
//   document.write( i+"<br> ")
// }


// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// let table = +prompt("Enter a Number to Show Multiplication Table")
// let length = +prompt("Enter a Number to Show Multiplication Table")
// for(let i= 1; i<=length; i++){
       
//   document.write( table+" x "+ i+" = "+ table*i+"<br>")
// }

// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for(let i =0; i<fruits.length; i++){
//   document.write(fruits[i]+"<br>")
// }
// document.write("<br>")
// fruits.forEach(function(value,index){
//   document.write( "Element at index "+index+" is "+ value+"<br>")

// })

// 6. Generate the following series in your browser. See example output. a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// var heading = "<h2>Counting</h2>"
// document.write(heading)
// var counting = 15;
// for(let i =1; i<=counting; i++){
//   document.write(i+" , ")
// }

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// var heading = "<h2>Reverse Counting</h2>"
// document.write(heading)
// var counting = 1;
// for(let i =15; i>=counting ; --i){
//   document.write(i+" , ")
// }
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// var heading = "<h2>Even</h2>"
// document.write(heading)
// var even = 20;
// for(let i =0; i<=even ; i+=2){
//   document.write(i+" , ")
// }

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// var heading = "<h2>Odd</h2>"
// document.write(heading)
// var even = 20;
// for(let i =1; i<=even ; i+=2){
//   document.write(i+" , ")
// }

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var heading = "<h2>Series</h2>"
// document.write(heading)
// var series = 20;
// for(let i =2; i<=series ; i+=2){
//   document.write(i+"k, ")
// }

// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:


// var order = prompt("Welcome to Paradise Bakery. What do you want to order sir/ma'am?")
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]

// if(a.includes(order))

// document.write(order+ " is Available at index "+a.indexOf(order)+" in our bakery  "+ "<br>")

// else
// document.write("We are sorry "+order +" is not available in our bakery")

// 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].

// var a =[24, 53, 78, 91, 12];
// var largestNumber = a[0]

// for(let i =0; i<a.length; i++){
//   if(a[i]>largestNumber){
//     largestNumber = a[i];
//   }
// }
// document.write(a+"<br>"+"The largest number in the array is: " + largestNumber)


// 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]

// var a =[24, 53, 78, 91, 12];
// var smallest = a[0]

// for(let i =0; i<a.length; i++){
//   if(a[i]<smallest){
//     smallest = a[i];
//   }
// }
// document.write(a+"<br>"+"The smallest number in the array is: " + smallest)

// 10. Write a program to print multiples of 5 ranging 1 to 100.
// var number= 100;
// for(let i = 5;i<=number; i+=5){
//   document.write(i+", ")
// }