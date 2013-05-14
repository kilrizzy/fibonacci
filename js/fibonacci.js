var s = new Array(); //Array of Sequences
var sct = s.length;//Sequence Count
var phi = 0;//Phi
$(document).ready(function() {
	sequence_restart();
	$('#fibonacci .restart').click(function() {
	  sequence_restart();
	});
});
function sequence_update(){
	//New Sequence Number
	var ns = s[sct-1] + s[sct-2];
	//Add new sequence
	s[sct] = ns;
	//Update count
	sct = s.length;
	//Calculate Phi
	phi = s[sct-1] / s[sct-2];
	//display
	sequence_display();
	setTimeout(sequence_update,1000);
}
function sequence_restart(){
	s = [];
	s[0] = 0;
	s[1] = 1;
	phi = 0;
	sct = s.length;
	sequence_update();
	$('#sequence').html('<li><label>1</label>0</li><li><label>2</label>1</li>');
}
function sequence_display(){
	var shtml = '<li><label>'+sct+'</label><span>'+s[sct-1]+'</span></li>';
	$('#sequence li').last().after($(shtml));
	$('#snum span').html(sct);
	$('#sval span').html(s[sct-1]);
	$('#phi span').html(round_number(phi,8));
}
function round_number(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}