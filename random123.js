function randomDigits() {
	var digits = Array();
			
			
	for( i = 0;i < 4 ; i++) 
	{
		var correct = false; 
		while(correct == false)
		{
			var rnd = Math.random()* 9;
			var rounded = Math.floor(rnd);
			if(digits.includes(rounded) == false)
			{
				digits.push(rounded);
				correct = true;
			}
		}
	}
	return digits;
}