There are many ways you could solve this challenge, but I did it using 4 functions:

- renderAvatars() - to, well, render the avatars.

- renderAvatarHighlight() - to render and remove the red/white borders from avatars.

- renderImage() - to render each image from each friends' feature array

- handleTimer() - this was the most complex. I used setInterval and clearInterval to control when images/avatar highlights were rendered and unrendered.

Useful JS

- getElementsByClassName will give you an HTMLCollection which is similar to an array. Finding a way to loop/iterate over it might well be useful!

- You will likely need to use element.classList.add() and element.classList.remove()

/*
The cool people of Lapland are bored of traditional social media and have decided to build their own app called Northagram...and they need your help!

This is how the app should work:
- It displays circular avatars of the friends who have uploaded pictures lately. These avatars have a white border.
- Underneath, it cycles through the friends' pictures displaying each for 1.5 seconds. (There's an animated snowman loading state before pictures load.)
- While a friend's pictures are being displayed, that friend's avatar gets a red border.
- This red border reverts to white when their pictures have finished being displayed.
- When all of the images have been displayed, the user should see a message "Refresh to load latest images". All avatars should have a white border at this point.

Stretch Goals for dedicated Social Media Engineers

- Add captions to the images.
- Refactor your code to use generators!
- Grey out the avatar after that friend's pictures have been displayed.
- Make it so clicking on an image pauses the timer.
- Add left and right arrow overlays to the image so users can scroll back and forth.
*/
