const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

function Song(source, title, artist, description, id) {
    this.source = source;
    this.title = title;
    this.artist = artist
    this.description = description;
    this.id = id;
  }
  
  const songs = [
    new Song('/DisGeneration.mp3', 'Dis Generation', 'A Tribe Called Quest', 'A Tribe Called Quests comeback album. This was the hit single off their latest album', 0),
    new Song('/bigshot.mp3', 'Big Shot', 'Kendrick Lamar', 'The soundtrack for the 2018 American superhero film Black Panther, based on the Marvel Comics character of the same name and produced by Marvel Studios, consists of an original score composed by Ludwig Göransson and original songs produced by Kendrick Lamar.', 1),
    new Song('/thelessiknowthebetter.mp3', 'The less I know the better', 'Tame Impala', 'The Less I Know the Better is a song by the Australian rock band Tame Impala, released on 29 November 2015 as the third and final single from the groups third studio album Currents. The songs accompanying music video takes place in a high school where a basketball player suffers a broken heart.', 2),
    new Song('/suede.mp3', 'Suede', 'NXWorries', 'Suede" is a song by Los Angeles-based duo NxWorries, released as the lead single of their debut EP, Link Up & Suede. The song premiered on February 10, 2015, on Stones Throw Records SoundCloud page and was made available for purchase at the Stones Throw Store and iTunes Store along with the EPs release on December 4, 2015', 3),
    new Song('/21Questions.mp3', '21 Questions', '50 Cent', 'A song recorded by American rapper 50 Cent featuring American singer Nate Dogg. The song was written by Nick Corrado for 50 Cents commercial debut studio album, Get Rich or Die Tryin. The song was mixed by Dr. Dre and charted at number one on the US Billboard Hot 100 chart.', 4),
    new Song('/TheyReminisce.mp3', 'They Reminisce Over You', 'Pete Rock & CL Smooth', ' Inspired by the death of their close friend Troy Dixon (better known as "Trouble" T. Roy of Heavy D & the Boyz) in 1990. The song was the lead single off their debut album, Mecca and the Soul Brother, released in 1992, and later became a staple of classic early 1990s hip hop. The song peaked at #58 on the Billboard Hot 100 and #1 on the Hot Rap Tracks chart.', 5),
    
  ]

app.get('/', (req, res) => {
    res.json(songs)
})


app.listen(8080)