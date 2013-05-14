(function($) {

    $.fn.fibonacciCalc = function(sequence) {
    	var result = new Object();
        this.each( function() {
            //value = sequence;
            result = fibonacciGets(sequence);
        });
        return result;
    }

    $.fn.fibonacciGenerator = function(options) {

    	var settings = $.extend({
            start        : 1,
            end          : 99,
            loop         : true,
            speed        : 500,
            group        : true,
        }, options);

        this.each( function() {
        	this.currentsequence = settings.start;
        	this.display = '';
        	fibonacciRunGenerator(this,settings);
        	//this.timer = setTimeout(function(){ console.log(this); }, settings.speed);
        	//Create timer and run generater.
        	//Setup generator commands (pause + next + back + restart)
        });

    }
    //Get the fibonacci data from sequence number
    function fibonacciGets(s){
    	var result = new Object();
    	result.sequence = s;
    	result.value = fibonacciValueGet(s);
        result.ratio = fibonacciRatioGet(s);
		return result;
    }
    //Get the fibonacci value of the given sequence
    function fibonacciValueGet(s){
    	val = 0;
    	if(!isNaN(s)){

	  		val=Math.round((Math.pow((1+Math.sqrt(5))/2,s)-Math.pow((1-Math.sqrt(5))/2,s))/Math.sqrt(5));
		}
		return val;
    }
    //Get the ratio of the given sequence (previous / current). Will get closer to 1.618 as the numbers get higher
    function fibonacciRatioGet(s){
    	var ratio = 0;
    	if(s > 1){
    		val1 = fibonacciValueGet(s);
    		val2 = fibonacciValueGet(s-1);
    		ratio = val1/val2;
    	}
    	return ratio;
    }
    //fibonacciInitializeGenerator 
    function fibonacciRunGenerator(element,settings){
    	//var currentsequence = fibonacciValueGet;
    	var sequenceData = fibonacciGets(element.currentsequence);
    	console.log(sequenceData);
    	//display
    	var display = '<ul>';
    	display += '<li><strong>Sequence:</strong> '+sequenceData.sequence+'</li>';
    	display += '<li><strong>Value:</strong> '+sequenceData.value+'</li>';
    	display += '<li><strong>Ratio:</strong> '+sequenceData.ratio+'</li>';
    	display += '</ul>';
    	if(settings.group){
    		element.display += display;
    	}else{
    		element.display = display;
    	}
    	$(element).html(element.display);
    	//Continue?
    	var continueTimer = true;
    	if(element.currentsequence < settings.end){
	    	element.currentsequence++;
    	}else if(settings.loop){
    		element.display = '';
    		element.currentsequence = 1;
    	}else{
    		continueTimer = false;
    	}
    	//
    	if(continueTimer){
	    	element.timer = setTimeout(function(){ fibonacciRunGenerator(element,settings); }, settings.speed);
    	}
    	
    }
}(jQuery));