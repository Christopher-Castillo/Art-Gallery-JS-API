/**
 * @param {string} artworkId
 * Function gets art info from AIC using the artwork id included in the id
 */

async function clickedEvent(artworkId) {
    let request = new Request(
      `https://api.artic.edu/api/v1/artworks/${artworkId}?fields=id,title,image_id,artist_display,date_display`,
      {
        method: "GET",
      }
    );
  
    let result = await fetch(request);
    let response = await result.json();
    console.log(response);
  
    // Extract artwork data
    let artwork = response.data;
    let artist_display = artwork.artist_display;
    let date_display = artwork.date_display;
    let title = artwork.title
    console.log(title)
    console.log(date_display)
    console.log(artist_display);


    // Populate modal content
  document.getElementById("art-title").innerHTML = title;
  document.getElementById("date-info").innerHTML = "Date: " + date_display;
  document.getElementById("artist-info").innerHTML = "Artist: " + artist_display;

  // Display modal
  document.getElementById("modal-container").style.display = "block";
}

function closeModal() {
  // Hide modal
  document.getElementById("modal-container").style.display = "none";
}
  