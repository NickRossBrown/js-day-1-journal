export function journal(entry) {
  entry.split("")
  var vowels = ["a", "e", "i", "o", "u"];
  var vowelCount = 0;
  var consonantCount = 0

  for (var i=0;i<= entry.length;i++){
    if(entry[i] === "a" || entry[i] === "e" || entry[i] === "i" || entry[i] === "o" || entry[i] === "u"){
      vowelCount+=1;
    }
    else {
      consonantCount +=1
    }
  }
  return "Vowel count:  " + vowelCount + "   Consonant Count: " + consonantCount;
}

export function getTeaser(words) {
  var wordSplit = words.split(" ")
  var results = []

  for (var x=0; x<= 8; x++) {
    results.push(wordSplit[x])
  }
  var results = results.join(" ")

  return results;
}
