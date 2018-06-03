// ****** EXERCISE 1 ****** //



// ****** END OF Exercise 1 ****** //




// ****** Quick Sort NOTES ****** //
/*

[5, 7, 4, 9, 6]

1. First thing we do is we pick a (last item in array).  For this example we will choose 6 to be the pivot.

2. We will create 2 arrays, the left array will consist of numbers less than 6 and the right will consist of numbers greater than 6.

Left: [5, 4]
Pivot: 6
Right: [7, 9]


3.  We will then do this again (call quick sort) with the left and right arrays.

4. 

Left: [5, 4] <-- Call quick sort on this

Left: []
Pivot: 4
Right: [5]


Right: [7, 9] <-- Call quick sort on Right

Left: [7]
Pivot: 9
Right: []


5.  We will then concat these.

Left:
Concat left which is empty []
Concat Pivot which is [4]
Concat Right [4, 5]

Right: 
Concat left which is [7]
Concat Pivot [7, 9]
Concat Right []

6.  Concat left pivot and right again.


*/

// ****** END OF Quick Sort NOTES ****** //
