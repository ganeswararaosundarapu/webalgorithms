/**
 Given above string please write algorithm in JavaScript for the following:(The code should output the answers to the console)

Given a string, find the first non-repeating character in it. For example, if the input string is “GeeksforGeeks”, then output should be ‘f’ and if input string is “GeeksQuiz”, then output should be ‘G’.

1.Please provide the first and last repeating character in the string
Console Log should be:
First Repeating Character: ”h”
Last Repeating Character: ”g”

2.Please provide the first and last non-repeating letter in the string
Console Log should be:
First Non-repeating: “W”
Last Non-repeating: “s”

3.Provide the most repeated character in the string
Console Log should be:
Most Repeated: “g” 
**/

class RepeatCharactersDetector {
  constructor(str) {
    this.repeatRegistry = {};
    this.nonRepeatingChars = [];
    this.repeatingChars = [];
    this.mostRepChar = "";
    this.mostRepCount = 0;
    this.inputStr = str;

    this.init();
  }

  init() {
    let result = this.makeRepeatDictonary(this.inputStr);
    console.log("Repeat Character Registry >>", result);
    this.makeRepeatingData(result);
    this.consoleOuput();
  }
  /**
   * Example  mynameganesh
   * m -> 2
   * y-1
   * n -> 2 ..etc
   */
  makeRepeatDictonary(str) {
    str = str.split("");
    // Iterate through the string elements
    for (let x = 0; x < str.length; x++) {
      this.repeatRegistry[str[x]] = (this.repeatRegistry[str[x]] || 0) + 1;
    }

    return this.repeatRegistry;
  }

  makeRepeatingData(dataObj) {
    for (let letter in dataObj) {
      if (this.mostRepCount < Math.max(this.mostRepCount, dataObj[letter])) {
        this.mostRepCount = Math.max(this.mostRepCount, dataObj[letter]);
        this.mostRepChar = letter;
      }

      if (dataObj[letter] === 1) {
        this.nonRepeatingChars.push(letter);
      } else {
        this.repeatingChars.push(letter);
      }
    }
  }

  consoleOuput() {
    console.log(`
      Please provide the first and last repeating character in the string 
Console Log should be: 
First Repeating Character: ${this.repeatingChars[0]}
Last Repeating Character:  ${
      this.repeatingChars[this.repeatingChars.length - 1]
    }
    `);

    console.log(`
      Please provide the first and last non-repeating letter in the string
Console Log should be:
First Non-repeating: ${this.nonRepeatingChars[0]}
Last Non-repeating: ${this.nonRepeatingChars[this.nonRepeatingChars.length - 1]}
    `);

    console.log(`
      Provide the most repeated character in the string
Console Log should be:
Most Repeated: ${this.mostRepChar}
    `);
  }
}

new RepeatCharactersDetector("mynameganesh");
