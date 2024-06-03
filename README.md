

# GALACTIC SHOWDOWN

Galactic Showdown is a game for lovers of galactic battles. The user can select one of the sides: dark or light and has to destroy all enemy ships and none of their own. At the end of the game, the user gets a score which can be saved in the leaderboard.

The game can be accessed by this [link](https://bogdanovaiv.github.io/galactic-showdown/)

![Responsive Mockup](documentation/galactic-showdown-mockup.png)

## Game Rules
First, you have to select one of the sides. The Light Side <img src="assets/images/yoda.webp" alt = "Yoda" width="50px"> has those ships:

![The Light Side ships](documentation/light-side-ships.png)

The Dark Side <img src="assets/images/darth-vader.webp" alt = "Darth Vader" width="50px"> has those ships:

![The Dark Side ships](documentation/dark-side-ships.png)

Second, you select the map where you will play.

![Maps](documentation/maps.png)

You get 50 scores for your ships and 0 for enemy ships. Click on the ship to shoot it. When you shoot your ship the number of your ships reduces, shooting an enemy ship adds the score of destroyed enemy ships.
The total score is calculated as your ships plus destroyed enemy ships.
The maximum score is 100.

## User Stories

__First Time Visitors To The Game__

- As a new visitor, I want to quickly understand how I can play this game to decide if it is interesting for me to stay on.
- As a new visitor, I want to get intuitive navigation.
- As a new visitor, I want to easily find the scores of other users.

__Returning Or Regular Visitors__

 - As a returning or regular user, I want to quickly find my score in the leaderboard.
 
 ## Features

### Existing Features

__The page "Home"__

- The page has the feature to select one of the sides. The selected side has an orange background.

![Selecting sides](documentation/select-sides.png)

- The button "side" has a hover effect: changing color.

![Selecting sides (hover effect)](documentation/select-sides-hover.png)

- The user can select the map that is the background image of the game.

![Selecting the map](documentation/select-map.png)

- The button "map" has a hover effect: changing opacity.

![Selecting the map (hover effect)](documentation/select-map-hover.png)

- The page has a section that is used to open the page "Leaderboard" where the user can find the list of user scores.

![The button "Leaderboard"](documentation/button-leaderboard.png)

- The button "Leaderboard" has a hover effect: changing the color of the border.

![The button "Leaderboard" (hover effect)](documentation/button-leaderboard-hover.png)

__The page "Game"__

The page is the game place where the user plays. 

- It has a special cursor.

![The special cursor](assets/images/target.png)

- It has a score bar where the user can find scores and the button "Home" that redirects to the page "Home".

![The score bar](documentation/scorebar-game.png)

- The button "Home" has a hover effect: changing opacity.

![The score bar (hover effect)](documentation/scorebar-game-hover.png)

- The ships are created on the page and move down. When their position goes off the page, they disappear.

![The game](documentation/game.png)

- When the user clicks on the game place, call a sound effect. If this place contains a ship, call explosion sound effect, calculate scores and the ship disappears.

- At the end of the game, appear the message "Game over" with the user score, and the button "Save" redirects to the page "Leaderboard".

![The game over](documentation/game-over.png)

- The button "Save score" has a hover effect: changing the color of the border.

![The game over (hover effect)](documentation/game-over-hover.png)

__The page "Leaderboard"__

- The page has the button "Home" that redirects to the page "Home".

![The button "Home"](documentation/leaderboard-button-home.png)

- The button "Home" has a hover effect: changing opacity.

![The score bar (hover effect)](documentation/leaderboard-button-home-hover.png)

- The page has two conditions:
  1. Display the score. The user can find the other user scores sorted by the score.

  ![The page "Leaderboard" displays only scores](documentation/leaderboard.png)
  
  2. Display and save the score. The user can find the other user scores sorted by the score and save their score.
  
  ![The page "Leaderboard" displays and saves scores](documentation/leaderboard-save.png)

  The button "Save" has a hover effect: changing color.

  ![The button "Save" changes the color (hover effect)](documentation/leaderboard-button-save-hover.png)
  
  ***Attention: the ability to save score is in development!!!***

## Technologies Used

- HTML - There are different elements, attributes, and meta tags to structure content and optimize web pages for search engines. 
- CSS - It is used to style elements and create page layout, for animation and responsive design.
- Javascript - It is used to change HTML depending on parameters and create a game process.
- [Github](https://github.com/) - It is used to store versions.
- [ILoveImg](https://www.iloveimg.com/) - It is used to resize and shrink images.
- [Font Awesome](https://fontawesome.com/) - It is used to paste icons, improve appearance and for web-page functionality. 

## Design

## Color Scheme
  ![Color scheme](documentation/color-scheme.png)

  - The Light-blue is used for the background. It adds calmness and professionalism.
  - The Blue color is applied to a font color and other details. It creates contrast and provides good readability.
  - The Orange is used for a hover effect on some buttons. It creates an emphasized effect and provides good readability.
  - The Grey is used for the background of some buttons. It creates an emphasized effect, makes content more expressive and improves a visual user experience.

## Typography

Font YSText is used for text content as the first priority, which provides clarity and ease of perception and makes the text convenient to read. If YSText is unavailable, a browser will use Helvetica, then Arial, and finally standard Sans Serif to provide the capability of a wide range of devices and OS.

## Testing

Please refer to the [TESTING.md](TESTING.md) file for all test-related documentation.

## Deployment

 - The site was deployed to GitHub pages. The steps to deploy are as follows: 
 - In the GitHub repository, navigate to the Settings tab 
 - From the source section drop-down menu, select the Main branch
 - Once the Main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found [here](https://bogdanovaiv.github.io/galactic-showdown/)

## Local Deployment

To deploy the project locally, clone the repository. You can do this by running the following command in your terminal:

`git clone https://github.com/BogdanovaIV/galactic-showdown.git`

## Future Improvements

 - Save the user score.
 - Add the ship level and change the number of shoots to destroy a ship depending on this level.
 - Add ships which can move horizontally.

## Credits 

### Content 

- The idea of ​​the game is taken from the movie Star Wars.
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/).

### Media

- The photos used on all pages are from [This Open Source site](https://pxhere.com).

- The audio used on all pages is from [This Open Source site](https://freesound.org/).

### Acknowledgments

- [Juliia Konovalova](https://github.com/IuliiaKonovalova/) was a great mentor who helped me to reveal my abilities and gave valuable advice.
- [The Code Institute team](https://codeinstitute.net/) supported me and provided all the information that I needed.
- [GitHub](https://github.com/) provides free access to a versioning system.
- [ILoveImg](https://www.iloveimg.com/) provided me with a free service to compress images.
- [Remove](https://www.remove.bg/) provided me with a free service to remove the background.
- [Cut Audio](https://mp3cut.net/) provided me with a free service to cut audio.
- [Compress Audio](https://www.freeconvert.com/mp3-compressor) provided me with a free service to compress audio.
