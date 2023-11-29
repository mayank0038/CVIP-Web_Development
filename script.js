// api key from TMDB website
const api = "api_key=1eff1b0cc14d2899c120c509bed1bdc8";

// base url --> go to Documentation --> click on Application on left pane
const base_url = "https://api.themoviedb.org/3";

// thumbnails for movies --> go to Documentation --> click on Image on left pane --> then Basics
const img_url = "https://image.tmdb.org/t/p/w300";
// we can change from 500 --> 300 or any other number. it's just the size of thumbnail of your movie.

// movies url
const banner_url = "https://image.tmdb.org/t/p/original";

// requesting for movies
const requests = {
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchAdventureMovies: `${base_url}/discover/movie?${api}&with_genres=12`,
  fetchMusicMovies: `${base_url}/discover/movie?${api}&with_genres=10402`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchThrillerMovies: `${base_url}/discover/movie?${api}&with_genres=53`,
  fetchScienceFictionMovies: `${base_url}/discover/movie?${api}&with_genres=10752`,
};

// creating a truncate funtion so that description of movie get short.

function truncate(str, n) {
  // here str --> description of the movie AND n --> no of words.
  return str?.length > n ? str.substr(0, n - 1) + "......" : str;
  // if condition        ? if true this would return       : if false this would return

  // here we use turnary operator --> jese 100 words tak ka description chahiye to agar string_len > 100 then divides into 99 words and uske aage ...... add ho jayega.
}

// data for banner

fetch(requests.fetchNetflixOriginals)
  .then((res) => res.json()) // this is here because our data fetched in jason format.

  // jo bhi data json format mein aaya hai use handle karenge.

  .then((data) => {
    // with every refresh, the movie will change.
    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];
    // generates random movie every time.

    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner__title");
    var banner__desc = document.getElementById("banner__description");

    banner.style.backgroundImage =
      "url(" + banner_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;
  });

// movies row for NETFLIX ORIGINALS

fetch(requests.fetchNetflixOriginals)
  .then((res) => res.json()) // res --> response

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "NETFLIX ORIGINALS";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = " row__posterLarge";
      var s = movie.name.replace(/\s+/g, "");

      poster.id = s;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

// movies row for Trending MOVIES

fetch(requests.fetchTrending)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    // row.classList.add("netflixrow");
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "TRENDING";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = " row__posterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

// movies row for Action MOVIES

fetch(requests.fetchActionMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    // row.classList.add("netflixrow");
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "ACTION MOVIES";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = " row__posterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

// movies row for COMEDY MOVIES

fetch(requests.fetchComedyMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    // row.classList.add("netflixrow");
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "COMEDY MOVIES";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = " row__posterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

// movies row for ADVENTUR MOVIES

fetch(requests.fetchAdventureMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    // row.classList.add("netflixrow");
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "ADVENTURE MOVIES";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = " row__posterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

// movies row for MUSIC MOVIES

fetch(requests.fetchMusicMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    // row.classList.add("netflixrow");
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "MUSIC MOVIES";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = " row__posterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

// movies row for HORROR MOVIES

fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    // row.classList.add("netflixrow");
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "HORROR MOVIES";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = " row__posterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

// movies row for THRILLER MOVIES

fetch(requests.fetchThrillerMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    // row.classList.add("netflixrow");
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "THRILLER MOVIES";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = " row__posterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

// movies row for SCIENCE FICTION MOVIES

fetch(requests.fetchScienceFictionMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    // row.classList.add("netflixrow");
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "SCI-FI MOVIES";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = " row__posterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });
