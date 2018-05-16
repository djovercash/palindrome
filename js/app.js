const App = (function() {
  return class App {
    static init() {
      let palButton = document.getElementById('palButton')
      palButton.addEventListener("click", function(event) {
        event.preventDefault();
        let potentialPalindrome = document.getElementById('userPal').value
        App.getUserInput(potentialPalindrome)
      });
    }

    static getUserInput(userPalindrome) {
      let newTest = new Palindrome(userPalindrome)
      let testCont = document.getElementById('palindromeContainer')
      testCont.innerHTML = ''
      testCont.append(newTest.renderUserInput())
      let outcome = newTest.palindromeTest()
      if (outcome) {
        App.winner()
      } else {
        App.tryagain()
      }

    }

    static winner() {
      console.log("WINNER")
    }

    static tryagain() {
      console.log("TRY AGAIN")
    }


  };
})();
