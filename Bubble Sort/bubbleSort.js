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

const bubbleSort = (nums) => {
    do{
        var swapped = false;
        for(var i = 0; i < nums.length; i++) {
            if(nums[i] > nums[i + 1]) {
                var temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
    return nums
}

// ****** END OF Exercise 1 ****** //


// ****** BUBBLE SORT NOTES ****** //
/*
1.  BIG O is n^2 for bubble sort
*/
