import { fetchLuke, fetchStarshipsCount, } from "./starWarsData.js";

const displayLuke = async () => {
  const data = await fetchLuke();
  sortSpecies(data);
};
const displayNumberOfStarships = async () => {
  const data =await fetchStarshipsCount();
  let displayHtml=
  `<div>
  <p>Number of starships on page#4 is ${data.count} </p>
  </div>
   `
document.getElementById("starshipCount").innerHTML= displayHtml
}
const sortSpecies = (data) => {
  let speciesHtml = `<ul>`;
  for (let option of data.results) {
    speciesHtml += `
        <article>
          <section class="card">
            <p>Name: ${option.name}</p>
            <p>Language: ${option.language}</p>
          </section>
        </article>
      `;
  }
  speciesHtml += `</ul>`;
  document.getElementById("app").innerHTML = speciesHtml;
};
displayLuke();
displayNumberOfStarships();
