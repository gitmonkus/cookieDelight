//////////////////////////////////////////////////////////////////////////////
//CLIENT SIDE GOOGLE AUTHENTICATION
//////////////////////////////////////////////////////////////////////////////

// // Enter an API key from the Google API Console:
// //   https://console.developers.google.com/apis/credentials
// const apiKey = "AIzaSyB8YL3u40KfZR0Wf93-vhtCHEzdFWxbOag";

// // Enter the API Discovery Docs that describes the APIs you want to
// // access. In this example, we are accessing the People API, so we load
// // Discovery Doc found here: https://developers.google.com/people/api/rest/
// const discoveryDocs = [
//   "https://people.googleapis.com/$discovery/rest?version=v1",
// ];

// // Enter a client ID for a web application from the Google API Console:
// //   https://console.developers.google.com/apis/credentials?project=_
// // In your API Console project, add a JavaScript origin that corresponds
// //   to the domain where you will be running the script.
// const clientId =
//   "435492259014-a0p5pe3d3mt96fg0pf90i71aajf6pm2p.apps.googleusercontent.com";

// // Enter one or more authorization scopes. Refer to the documentation for
// // the API or https://developers.google.com/people/v1/how-tos/authorizing
// // for details.
// const scopes = "profile";

// const authorizeButton = document.getElementById("authorize-button");
// const signoutButton = document.getElementById("signout-button");

// function handleClientLoad() {
//   // Load the API client and auth2 library
//   gapi.load("client:auth2", initClient);
// }

// function initClient() {
//   gapi.client
//     .init({
//       apiKey: apiKey,
//       discoveryDocs: discoveryDocs,
//       clientId: clientId,
//       scope: scopes,
//     })
//     .then(function () {
//       // Listen for sign-in state changes.
//       gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

//       // Handle the initial sign-in state.
//       updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

//       authorizeButton.onclick = handleAuthClick;
//       signoutButton.onclick = handleSignoutClick;
//     });
// }

// function updateSigninStatus(isSignedIn) {
//   if (isSignedIn) {
//     authorizeButton.style.display = "none";
//     signoutButton.style.display = "block";
//     makeApiCall();
//     favoriteIceCream();
//     initMap();
//   } else {
//     authorizeButton.style.display = "block";
//     signoutButton.style.display = "none";
//   }
// }

// function handleAuthClick(event) {
//   gapi.auth2.getAuthInstance().signIn();
// }

// function handleSignoutClick(event) {
//   gapi.auth2.getAuthInstance().signOut();
//   window.location.reload();
// }

// // Load the API and make an API call.  Display the results on the screen.
// function makeApiCall() {
//   gapi.client.people.people
//     .get({
//       resourceName: "people/me",
//       "requestMask.includeField": "person.names",
//     })
//     .then(function (resp) {
//       let p = document.createElement("p");
//       let name = resp.result.names[0].givenName;
//       p.appendChild(document.createTextNode(`Welcome back, ${name}!`));
//       document.getElementById("content").appendChild(p);
//     });
// }

//////////////////////////////////////////////////////////////////////////////
// STATIC GOOGLE MAP
//////////////////////////////////////////////////////////////////////////////

// const maps = document.getElementById("maps");

// function initMap() {
//   maps.innerHTML = `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJb0PV8jOftUwRypG5jRXPCzs&key=AIzaSyB8YL3u40KfZR0Wf93-vhtCHEzdFWxbOag"></iframe>`;
// }

// const iceCream = document.getElementById("ice-cream");
// const favResponse = document.getElementById("favorite-response");

// function favoriteIceCream() {
//   if (localStorage.getItem("fav")) {
//     favoriteResponse();
//   } else {
//     iceCream.innerHTML = `<p>What's your favorite Ice Cream?</p>
//     <input id="text-input" type="text">`;
//     const input = document.getElementById("text-input");
//     input.addEventListener("keydown", function (event) {
//       console.log(input);
//       if (event.key === "Enter") {
//         let newIcecream = input.value;
//         localStorage.setItem("fav", newIcecream);
//         favoriteResponse();
//       }
//     });
//   }
// }

function favoriteResponse() {
  iceCream.style.display = "none";
  favResponse.textContent = `Totally awesome!  ${localStorage.getItem(
    "fav"
  )} is a GREAT choice!`;
}

// localStorage.setItem(key, value)
//         localStorage.getItem(key)
//         localStorage.clear()
