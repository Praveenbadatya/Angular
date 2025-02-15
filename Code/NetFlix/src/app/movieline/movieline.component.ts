import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movieline',
  standalone: false,
  templateUrl: './movieline.component.html',
  styleUrl: './movieline.component.css'
})
export class MovielineComponent {
   @Input() movieTitle = '';
   @Input() imgUrl = '';
   
   teluguMovies = 
  [
    {
       imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8liosYPhKGoWvLoiQbFr40EmGT1LjIzwOg&s',
       movieTitle: 'Salaar - ceasefire'
     },
     {
      imgUrl: 'https://i.scdn.co/image/ab67616d0000b273e828d0a7cbecd7ac239c066b',
      movieTitle: 'Guntur Kaaram'
    },
     {
      imgUrl: 'https://i.redd.it/pdjsve26yy8d1.jpeg',
      movieTitle: 'Kalki - 2898AD'
    },
     {
       imgUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg',
       movieTitle: 'RRR'
     },
     {
       imgUrl: 'https://m.media-amazon.com/images/M/MV5BZjllNTdiM2QtYjQ0Ni00ZGM1LWFlYmUtNWY0YjMzYWIxOTYxXkEyXkFqcGc@._V1_.jpg',
       movieTitle: 'Pushpa - 2 The Rule'
     },
     {
       imgUrl: 'https://m.media-amazon.com/images/M/MV5BNTljNzIyYzAtNjM2Mi00ZTBmLWJlY2EtZTUyNmQyMTQ1NDQ4XkEyXkFqcGc@._V1_.jpg',
       movieTitle: 'Saripodha Sanivaram'
     },
     {
       imgUrl: 'https://m.media-amazon.com/images/M/MV5BMjEzN2ZjYjUtZTI3NC00MzMyLWJiNDAtMDBiZGEzNTBiY2RkXkEyXkFqcGc@._V1_.jpg',
       movieTitle: 'Lucky Bhaskar'
    },
    {
       imgUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/devara-part-1-2024.jpg',
       movieTitle: 'Devara Part - 1'
    },
  ]

   hindiMovies =
   [
    {
      imgUrl:'https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg',
      movieTitle:'Animal'
    },
    {
      imgUrl:'https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg',
      movieTitle:'Jawan'
    },
    {
      imgUrl:'https://upload.wikimedia.org/wikipedia/en/8/8f/Crew_2024_film_poster.jpeg',
      movieTitle:'CREW'
    },
    {
      imgUrl:'https://m.media-amazon.com/images/M/MV5BMzlmOGU5MDYtODVhZC00ZGEzLThjNmEtNTgyYjQ2ZTQwNWYzXkEyXkFqcGc@._V1_.jpg',
      movieTitle:'Fighter'
    },
    {
      imgUrl:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg',
      movieTitle:'Stree 2'
    },
    {
      imgUrl:'https://resizing.flixster.com/QIQ9ES2Hd5gmV9mFjWJzeQ-H2kU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E4MDIxNjI3LTMxMTItNDliYS1hOTU3LWFjOTg0YWZhMjhlNC5qcGc=',
      movieTitle:'Jigra'
    },
    {
      imgUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Dunki_poster.jpg/220px-Dunki_poster.jpg',
      movieTitle:'Dunki'
    },
    {
      imgUrl:'https://m.media-amazon.com/images/M/MV5BNmIwMTA0Y2ItNjVmZi00MjNhLTgwOTMtZjk3NjI1MTM5M2YyXkEyXkFqcGc@._V1_.jpg',
      movieTitle:'OMG 2'
    }
   ]

   englishMovies =
   [
    {
      imgUrl:'https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      movieTitle:'Venom - The Last Dance'
    },
    {
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNE8WcrkW7FGqg8dVATWCBqn0D2F4oO3v2Q&s',
      movieTitle:'Extraction 2'
    },
    {
      imgUrl:'https://m.media-amazon.com/images/M/MV5BODFhMWYzY2UtMzM0Zi00NDk0LTgzMmYtNWYxOGFlYTRmMTYxXkEyXkFqcGc@._V1_.jpg',
      movieTitle:'The Exorcist: Believer'
    },
    {
      imgUrl:'https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_.jpg',
      movieTitle:'Mission: mpossible Dead Reckoning'
    },
    {
      imgUrl:'https://m.media-amazon.com/images/M/MV5BZTVkZWY5MmItYjY3OS00OWY3LTg2NWEtOWE1NmQ4NGMwZGNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      movieTitle:'Transformers: Rise of the Beasts'
    },
    {
      imgUrl:'https://m.media-amazon.com/images/S/pv-target-images/02476fb253907e89602e422d3bed5ec8dbeec1d4c55bc8d8eb5c06032eb4e716.jpg',
      movieTitle:'The Meg'
    },
    {
      imgUrl:'https://image.tmdb.org/t/p/original/aAngiE34BMFDTOXpjc04Lr8zsX1.jpg',
      movieTitle:'Fast X'
    },
    {
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNJdvrwffL60IgtS3FrQNsz-LnH2RSt9Kqg&s',
      movieTitle:'Spider-Man: No Way Home'
    }
   ]

}
