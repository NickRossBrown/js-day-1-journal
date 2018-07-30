export function journal(entry) {

  var vowels = ["a", "e", "i", "o", "u"];
  var vowelCount = 0;
  var constantCount = 0

  for (var i=0;i<= entry.length;i++){
    if(entry[i] === "a" || entry[i] === "e" || entry[i] === "i" || entry[i] === "o" || entry[i] === "u"){
      vowelCount+=1;
    }
    else {
      constantCount +=1
    }
  }

  return "Vowel count:  " + vowelCount + "   Constant Coount: " + constantCount;
}
