# Udacity Frontend Web Developer Project 2

Multi-section Landing page.

## Description
Multi-section landing page featuring a dynamic menu as well as a smooth scroll effect.

## Getting Started
1. Clone this repo by using `git clone` command.
2. Edit in your favourite code editor
3. Launch in your browser

## Features
1. Dynamic Menu
2. Smooth scroll to specific section of site
3. Active state when menu item is clicked


## Technologies
1. HTML
2. CSS
3. JavaScript


## Author
Sonia


## Credits
From Udacity forum:In order to achieve that order we need to follow these steps:
we need to create a loop that will iterate over all the sections.
we need to calculate each section's position. (we do that using the getboundingclientrect() function).
we then compare the section position with a specific range. it can be -150 and 150 or -200 and 200. just to decide whether this section is actually in the viewport or not.
then we will remove the active section from all the sections just to make sure that there won't be any conflicts(another section has the active class).
then we will add the active class to the section.
finally, we need to make sure to add some styles to the active class that we added to the sections.
