// async/typewriter.js

const sentence = "hello there from lighthouse labs";

const typeSentence = (sentence) => {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50; // 50ms delay between characters
  }
  setTimeout(() => {
    console.log(); // Add a newline character at the end
  }, delay);
};

typeSentence(sentence);
