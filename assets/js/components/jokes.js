class Jokes extends DOMHelper {
   constructor(button, audioElement) {
      super();
      DOMHelper.eventListenerHelper(button, 'click', this.fetchJokes);
      DOMHelper.eventListenerHelper(audioElement, 'ended', this.toggleButton);
   }
   // Disable / Enable Button
   toggleButton = () => {
      button.disabled = !button.disabled;
   };

   // Passing Joke to VoiceRSS API
   tellMe = jokeString => {
      console.log(jokeString);
      VoiceRSS.speech({
         key: 'a422b306914046e39feddd0c644697a3',
         src: jokeString,
         hl: 'en-us',
         v: 'Linda',
         r: 0,
         c: 'mp3',
         f: '44khz_16bit_stereo',
         ssml: false,
      });
   };

   // Get Jokes from Joke API
   fetchJokes = async () => {
      let joke = '';
      const apiUrl =
         'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
      try {
         const response = await fetch(apiUrl);
         const data = await response.json();
         data.setup ? (joke = `${data.setup} ... ${data.delivery}`) : (joke = data.joke);
         // TTS
         this.tellMe(joke);
         // Disable Button
         this.toggleButton();
      } catch (error) {
         console.log(error);
         throw new Error(error);
      }
   };
}
