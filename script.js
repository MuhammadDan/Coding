function largestnumber(arr) {
    let largest = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest;
}
var arr = [2, 5, 1, 8, 3];
console.log(largestnumber(arr));

 // Output: 8
 console.log("The largest number in the array is: " + largestnumber(arr));
 console.log("again change")
 console.log("final change")