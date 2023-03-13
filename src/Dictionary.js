import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    if (keyword) {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiUrl).then(handleResponse);

      let pexelApiKey =
        "0Q447Dxkherb6A5ELHIZOcyQ5Ljlxm4KRkjSCAd4bCJ4wYIARo6yUEgh";

      let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
      axios
        .get(pexelApiUrl, {
          headers: { Authorization: `${pexelApiKey}` },
        })
        .then(handlePexelResponse);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeyword}
              placeholder="Search for a word"
            />
          </form>
          <div className="hint">
            suggested words: sunrise, house, planet etc ...
          </div>
        </section>
        <Results res={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
