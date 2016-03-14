var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var obj1={};
var attr1 = 0;
var attr2 = 0;

for (i = 0; i < arr1.length; i++) {
	if (obj1.hasOwnProperty(arr1[i])) {
		obj1[arr1[i]] ++;
	} else {
		obj1[arr1[i]] = 1;
	}
}


for (var j in obj1) {
  attr2 = obj1[j];
	if (attr2 >= attr1) {
		attr1 = attr2;
	}
}
console.log(obj1);
console.log(j + ":" + attr1);