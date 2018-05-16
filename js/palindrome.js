const Palindrome = (function() {

  return class Palindrome {
    constructor(pal) {
      this.palindrome = pal
    }

    palindromeTest() {
      let testObj = {}
      let word = this.palindrome.replace(/[^\w]|_/g, "").toLowerCase()
      for (let i = 0; i < word.length; i++) {
        let letter = word[i]
        if (testObj[letter]) {
          delete testObj[letter]
        } else {
          testObj[letter] = 1
        }
      }
      if (Object.keys(testObj).length <= 1) {
        return true
      } else {
        return false
      }
    }

  }
})();
