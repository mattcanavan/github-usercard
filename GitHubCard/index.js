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
const cardsSelector = document.querySelector('.cards')  //element where all cards will be appended

axios.get('https://api.github.com/users/mattcanavan')
.then(stuff => {
  let newCard = cardMaker(stuff);
  cardsSelector.appendChild(newCard);

  return stuff;
})
.catch(err =>{
  debugger
})


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

function cardMaker(githubObj){
  
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

  //Assigning Obj data to elements
  avatarImg.src = githubObj.avatar_url;
  userNameName.textContent = githubObj.name;
  userNameLogin.textContent = githubObj.login;
  userLocation.textContent = githubObj.location;
  userProfileLink.href = githubObj.html_url;
  userProfileLink.textContent = githubObj.html_url; //need the href and text for this link to work
  userFollowers.textContent = githubObj.followers;
  userFollowing.textContent = githubObj.following;
  userBio.textContent = githubObj.bio;

  return divContainer;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/



const tempData = {
  "login": "mattcanavan",
  "id": 24658567,
  "node_id": "MDQ6VXNlcjI0NjU4NTY3",
  "avatar_url": "https://avatars2.githubusercontent.com/u/24658567?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mattcanavan",
  "html_url": "https://github.com/mattcanavan",
  "followers_url": "https://api.github.com/users/mattcanavan/followers",
  "following_url": "https://api.github.com/users/mattcanavan/following{/other_user}",
  "gists_url": "https://api.github.com/users/mattcanavan/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mattcanavan/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mattcanavan/subscriptions",
  "organizations_url": "https://api.github.com/users/mattcanavan/orgs",
  "repos_url": "https://api.github.com/users/mattcanavan/repos",
  "events_url": "https://api.github.com/users/mattcanavan/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mattcanavan/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Matt",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "hello@mattpy.com",
  "twitter_username": null,
  "public_repos": 18,
  "public_gists": 0,
  "followers": 2,
  "following": 1,
  "created_at": "2016-12-19T19:10:00Z",
  "updated_at": "2020-09-03T18:40:32Z"
};