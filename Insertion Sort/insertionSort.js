// ****** Very basic example of a Insertion Sort: ****** //

// starting: [5, 3, 6]

// break them down to sub arrays

// 1. sorted array of 1 [5]
// 2. we grab the 3 and see where it'll go
// 3. move 3 to beginning of array [3, 5, 6]


// ****** END OF basic example of Insertion Sort ****** //






// ****** EXERCISE 1 ****** //

const insertionSort = (nums) => {
    for(let i = 1; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            console.log(nums);
            if(nums[i] < nums[j]) {
                const spliced = nums.splice(i, 1);
                nums.splice(j, 0, spliced[0]);
            }
        }
    }
    console.log(nums)
}


// ****** END OF Exercise 1 ****** //




// ****** Insertion Sort NOTES ****** //
/*

1.  Really great for arrays where you are pretty sure most of the items are sorted.

2. It falls apart when the array is not sorted at all.

3. First loop starts at index of one as the first number is always sorted.

4. Second loop will be looping through the numbers that are already sorted.

Ex: if i = 5, j will start over from 0 until it reaches i, and if the number at index of j is less that the current number i, it will swap it there.

5.  Insertion is better than Bubble because once its sorted, it doesnt need to loop through the sorted numbers again.

*/

// ****** END OF Insertion Sort NOTES ****** //
