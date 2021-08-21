const form = document.querySelector('#searchForm');
const imgContainer = document.querySelector('.row');

// interact with form to get data
form.addEventListener('submit', (e) => {
  let titles = [];
  e.preventDefault();
  const searchKeyword = form.elements.q.value;
  getTvShowData(searchKeyword).then((data) => {
    displayData(data);
  });
  form.elements.q.value = '';
});

// get data from tvmaze api function
const getTvShowData = async (key) => {
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${key}`);
  return res.data;
};

// display archived data in to web
const displayData = (data) => {
  const displayResults = data
    .map((item) => {
      return `
            <div class="card col-sm-6" style="width:25%;">
            <img src=${
              item.show.image === null
                ? 'http://placehold.jp/400x400.png'
                : item.show.image.medium
            }
            class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.show.name}</h5>
              <p class="card-text">${item.show.summary}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Language: ${item.show.language}</li>
              <li class="list-group-item">Status: ${item.show.status}</li>
              <li class="list-group-item">Genres:
        ${item.show.genres.map((genre) => {
          return ` ${genre}`;
        })}  </li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
`;
    })
    .join('');
  imgContainer.innerHTML = displayResults;
};
