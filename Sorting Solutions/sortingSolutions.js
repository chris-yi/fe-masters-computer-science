// ************ Bubble Sort ************ //

const bubbleSort = (arr) => {
    do{
        var sorted = false;
        arr.forEach((num, i) => {
            console.log(`[UNSORTED]`, arr)
            if(num > arr[i + 1]){
                let temp = num;
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sorted = true;
            }
        })
    }while(sorted)
    return arr;
}

// ************ END OF Bubble Sort ************ //


// ************ Insertion Sort ************ //

const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            console.log(`[UNSORTED]`, arr)
            if(arr[i] < arr[j]) {
                const spliced = arr.splice(i, 1);
                arr.splice(j, 0, spliced[0]);
            }
        }
    }
    return arr;
}

// ************ END OF Insertion Sort ************ //