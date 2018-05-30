// ****** Very basic example of a Bubble Sort: ****** //

// If we have numbers 5, 6, 4, 7, we are going to sort it to be in order.

// 5, 6, 4, 7
// 5, 6
// 5, 4, 6, 7, 
// 4, 5, 6, 7


// ****** END OF basic example of Bubble Sort ****** //







// ****** EXERCISE 1 ****** //


/*
  Write a bubble sort here
  Name the function bubbleSort
  
  If you want to suspend running the unit tests, change describe to xdescribe
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
  
  Provided is an optional visualization helper. Call snapshot(yourArray) at the
  beginning of each iteration of your inner loop with the state of the being-sorted
  array and the helper tool will show you how your array looks in the HTML section
  of CodePen. This is optional and only for your help.
  
*/

// const bubbleSort = (nums) => {
//     do{
//         var swapped = false;
//         for(var i = 0; i < nums.length; i++) {
//             if(nums[i] > nums[i + 1]) {
//                 var temp = nums[i];
//                 nums[i] = nums[i + 1];
//                 nums[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     } while(swapped);
//     return nums
// }

// ****** END OF Exercise 1 ****** //


// ****** BUBBLE SORT NOTES ****** //
/*
1.  BIG O is n^2 for bubble sort
*/





// Other solutions:

///////////////////////////////////////////
// const bubbleSort = (arr) => {
//     do {
//         var swapped = false;
//         arr.forEach((num, i) => {
//             if(num > arr[i + 1]) {
//                 let temp = num;
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         })
//     }while(swapped === true)
//     return arr;
// }
///////////////////////////////////////////



// Solution using just while loop.

// function bubbleSort(array) {

//     // Use an isSorted flag to determine whether or not there
//     // is more sorting to do when we are in the while loop
//     let isSorted = false;

//     while(!isSorted) {

//         // Mark is sorted true, then re-mark it false in the loop.
//         // If the loop is finished, then isSorted will stay true
//         // and we will thus exit the while loop and return
//         isSorted = true;

//         for(let i = 0; i < array.length - 1; i++) {
//             if(array[i] > array[i+1]) {
//                 // Swap by holding the first element in a temp variable,
//                 // then reassigning indexes i and i+1 to each other
//                 let temp = array[i];
//                 array[i] = array[i + 1];
//                 array[i + 1] = temp;

//                 // Mark the isSorted flag false because there is still sorting to do if we are in the loop
//                 isSorted = false;
//             }
//         }
//     }
//     // Return the sorted array!
//     return array;
// }


const bubbleSort = (arr) => {
    // Create a DO WHILE loop
    do{
      var swapped = false; // Create a variable swapped and set to false;
      arr.forEach((num, i) => { // Loop over array and check to see if the current num is greater than the number to the right of it.
        if(num > arr[i + 1]) {
            // If current number is greater, we create a temp variable to store the value of current num.
          let temp = num;
          arr[i] = arr[i + 1]; // Set the current num to the value to the right
          arr[i + 1] = temp; // Set the value of the number on the right to number stored in temp var
          swapped = true; // set swapped to true and go to next iteration.
        }
      })
    }while(swapped) // The do while will run as long as swapped in set to true.  Itll keep going until it doesnt go in the if statement anymore and will return the sorted array.
    return arr
  }
  
  bubbleSort([2, 1, 5, 3, 8, 10, 4, 6, 2342, 245234, 1234, 7])