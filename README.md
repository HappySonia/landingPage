# landingPage
https://happysonia.github.io/landingPage/

Multi-section Landing page.

## Description
Multi-section landing page featuring a dynamic menu as well as a smooth scroll effect.

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


## Strategy
steps:
create a loop that will iterate over all the sections.
calculate each section's position. (I do that using the getboundingclientrect() function).
I then compare the section position with a specific range. it can be -150 and 150 or -200 and 200. just to decide whether this section is actually in the viewport or not.
then I will remove the active section from all the sections just to make sure that there won't be any conflicts(another section has the active class).
then I will add the active class to the section.
finally, I need to make sure to add some styles to the active class that we added to the sections.
