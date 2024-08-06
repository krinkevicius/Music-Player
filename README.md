# Music Player app

A minimal music player created with React, Typescript, Zustand and Tailwind.

### Try out the app here!

https://krinkevicius-music.netlify.app/

## Table of Contents

- [Setup](#setup)
- [Functionality](#functionality)
- [Credits](#credits)

## Setup

1. Clone this repository:

```sh
 git clone git@github.com:krinkevicius/Music-Player.git
```

2. Navigate to the project directory:

```sh
 cd Music-Player
```

3. Install dependencies:

```sh
npm install
```

## Functionality

App allows user to:

- Select one of the preloaded songs and play it;
- Skip tracks and go to the previous / next song;
- Use progress bar to jump at any point in the song;
- Control sound volume;
- Like songs and see which songs have been liked;
- Use keyboard shortcuts to play / pause a song (spacebar), go to previous / next song (left and right arrow keys);

Zustand state is stored in local storage (using Zustand's `persist` middleware) under name `music-storage`.
App has a responsive design and can be viewed in different size screens.

## Credits

Songs used in the project

- [Tokyo Cafe by TVARI](https://pixabay.com/music/beats-tvari-tokyo-cafe-159065/)
- [Summer Party by Top-Flow](https://pixabay.com/music/pop-summer-party-157615/)
- [Venice Beach by TVARI](https://pixabay.com/music/upbeat-tvari-venice-beach-159067/)
- [Ethereal Vistas by Denys Brodovskyi](https://pixabay.com/music/beats-ethereal-vistas-191254/)
- [Once In Paris by Pumpupthemind](https://pixabay.com/music/beats-once-in-paris-168895/)
- [Solitude by Luca Francini](https://pixabay.com/music/upbeat-solitude-dark-ambient-electronic-197737/)
- [Whip by prazkhanal](https://pixabay.com/music/beats-whip-110235/)
