var theBeatlesPlay=function(instAr,musAr){
  var result = [];
  for(let m=0;m<musAr.length;m++){
    var musString=musAr[m]+" plays the "+instAr[m];
    result.push(musString);
  }
  return result;
};

var johnLennonFacts=function(ar){
  var count=0;
  while(count<ar.length){
    ar[count]=ar[count]+"!!!";
    count++;
  }
};

var iLoveTheBeatles=function(number){
  var result=[];
  var count=number;
  do{ 
    result.push("I love the Beatles!");
    count++;
  } while (count<15);
};