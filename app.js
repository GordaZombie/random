let animeNames = [
  'Anohana - Netflix, Crunchyroll',
  'Toradora - Netflix, Crunchyroll, AnimeFLV ',
  'Kaguya-sama: Love Is War - Crunchyroll, AnimeFLV',
  'Kobayashi-san Chi no Maid Dragon - Crunchyroll',
  'Jigoku Shoujo - AnimeFLV',
  'Higurashi no Naku Koro ni - Netflix, AnimeFLV',
  'Beastars - Netflix, AnimeFLV', 
  'Parasyte - Netflix, Crunchyroll, AnimeFLV',
  'Boku dake ga inai machi - Netflix, Crunchyroll, AnimeFLV',
  'Blend s - Crunchyroll, AnimeFLV',
  'Kamisama Hajimemashita - Crunchyroll. AnimeFLV',
  'Shigatsu wa Kimi no Uso - Crunchyroll, AnimeFLV',
  'Yuri On Ice - Crunchyroll, AnimeFLV',
  'Charlotte - Crunchyroll, AnimeFLV',
  'Aggretsuko - Netflix, AnimeFLV',
  'Mahou Tsukai no Yome - Crunchyroll, AnimeFLV',
  'The Rising of The Shield Hero - Crunchyroll, AnimeFLV',
  'Somali to Mori no Kamisama - Crunchyroll, AnimeFLV',
  'Konosuba - Crunchyroll, AnimeFLV',
  'Little Witch Academia - Netflix, AnimeFLV',
  'Mob Psycho 100 - Crunchyroll, AnimeFLV',
  'Himouto! Umaru-chan - Crunchyroll, AnimeFLV',
  'Plastic Memories - Crunchyroll, AnimeFLV'
  ]

function newAnime() {
    let randomNumber = Math.floor(Math.random() * (animeNames.length));
    document.getElementById('animeDisplay').innerHTML = animeNames[randomNumber];
}

