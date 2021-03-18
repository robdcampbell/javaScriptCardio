// const str = "  782dg";

// console.log(str.split(""));
// console.log(new Set(str.split("")));

// console.log(str.indexOf(" "));
// console.log(str.lastIndexOf(" "));

/*
======================================================================
 Roman Numerals class
======================================================================
*/

/*

I	1
V	5
X	10
L	50
C	100
D	500
M	1000

*/

/*
    class RomanNumerals {
      constructor(roman) {
        this.roman = roman;
      }
      // Getter
      get toRoman() {
        return this.convertNum();
      }
      convertNum() {
        //return this.roman;
        return "MMXXIILL";
      }
      // Getter
      get fromRoman() {
        return this.convertStr();
      }
      convertStr() {
        return this.roman;
      }
    }

    const numfromRoman = new RomanNumerals(122334);
    console.log(numfromRoman.toRoman);
*/

function RomanNumerals(roman) {
  //this.roman = roman;
}

RomanNumerals.toRoman = function (num) {
  let numStr = num.toString();

  let numeral = "";
  let thousands = "";
  let hundreds = "";
  let tens = "";
  let ones = "";

  if (num >= 1000) {
    thousands;

    numeral += "M";
  }

  if (num > 500) {
    numeral += "D";
  }

  if (num > 100) {
    numeral += "C";
  }

  if (num > 50) {
    numeral += "L";
  }

  if (num > 10) {
    numeral += "X";
  }

  if (numStr.length === 1) {
    const ones = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
    };
    numeral += `${ones[numStr]}`;
  }

  return numeral;
  //return numeral;
};

RomanNumerals.fromRoman = function (roman) {
  return roman;
};

// console.log(RomanNumerals.toRoman(5));
console.log(RomanNumerals.toRoman(2));
console.log(RomanNumerals.toRoman(4));
console.log(RomanNumerals.toRoman(989));

/*
======================================================================
 Roman Numerals class
======================================================================
*/
