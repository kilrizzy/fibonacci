# Fibonacci Generator / Visualizer

Functions to display a fibonacci sequence and view a counter of sequences

##How To Use

The fibonacci generator has a calculation method, and a generation method

###Calculation

To simply get information about a particular fibonacci sequence:

`````javascript

var result = $(this).fibonacciCalc(sequenceNumber);

`````

which will return an object containing the sequence value and ratio. ie:

`````javascript

var result = $(this).fibonacciCalc(8);

`````

returns:

`````javascript

Object { sequence="8", value=21, ratio=1.6153846153846154}

`````

###Generation

The generation method will apply to an element a sequence of lists containing an iteration of fibonacci sequences.

To add the generator to an element with the default options:

`````javascript

$(element).fibonacciGenerator();

`````

Options can be customized by being passed as an object

`````javascript

$(element).fibonacciGenerator({
    group        : false,
});

`````

Available options that can be passed to the generator (with defaults):

`````javascript

var settings = $.extend({
    start        : 1, //starting sequence number
    end          : 99, //number to end generator
    loop         : true, //after reaching end continue from beginning
    speed        : 500, //speed to iterate
    group        : true, //group display sequences together or overwrite each
    action       : 'start' //command for sequencer
}, options);

`````

The following commands can also be passed as a string to control the generator

`````javascript

$(element).fibonacciGenerator('stop');
$(element).fibonacciGenerator('resume');
$(element).fibonacciGenerator('restart');

`````