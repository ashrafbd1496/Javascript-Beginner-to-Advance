//infinity loop creation using for loop instead of while loop

for (;;) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 9) {
    console.log("Winner Winner chicken dinner");
    isRunning = false;
  } else {
    console.log("You have got " + rand);
  }
}
