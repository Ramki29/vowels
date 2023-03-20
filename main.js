
var string=prompt("Enter the string:");
var count=0;
function countVowel(string)
	{
	for (i=0; i<string.length; i++)
		{
        if (string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u" ) 
			{
            count++;
			}
		}
		return count;
	}
	document.write(countVowel(string));



		
		

		