function stringMethods() {
  //const exampleString = 'Adam GitHub page'
  let inputString = document.getElementById("inputString").value;

  console.log("            === BASIC I. ===            ")
  console.log("Your input String: " + inputString)
  console.log("Length: " + inputString.length)
  console.log("The second character in inputString: " + inputString[1])
  console.log("Character in inputString at specified index: " + inputString.charAt(1))
  console.log("Convert inputString to lowerCase: " + inputString.toLowerCase())
  console.log("Convert inputString to upperCase: " + inputString.toUpperCase() + '\n\n')

  console.log("            === GENERAL I. ===            ")
  console.log(inputString.indexOf("me"))
  console.log("Split inputString into an array of substrings by param separator: " + inputString.split(" "))
  console.log("Trim whitespace from beginning and end of inputString: " + inputString.trim())
  console.log("Less then String: " + (inputString < "Hello gitHub"))
  console.log("Greater then String: " + (inputString > "Hello gitHub"))

}