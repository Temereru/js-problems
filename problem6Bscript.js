var array = [84,78,54,127,162,197,59,72,101,172,14,151,134,174,193,105,176,19,9,142,99,121,64,67,157,164,87,25,175,131,150,13,183,114,182,169,45,56,173,24,92,76,62,116,103,139,136,95,144,166,70,113,118,75,6,69,120,22,185,85,34,179,125,44,26,106,137,98,80,195,1,3,17,88,124,153,199,187,18,21,189,51,163,94,158,63,65,149,50,55,29,115,66,161,46,191,10,96,35,181,39,109,188,79,171,32,11,156,93,184,138,8,104,16,117,165,97,82,60,12,47,178,68,23,73,159,198,130,126,122,146,123,58,15,90,155,2,154,27,143,37,41,170,186,200,180,129,152,81,112,145,160,52,141,31,132,4,30,40,190,192,36,133,28,177,107,48,61,140,53,49,167,128,77,168,111,89,33,71,43,135,119,194,20,102,7,5,83,57,38,108,86,74,100,42,110,147,91];
var array2 = [];

for (i = 1; i <= 200; i++)
{
	array2.push(i);
}

for(j = 0; j < array.length; j++)
{
	array2.splice(array[j]-1,1,0);
}

for(l in array2)
{
	if(array2[l] !== 0)
	{
		console.log(array2[l]);
	}
}