# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Yanzhu Huang**

Time spent: **5** hours spent in total

Link to project: https://github.com/YanzhuH/codepath-prework.git

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked.
* [x] Game buttons each light up and play a sound when clicked.
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
- clock ticking that shows the time countdown (set as 1 minute countdown)
- show the alert message if click the wrong button

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![reference link](https://i.imgur.com/jGoRTnK.gif)
Win the game with 1 mistake (within the time limit)

![reference link](https://i.imgur.com/8uUIGMf.gif)
Lose the game with 3 mistakes (refresh the game generate a new pattern)

![reference link](https://i.imgur.com/lZgghi7.gif)
Exceed the time limit

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
- Simple Count Down Timer (HTML + CSS + Javascript) https://www.tachyonstemplates.com/2018/tachyons-countdown-timer/
- Simple Countdown Timer using JavaScript
https://dev.to/code_mystery/simple-countdown-timer-using-javascript-1jab
- CSS Colors
https://www.w3schools.com/cssref/css_colors.asp
- Math.random()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
When I tried to add the optional features of the ticking clock to the program, I could not figure out how to implement this function at first. Then I searched online to find valuable resources related to time countdown with HTML, CSS, and JavaScript. After comparing several websites, I found my answer in two websites and implemented the codes to my program. But then, as I tested the game, there are several bugs related to the timer. First, it could not stop as I stop the game; second, it could not stop timing after I win/lose the game; third, it could not reset the timer after I started a new game. I looked through the code and did testings for several times, and debugged different functions. For example, I changed the game logic under the guess function to stop the game when the countdown time equals or is greater than the set deadline. After several trials, I fully implemented the clock ticking feature in my game. By debugging the challenge in creating the submission, I understand more about web development and the ways to corporate the web features, font/size features, and function implementations by switching among several languages and files. It's very unique and interesting to me that helps me to solve problems and add more interactive parts to the game by employing the knowledge I just learned from the CodePath and also the computing skills I have developed from my CS background.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
After I completed my submission, I found it is very exciting to work with at least three files with HTML, CSS, and JavaScript. So I want to know the ways of thinking in web development, especially how to switch minds among different languages, and is there any order to develop the website.
This programming experience is very different from my previous experiences because I need to use several languages and files to develop the web compared to only using Java or C or Python to program. And which part of the program should I often start with during web development? Do I often need to build a structure of the program using JavaScript? But as I followed the instructions provided by CodePath, I found that working among the three files by adding features altogether is also very efficient and easy to understand.
Besides that, I am also curious about cybersecurity, since it's very important to secure our website during the development and implementation stages. I want to know more about how to add features to make the game transfer data in a secure and efficient way.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
I will add additional features. Because I have developed a few games by using the Java language and I have a great interest in developing software. Since I just began to familiarize myself with HTML, CSS, and JavaScript, it's a little bit hard for me to implement complicated features as a beginner. But, if I have a few more hours, I will definitely walk through more tutorials and read more articles related to web development to add more exciting features to my game. For example, I want to have the function of user login with a sign-in page so that users can first set their username and password and then log in to their own personalized game. Then, users can save the game records to the account, which helps them to explore different parts of the game each time. Also, the feature of selecting difficulty levels can make the game to be more exciting. The easy mode is the game with normal speed, fewer buttons, and shorter patterns, and the difficult mode is to have faster speed, more buttons, and longer patterns. Users can select the type according to/her preference. Besides that, I want to change the background to be different pictures as various "maps" for a user to explore along with different background music. In this way, the game can have more designs. Also, I can add an NPC or an instructional sidebar to give instruction to the user about how to play the game in an interactive way.

## Interview Recording URL Link

[[My 5-minute Interview Recording](https://www.dropbox.com/s/br8sopyaj3rty0k/Yanzhu%20Huang%20Interview%20Recording.mp4?dl=0)]


## License

    Copyright [Yanzhu Huang]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
