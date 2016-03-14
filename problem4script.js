var num = 204321;
counter = 0;
var newNum;
num += "";
for(i = 0; i < num.length ; i++)
{
	if(!(num[i] % 2) && !(num[i+1] % 2) && counter === 0)
	{
		newNum = num.slice(0,i+1) + "-" + num.slice(i+1)
		counter ++;
	}
	else if(!(num[i] % 2) && !(num[i+1] % 2))
	{
		newNum = newNum.slice(0,i+1+counter) + "-" + newNum.slice(i+1+counter)
		counter ++;
	}
}
alert(newNum);
