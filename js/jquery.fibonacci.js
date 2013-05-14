(function($) {

    $.fn.fibonacciCalc = function(sequence) {
    	var result = new Object();
        this.each( function() {
            //value = sequence;
            result.value = fibonacciValueGet(sequence);
            result.ratio = fibonacciRatioGet(sequence);
        });
        return result;
    }

    $.fn.fibonacciGenerator = function() {

        this.each( function() {
        	//Create timer and run generater.
        	//Setup generator commands (pause + next + back + restart)
        });

    }
    //
    function fibonacciValueGet(s){
    	val = 0;
    	if(!isNaN(s)){
	  		val=Math.round((Math.pow((1+Math.sqrt(5))/2,s)-Math.pow((1-Math.sqrt(5))/2,s))/Math.sqrt(5));
		}
		return val;
    }
    function fibonacciRatioGet(s){
    	var ratio = 0;
    	if(s > 1){
    		val1 = fibonacciValueGet(s);
    		val2 = fibonacciValueGet(s-1);
    		ratio = val1/val2;
    	}
    	return ratio;
    }
}(jQuery));