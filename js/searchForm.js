document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  const location = document.getElementById('locationInput').value;
  const propertyType = document.getElementById('propertyTypeInput').value;

  // Perform filtering request based on the search criteria
  const filteredProperties = filterProperties(location, propertyType);

  // Display the filtered properties on the page
  displayProperties(filteredProperties);
});

function filterProperties(location, propertyType) {
  // Perform filtering based on the search criteria
  const filteredProperties = properties.filter(property => {
    return property.location.toLowerCase().includes(location.toLowerCase()) && 
           (propertyType === '' || property.propertyType === propertyType);
  });

  return filteredProperties;
}

function displayProperties(properties) {
  const propertyList = document.getElementById('propertyList');
  propertyList.innerHTML = '';

  properties.forEach(property => {
    const propertyItem = document.createElement('div');
    propertyItem.classList.add('col-md-4');
    propertyItem.innerHTML = `
      <div class="property-wrap ftco-animate">
        <div class="img d-flex align-items-center justify-content-center" style="background-image: url(${property.image});">
          <!-- Property image and other details -->
        </div>
      </div>
    `;

    propertyList.appendChild(propertyItem);
  });
}
