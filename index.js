const vocabulary = [
    { word: 'hello', translation: 'привіт' },
    { word: 'goodbye', translation: 'до побачення' },
    { word: 'apple', translation: 'яблуко' },
    // Add more vocabulary words as needed
  ];
  
  function displayRandomWord() {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    const randomWord = vocabulary[randomIndex];
    console.log(`Word: ${randomWord.word} - Translation: ${randomWord.translation}`);
  }
  
  // Example usage
  displayRandomWord();
  