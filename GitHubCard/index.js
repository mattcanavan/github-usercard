import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/mattcanavan')
// .then(stuff => {
//   console.log(stuff)
// })
// .catch(err =>{
//   debugger
// })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function CardMaker(githubObj){
  
  //Creating all the elements
  const divContainer = document.createElement('div'),   
        avatarImg = document.createElement('img'),
        cardInfoDiv = document.createElement('div'),
        userNameName = document.createElement('h3'),
        userNameLogin = document.createElement('p'),
        userLocation = document.createElement('p'),
        userProfile = document.createElement('p'),
        userProfileLink = document.createElement('a'),
        userFollowers = document.createElement('p'),
        userFollowing = document.createElement('p'),
        userBio = document.createElement('p');

  //Adding class names
  divContainer.classList.add('card');
  cardInfoDiv.classList.add('card-info');
  userNameName.classList.add('name');
  userNameLogin.classList.add('username');

  //Nesting elements to match provided markup
  divContainer.appendChild(avatarImg);
  divContainer.appendChild(cardInfoDiv);

  cardInfoDiv.appendChild(userNameName);
  cardInfoDiv.appendChild(userNameLogin);
  cardInfoDiv.appendChild(userLocation);
  cardInfoDiv.appendChild(userProfile);
  cardInfoDiv.appendChild(userFollowers);
  cardInfoDiv.appendChild(userFollowing);
  cardInfoDiv.appendChild(userBio);

  userProfile.appendChild(userProfileLink);

  //forEach object, assign data in the following way




}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
