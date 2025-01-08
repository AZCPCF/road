const textAnalysis = (text) => {
  return [
    text.length,
    text.split("\n").length - 1,
    text.trim().split(/\s+/).length,
  ];
};

// --------------------

const findPalindromes = (text) => {
  return text.filter((item) => {
    const lowerCaseWord = item.toLowerCase();
    return lowerCaseWord == lowerCaseWord.split("").reverse().join("");
  });
};

// --------------------
's'.toLowerCase()
const wordFrequencies = (text) => {
  const wordFrequency = text.reduce((freq, word, index) => {
    if (!freq[word]) {
      freq[word] = { count: 0 };
    }
    freq[word].count++;
    freq[word].lastIndex = index;
    return freq;
  }, {});
  return Object.entries(wordFrequency).sort((a, b) =>
    b[1].count !== a[1].count
      ? b[1].lastIndex - a[1].lastIndex
      : b[1].count - a[1].count
  );
};

// --------------------

const filterText = (text) => {
  return text
    .toLowerCase()
    .match(/\b\w+\b/g)
    .filter((item) => item.length > 1);
};

// --------------------

const AnalysisWord = (text) => {
    const filteredText = filterText(text)
  const [charactersCount, linesCount, wordsCount] = textAnalysis(text);
  console.log(` - Number of lines: ${linesCount}`);
  console.log(` - Number of words: ${wordsCount}`);
  console.log(` - Number of characters: ${charactersCount}`);
  console.log(" - Word Frequencies: ");
  wordFrequencies(filteredText).forEach(([word, { count }]) => {
    console.log(`${word}: ${count}`);
  });
  console.log(" - Palindromes Words: ");
  const palindromesWords = findPalindromes(filteredText);
  console.log(palindromesWords);
};

// -----------------------

const text = `Hello world! Welcome to the challenge.
Hello again, world.
Let’s see how many lel words, level lines,yey and characters this file has.
`;
AnalysisWord(text);
