const sentence = "hello there from lighthouse labs\n";
time = 50
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time)
  time += 50;
}

