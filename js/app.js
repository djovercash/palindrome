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
      let outcome = newTest.palindromeTest()
      if (outcome) {
        App.winner()
      } else {
        App.tryagain()
      }

    }

    static winner() {
      let image = document.getElementById('eightBallImage')
      image.setAttribute("src", "images/eightBallYes.png")
      image.setAttribute("alt", "eightBallYes")
    }

    static tryagain() {
      let image = document.getElementById('eightBallImage')
      image.setAttribute("src", "images/eightBallNo.png")
      image.setAttribute("alt", "eightBallNo")
    }


  };
})();
