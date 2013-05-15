(function($) {

	/**
	* Return a object containing a value and ratio, based on sequence number
	*
	* @param (int) desired fibonacci sequence
	* @return (object) contains data about sequence (value, ratio, sequence)
	*/
    $.fn.fibonacciCalc = function(sequence) {
    	var result = new Object();
        this.each( function() {
            result = fibonacciGets(sequence);
        });
        return result;
    }

    /**
	* Iterate fibonacci sequence
	*
	* @param (null / object / string) command or settings
	*/
    $.fn.fibonacciGenerator = function(options) {
    	var options = handleArguments(options);
    	var settings = $.extend({
            start        : 1, //starting sequence number
            end          : 99, //number to end generator
            loop         : true, //after reaching end continue from beginning
            speed        : 500, //speed to iterate
            group        : true, //group display sequences together or overwrite each
            action       : 'start' //command for sequencer
        }, options);
        this.each( function() {
        	if(settings.action == 'start' || settings.action == 'restart'){
	        	this.currentsequence = settings.start;
	        	this.play = true;
	        	this.display = '';
	        	fibonacciRunGenerator(this,settings);
        	}
        	if(settings.action == 'stop'){
        		this.play = false;
        	}
        	if(settings.action == 'resume'){
        		this.play = true;
        		fibonacciRunGenerator(this,settings);
        	}
        });

    }
    /**
	* Return fibonacci sequence data
	*
	* @param (int) desired fibonacci sequence
	* @return (object) contains data about sequence (value, ratio, sequence)
	*/
    function fibonacciGets(s){
    	var result = new Object();
    	result.sequence = s;
    	result.value = fibonacciValueGet(s);
        result.ratio = fibonacciRatioGet(s);
		return result;
    }
    /**
	* Return fibonacci sequence value
	*
	* @param (int) desired fibonacci sequence
	* @return (float) fibonacci sequence value
	*/
    function fibonacciValueGet(s){
    	val = 0;
    	if(!isNaN(s)){

	  		val=Math.round((Math.pow((1+Math.sqrt(5))/2,s)-Math.pow((1-Math.sqrt(5))/2,s))/Math.sqrt(5));
		}
		return val;
    }
    /**
	* Return fibonacci sequence ratio
	*
	* @param (int) desired fibonacci sequence
	* @return (float) fibonacci sequence ratio
	*/
    function fibonacciRatioGet(s){
    	var ratio = 0;
    	if(s > 1){
    		val1 = fibonacciValueGet(s);
    		val2 = fibonacciValueGet(s-1);
    		ratio = val1/val2;
    	}
    	return ratio;
    }
    /**
	* Iterate generator
	*
	* @param (object) element applying generator
	* @param (object) generator settings
	*/
    function fibonacciRunGenerator(element,settings){
    	//var currentsequence = fibonacciValueGet;
    	if(element.play){
	    	var sequenceData = fibonacciGets(element.currentsequence);
	    	//console.log(sequenceData);
	    	//display
	    	var display = makeDisplay(sequenceData);
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
    	
    }
    /**
	* Return display html
	*
	* @param (object) sequence data
	* @return (string) html display
	*/
    function makeDisplay(data){
    	var display = '<ul>';
    	display += '<li><strong>Sequence:</strong> '+data.sequence+'</li>';
    	display += '<li><strong>Value:</strong> '+data.value+'</li>';
    	display += '<li><strong>Ratio:</strong> '+data.ratio+'</li>';
    	display += '</ul>';
    	return display;
    }
    /**
	* Return updated options. Detect if option is a string (command) or object
	*
	* @param (object / string) settings data
	* @return (object) settings data
	*/
	function handleArguments(options) {
		if (options === undefined || options === null)
			options = {};
		if (options.constructor == String) {
			options = { action: options };
		}
		return options;
	}

}(jQuery));