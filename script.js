let isPlaying = false;
let currentSongIndex = 0;
const audioElement = document.getElementById('myAudio');
const seekBar = document.querySelector('.seek-bar');
const coverArtElement = document.getElementById('coverArt');
const songQueue = [
  //lover:
  { src: "01 I Forgot That You Existed.mp3", cover: 'lover.jpg', title: "I Forgot That You Existed", album:'Lover', albumcode:'loveralbum' },
  { src: "02 Cruel Summer.mp3", cover: 'lover.jpg', title: "Cruel Summer", album:'Lover', albumcode:'loveralbum' },
  { src: "03 Lover.mp3", cover: 'lover.jpg', title: "Lover", album:'Lover', albumcode:'loveralbum' },
  { src: "04 The Man.mp3", cover: 'lover.jpg', title: "The Man", album:'Lover', albumcode:'loveralbum' },
  { src: "05 The Archer.mp3", cover: 'lover.jpg', title: "The Archer", album:'Lover', albumcode:'loveralbum' },
  { src: "06 I Think He Knows.mp3", cover: 'lover.jpg', title: "I Think He Knows", album:'Lover', albumcode:'loveralbum' },
  { src: "07 Miss Americana & The Heartbreak P.mp3", cover: 'lover.jpg', title: "Miss Americana & The Heartbreak P", album:'Lover', albumcode:'loveralbum' },
  { src: "08 Paper Rings.mp3", cover: 'lover.jpg', title: "Paper Rings", album:'Lover', albumcode:'loveralbum' },
  { src: "09 Cornelia Street.mp3", cover: 'lover.jpg', title: "Cornelia Street", album:'Lover', albumcode:'loveralbum' },
  { src: "10 Death By A Thousand Cuts.mp3", cover: 'lover.jpg', title: "Death By A Thousand Cuts", album:'Lover', albumcode:'loveralbum' },
  { src: "11 London Boy.mp3", cover: 'lover.jpg', title: "London Boy", album:'Lover', albumcode:'loveralbum' },
  { src: "12 Soon You'll Get Better (feat. Dix.mp3", cover: 'lover.jpg', title: "Soon You'll Get Better (feat. Dix", album:'Lover', albumcode:'loveralbum' },
  { src: "13 False God.mp3", cover: 'lover.jpg', title: "False God", album:'Lover', albumcode:'loveralbum' },
  { src: "14 You Need To Calm Down.mp3", cover: 'lover.jpg', title: "You Need To Calm Down", album:'Lover', albumcode:'loveralbum' },
  { src: "15 Afterglow.mp3", cover: 'lover.jpg', title: "Afterglow", album:'Lover', albumcode:'loveralbum' },
  { src: "16 ME! (feat. Brendon Urie of Panic!.mp3", cover: 'lover.jpg', title: "ME! (feat. Brendon Urie of Panic!", album:'Lover', albumcode:'loveralbum' },
  { src: "17 It's Nice To Have A Friend.mp3", cover: 'lover.jpg', title: "It's Nice To Have A Friend", album:'Lover', albumcode:'loveralbum' },
  { src: "18 Daylight.mp3", cover: 'lover.jpg', title: "Daylight", album:'Lover', albumcode:'loveralbum' },

  //1989TV:
  { src: "01 Welcome To New York.mp3", cover: '1989TV.webp', title: "Welcome To New York (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "02 Blank Space.mp3", cover: '1989TV.webp', title: "Blank Space (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "03 Style.mp3", cover: '1989TV.webp', title: "Style (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "04 Out Of The Woods.mp3", cover: '1989TV.webp', title: "Out Of The Woods (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "05 All You Had To Do Was Stay.mp3", cover: '1989TV.webp', title: "All You Had To Do Was Stay (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "06 Shake It Off.mp3", cover: '1989TV.webp', title: "Shake It Off (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "07 I Wish You Would.mp3", cover: '1989TV.webp', title: "I Wish You Would (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "08 Bad Blood.mp3", cover: '1989TV.webp', title: "Bad Blood (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "09 Wildest Dreams.mp3", cover: '1989TV.webp', title: "Wildest Dreams (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "10 How You Get The Girl.mp3", cover: '1989TV.webp', title: "How You Get The Girl (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "11 This Love.mp3", cover: '1989TV.webp', title: "This Love (Taylor's Version)", album:"1989 (Taylor's Version)"},
  { src: "12 I Know Places.mp3", cover: '1989TV.webp', title: "I Know Places (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "13 Clean.mp3", cover: '1989TV.webp', title: "Clean (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "14 Wonderland.mp3", cover: '1989TV.webp', title: "Wonderland (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "15 You Are In Love.mp3", cover: '1989TV.webp', title: "You Are In Love (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "16 New Romantics.mp3", cover: '1989TV.webp', title: "New Romantics (Taylor's Version)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "17 Slut - Taylors Version From The Vault.mp3", cover: '1989TV.webp', title: '"Slut!" (Taylors Version) (From The Vault)', album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "18 Say Dont Go.mp3", cover: '1989TV.webp', title: "Say Dont Go (Taylor's Version) (From The Vault)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "19 Now That We Dont Talk.mp3", cover: '1989TV.webp', title: "Now That We Dont Talk (Taylor's Version) (From The Vault)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "20 Suburban Legends.mp3", cover: '1989TV.webp', title: "Suburban Legends (Taylor's Version) (From The Vault)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "21 Is It Over Now.mp3", cover: '1989TV.webp', title: "Is It Over Now (Taylor's Version) (From The Vault)", album:"1989 (Taylor's Version)", albumcode:'album1989' },
  { src: "22 Sweeter Than Fiction.mp3", cover: '1989TV.webp', title: "Sweeter Than Fiction (Taylor's Version) (From The Vault)", album:"1989 (Taylor's Version)", albumcode:'album1989' },


  //midnights:
  { src: "lavender haze.mp3", cover: 'midnights.jpg', title: "Lavender Haze", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "maroon.mp3", cover: 'midnights.jpg', title: "Maroon", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "anti hero.mp3", cover: 'midnights.jpg', title: "Anti Hero", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "snow on the beach.mp3", cover: 'midnights.jpg', title: "Snow On The Beach (feat. Lana Del Rey)", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "youre on your own kid.mp3", cover: 'midnights.jpg', title: "You're On Your Own Kid", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "midnight rain.mp3", cover: 'midnights.jpg', title: "Midnight Rain", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "question_.mp3", cover: 'midnights.jpg', title: "Question...?", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "vigilante shit.mp3", cover: 'midnights.jpg', title: "Vigilante Shit", album:"Midnights (The Til Dawn Edition)" ,albumcode:'albummidnights'},
  { src: "bejeweled.mp3", cover: 'midnights.jpg', title: "Bejeweled", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights'},
  { src: "labyrinth.mp3", cover: 'midnights.jpg', title: "Labyrinth", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "karma.mp3", cover: 'midnights.jpg', title: "Karma", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "sweet nothing.mp3", cover: 'midnights.jpg', title: "Sweet Nothing", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "mastermind.mp3", cover: 'midnights.jpg', title: "Mastermind", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "the great war.mp3", cover: 'midnights.jpg', title: "The Great War", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "bigger than the whole sky.mp3", cover: 'midnights.jpg', title: "Bigger Than The Whole Sky", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "paris.mp3", cover: 'midnights.jpg', title: "Paris", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "high infidelity.mp3", cover: 'midnights.jpg', title: "High Infidelity", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "glitch.mp3", cover: 'midnights.jpg', title: "Glitch", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "wouldve couldve shouldve.mp3", cover: 'midnights.jpg', title: "Would've, Could've, Should've", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "dear reader.mp3", cover: 'midnights.jpg', title: "Dear Reader", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "hits different.mp3", cover: 'midnights.jpg', title: "Hits Different", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "snow on the beach more lana del rey.mp3", cover: 'midnights.jpg', title: "Snow On The Beach (feat. More Lana Del Rey)", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  { src: "karma ice spice.mp3", cover: 'midnights.jpg', title: "Karma (feat. Ice Spice)", album:"Midnights (The Til Dawn Edition)",albumcode:'albummidnights' },
  
  //reputation:
  { src: "01-taylor_swift-ready_for_it.mp3", cover: 'reputation.jpg', title: "...Ready For It?", album:"Reputation", albumcode:'albumreputation' },
  { src: "02-taylor_swift-end_game_(feat_ed_sheeran_and_future).mp3", cover: 'reputation.jpg', title: "End Game (feat. Ed Sheeran and Future)", album:"Reputation", albumcode:'albumreputation' },
  { src: "03-taylor_swift-i_did_something_bad.mp3", cover: 'reputation.jpg', title: "I Did Something Bad", album:"Reputation", albumcode:'albumreputation' },
  { src: "04-taylor_swift-dont_blame_me.mp3", cover: 'reputation.jpg', title: "Dont Blame Me", album:"Reputation", albumcode:'albumreputation' },
  { src: "05-taylor_swift-delicate.mp3", cover: 'reputation.jpg', title: "Delicate", album:"Reputation", albumcode:'albumreputation' },
  { src: "06-taylor_swift-look_what_you_made_me_do.mp3", cover: 'reputation.jpg', title: "Look What You Made Me Do", album:"Reputation", albumcode:'albumreputation' },
  { src: "07-taylor_swift-so_it_goes.mp3", cover: 'reputation.jpg', title: "So It Goes", album:"Reputation", albumcode:'albumreputation' },
  { src: "08-taylor_swift-gorgeous.mp3", cover: 'reputation.jpg', title: "Gorgeous", album:"Reputation", albumcode:'albumreputation' },
  { src: "09-taylor_swift-getaway_car.mp3", cover: 'reputation.jpg', title: "Getaway Car", album:"Reputation", albumcode:'albumreputation' },
  { src: "10-taylor_swift-king_of_my_heart.mp3", cover: 'reputation.jpg', title: "King of My Heart", album:"Reputation", albumcode:'albumreputation' },
  { src: "11-taylor_swift-dancing_with_our_hands_tied.mp3", cover: 'reputation.jpg', title: "Dancing With Our Hands Tied", album:"Reputation", albumcode:'albumreputation' },
  { src: "12-taylor_swift-dress.mp3", cover: 'reputation.jpg', title: "Dress", album:"Reputation", albumcode:'albumreputation' },
  { src: "13-taylor_swift-this_is_why_we_cant_have_nice_things.mp3", cover: 'reputation.jpg', title: "This Is Why We Cant Have Nice Things", album:"Reputation", albumcode:'albumreputation' },
  { src: "14-taylor_swift-call_it_what_you_want.mp3", cover: 'reputation.jpg', title: "Call It What You Want", album:"Reputation", albumcode:'albumreputation' },
  { src: "15-taylor_swift-new_years_day.mp3", cover: 'reputation.jpg', title: "New Years Day", album:"Reputation", albumcode:'albumreputation' },

] 
const playPauseButton = document.querySelector('.play-pause');

function togglePlayPause() {
  isPlaying = !isPlaying;

  if (isPlaying) {
    playPauseButton.textContent = 'Pause';
    audioElement.play();
  } else{
    playPauseButton.textContent = 'Play';
    audioElement.pause();
  }
}



audioElement.addEventListener('ended', playNext);

let isShuffleMode = false;
let shuffledQueue = [];

function toggleShuffleMode() {
  isShuffleMode = !isShuffleMode;

  if (isShuffleMode) {
    shuffledQueue = shuffleArray([...songQueue]);
    document.querySelector('.shuffle').textContent = 'Shuffle: On';
  } else {
    shuffledQueue = [];
    document.querySelector('.shuffle').textContent = 'Shuffle: Off';
  }

  updateQueue();
}

toggleShuffleMode();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function playNext() {
  if (isShuffleMode) {
    if (shuffledQueue.length === 0) {
      shuffledQueue = shuffleArray([...songQueue]);
    }
    currentSongIndex = songQueue.indexOf(shuffledQueue.shift());
  } else {
    currentSongIndex = (currentSongIndex + 1) % songQueue.length;
  }

  // Update play/pause button text based on playback state
  const playPauseButton = document.querySelector('.play-pause');

  // Check if the audio is paused, update button text accordingly
  if (audioElement.paused) {
    playPauseButton.textContent = 'Play';
  } else {
    playPauseButton.textContent = 'Pause';
  }

  playCurrentSong();
}

function playPrevious() {
  currentSongIndex = (currentSongIndex - 1 + songQueue.length) % songQueue.length;
  playCurrentSong();
}

const currentSongTitleElement = document.getElementById('currentSongTitle');
const currentSongAlbumElement = document.getElementById('currentAlbum')

function playCurrentSong() {
  const currentSong = songQueue[currentSongIndex];
  audioElement.src = currentSong.src;
  coverArtElement.src = currentSong.cover;
  currentSongTitleElement.textContent = currentSong.title; // Display the title
  currentSongAlbumElement.textContent = currentSong.album; //display the album name
  audioElement.play();
  updateQueue();

  setMediaPlayerBackgroundColor(currentSong.albumcode); //change color according to the playing album
  setCoverArtShadowColor(currentSong.albumcode);
}

function setMediaPlayerBackgroundColor(albumcode) {
  const mediaPlayer = document.querySelector('.media-player');
    
    // Remove existing album-specific classes
    mediaPlayer.classList.remove('loveralbum', 'album1989', 'albummidnights', 'albumreputation');

    // Add a class based on the playing album
    mediaPlayer.classList.add(albumcode.toLowerCase()); // Assuming album names are suitable for class names

}

function updateQueue() {
  const songQueueElement = document.getElementById('songQueue');
  songQueueElement.innerHTML = '';

  const displayQueue = isShuffleMode ? shuffledQueue : songQueue;

  displayQueue.forEach((song, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${song.title}`;
    if (isShuffleMode && currentSongIndex === songQueue.indexOf(song)) {
      listItem.classList.add('current-song-shuffle');
    } else if (!isShuffleMode && currentSongIndex === index) {
      listItem.classList.add('current-song');
    }
    songQueueElement.appendChild(listItem);
  });
}


function handleQueueItemClick(event) {
  console.log('Queue item clicked!');
  // ... (rest of the function)
}



// ... (rest of the code)



// ... (rest of the code)


function updateSeekBar(value) {
  const currentTimeElement = document.querySelector('.current-time');
  const duration = audioElement.duration;
  const currentTime = (value / 100) * duration;

  audioElement.currentTime = currentTime;
  currentTimeElement.textContent = formatTime(currentTime);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

audioElement.addEventListener('timeupdate', () => {
  const currentTimeElement = document.querySelector('.current-time');
  const duration = audioElement.duration;
  const currentTime = audioElement.currentTime;



  seekBar.value = (currentTime / duration) * 100;
  currentTimeElement.textContent = formatTime(currentTime);
});

// ... (previous JavaScript code)

const totalTimeElement = document.querySelector('.total-time');

audioElement.addEventListener('loadedmetadata', updateTotalTime);

function updateTotalTime() {
  const totalMinutes = Math.floor(audioElement.duration / 60);
  const totalSeconds = Math.floor(audioElement.duration % 60);
  totalTimeElement.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
}

// ... (rest of the JavaScript code)


// Optional: Auto-play the first song on page load
window.addEventListener('load', () => {
  playCurrentSong();
});

