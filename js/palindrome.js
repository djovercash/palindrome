const Palindrome = (function() {

  return class Palindrome {
    constructor(pal) {
      this.palindrome = pal
    }

    renderUserInput() {
      let div = document.createElement('div')
      div.setAttribute("id", "userWord")
      for(let i = 0; i < this.palindrome.length; i++) {
        let h1 = document.createElement('h1')
        h1.innerText = this.palindrome[i]
        h1.setAttribute("id", i)
        div.append(h1)
      }
      return div
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
