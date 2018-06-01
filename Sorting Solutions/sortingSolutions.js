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