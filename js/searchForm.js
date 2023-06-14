const houses = [
  {
    image: "images/work-1.jpg",
    agentImage: "images/person_1.jpg",
    agentName: "Ben Ford",
    price: "$3,500,000.00",
    title: "Blue View Home",
    location: "city A",
    beds: 1,
    baths: 2,
    sqft: "1,878 sqft"
  },
  // Add more house objects here...
];

function renderHouses(houses) {
  const propertyList = document.getElementById('propertyList');
  propertyList.innerHTML = '';

  houses.forEach(house => {
    const houseItem = document.createElement('div');
    houseItem.classList.add('col-md-4');
    houseItem.innerHTML = `
      <div class="property-wrap ftco-animate">
        <div class="img d-flex align-items-center justify-content-center" style="background-image: url(${house.image});">
          <a href="properties-single.html" class="icon d-flex align-items-center justify-content-center btn-custom">
            <span class="ion-ios-link"></span>
          </a>
          <div class="list-agent d-flex align-items-center">
            <a href="#" class="agent-info d-flex align-items-center">
              <div class="img-2 rounded-circle" style="background-image: url(${house.agentImage});"></div>
              <h3 class="mb-0 ml-2">${house.agentName}</h3>
            </a>
            <div class="tooltip-wrap d-flex">
              <a href="#" class="icon-2 d-flex align-items-center justify-content-center" data-toggle="tooltip" data-placement="top" title="Bookmark">
                <span class="ion-ios-heart"><i class="sr-only">Bookmark</i></span>
              </a>
              <a href="#" class="icon-2 d-flex align-items-center justify-content-center" data-toggle="tooltip" data-placement="top" title="Compare">
                <span class="ion-ios-eye"><i class="sr-only">Compare</i></span>
              </a>
            </div>
          </div>
        </div>
        <div class="text">
          <p class="price mb-3"><span class="orig-price">${house.price}</span></p>
          <h3 class="mb-0"><a href="properties-single.html">${house.title}</a></h3>
          <span class="location d-inline-block mb-3"><i class="ion-ios-pin mr-2"></i>${house.location}</span>
          <ul class="property_list">
            <li><span class="flaticon-bed"></span>${house.beds}</li>
            <li><span class="flaticon-bathtub"></span>${house.baths}</li>
            <li><span class="flaticon-floor-plan"></span>${house.sqft}</li>
          </ul>
        </div>
      </div>
    `;

    propertyList.appendChild(houseItem);
  });
}

function filterHouses() {
  const beds = document.getElementById('bedsInput').value;
  const baths = document.getElementById('bathsInput').value;
  const city = document.getElementById('cityInput').value;

  const filteredHouses = houses.filter(house => {
    return (beds === '' || house.beds >= parseInt(beds)) &&
           (baths === '' || house.baths >= parseInt(baths)) &&
           (city === '' || house.location.toLowerCase().includes(city.toLowerCase()));
  });

  renderHouses(filteredHouses);
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  filterHouses();
});

renderHouses(houses);
