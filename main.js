/* create map of English words as they are in Alfie's mind. */
const englishToAlfieDictionary = {
    'goodness': 'geednutch',
    'hello': 'henlo',
    'him': 'himb',
    'hungry': 'hungy',
    'small': 'smol',
};

/* load "readline" module */
const readline = require('readline');

/* create i/o interface and store in "rl" variable */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* translates eligible English words to Alfie's language */
const textConverter = textStr => {
    // split sentence provided into array of words
    const textStrWords = textStr.split(' ');
    // for each word in split text, return the Alfie version if it's in the dictionary, otherwise return og word
    const translatedWords = textStrWords.map(word => {
        if( word in englishToAlfieDictionary ) {
            return englishToAlfieDictionary[word];
        }
        else {
            return word;
        }
    });
    // join words together to recreate sentence
    const newTextStr = translatedWords.join(' ');
    // print new text to console
    console.log(newTextStr); 
}

/* main text generator function */
const alfieSpeak = () => {
    console.log('My name is "Alfie"! This is how I talk');
    
    rl.question('What text would you like me to translate? ', (phrase) => {
        textConverter(phrase);    
        rl.close();
    });
    
    
}

alfieSpeak();

