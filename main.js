function sumArray(array) {
//add conditionals to check if the array is empty, null, or none, or if it only has 1 element, if this is the case return 0

    if (array == null)
    {
        return 0;
    }
    else if (array.length < 2)
    {
        return 0;
    }
    else
    {

        array = array.sort(function(a,b) {return a - b;});
//         variable to hold the sum of the sorted array
        var total = 0;

        for (var i = 1; i < array.length - 1; i++) {
            total += array[i];
        }
        return total;
    }
}


//get the sum of all the num excluding the highest and lowest element values!
//only one of these should be excluded even if repeated
