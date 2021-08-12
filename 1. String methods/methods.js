function stringMethods() {
  let inputString = document.getElementById("inputString").value;

  console.log("            === BASIC ===            ");
  console.log("Your input String: " + inputString);
  console.log("Length: " + inputString.length);
  console.log("The second character in inputString: " + inputString[1]);
  console.log("Character in inputString at specified index: " + inputString.charAt(1));	// charAt
  console.log("Convert inputString to lowerCase: " + inputString.toLowerCase());	// toLowerCase
  console.log("Convert inputString to upperCase: " + inputString.toUpperCase() + '\n\n'); // toUpperCase

  console.log(inputString.indexOf("me"));	//indexOf
  console.log("Split inputString into an array of substrings by param separator: " + inputString.split(" ")); // Split
  console.log("Trim whitespace from beginning and end of inputString: " + inputString.trim());	// Trim
  console.log("Less then String: " + (inputString < "Hello gitHub"));
  console.log("Greater then String: " + (inputString > "Hello gitHub"));
  console.log(' ');

  console.log("            === Other String Methods ===            ");
  //Concat()
  const stringOne = "Hello ";
  const stringTwo = "World";
  console.log(stringOne.concat(stringTwo));

  //Search()
  const searchWords = "My name is Adam";
  console.log(searchWords.search("Adam"));

  //LastIndexOf()
  const lastWords = "A dev knows a dev";
  console.log(lastWords.lastIndexOf("dev"));

  //Replace()
  const helloName = "Hello Dev!";
  console.log(helloName.replace("Dev", "World"));

  //Slice(start, end)
  const sliceWords = "JavaScript Programming Language";
  console.log(sliceWords.slice(0, 10)) // JavaScript

  //SubString(start, end)
  console.log(sliceWords.substring(0, 4));

  //SubStr(start, length)
  console.log(sliceWords.substr(4, 6));
  console.log(' ');

  //ValueOf()
  const stringThree = new String("Coding");
  console.log(typeof stringThree); // 'object'
  console.log(stringThree.valueOf()); // 'Coding'
  console.log(typeof stringThree.valueOf()) // 'string'

  //ToString()
  const number = 123;
  console.log(number.toString()) // '123'

  // Includes()
  const includesWord = "JavaScript is the best Programming Language";
  console.log(includesWord.includes("best")); // true
  console.log(includesWord.includes("worst")); // false

  // charCodeAt()
  const charCodeWord = "abc";
  console.log(charCodeWord.charCodeAt(0)) // 97

  // Match()
  const matchWord = "The rain in SPAIN stays mainly in the plain";
  // The match() method searches a string for a match against a regular expression.
  console.log(matchWord.match(/ain/g)); // (3) ["ain", "ain", "ain"]
  
}