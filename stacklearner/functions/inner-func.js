//Inner function or nested function

function innerFunc(greet, name) {
  function getFirstName() {
    if (name) {
      return name.split(" ")[0];
    } else {
      return " ";
    }
  }
  var message = greet + " " + getFirstName();
  console.log(message);
}
innerFunc("Hello", "Ashraf Uddin");
