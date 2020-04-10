# HomeHelper

## What is it?
The goal of this project is to fill some gaps at home for certain utilities (and brush up on some React at the same time). I was initially inspired to create this application in order to improve cross platform efficiencies. One of the things I love about the Apple ecosystem is the seamlessness of working between devices (for me, my Macbook, Iphone and Ipad). Whether it be using ICloud notes, Safari's website sharing functionality, or sending text messages (sharing links with friends), it makes my life a lot easier. However, I am not solely invested in the Apple universe. I regularly use my Windows and Linux machines which unfortunately cannot interface with these Apple devices so easily.

So I decided to create HomeHelper to bridge this gap by creating a local cloud source for notes where I can share links. A particular use case, I find a URL on my Linux machine that I want to share with a friend, but I don't want to share via email or Twitter or Facebook, etc. I want to send it by text/iMessage so I know they will see it immediately. So I open up HomeHelper on my computer, paste the URL, then open up HomeHelper on my phone and copy the link to send along. Simply put, it just serves as a centralized sticky note board to save links, ideas, reminders and lists.

Stay tuned for future developments!

## Changelog
### v0.1
Self-hosted notepad for things such as sharing links between devices, creating grocery lists, etc.

## Technical Details

### UI
#### Development
To run UI locally, navigate to UI folder and run 'npm start' (must have node/npm installed).

#### Build/Deploy
'npm run build'

'npm run deploy'

Currently I just run this application on my local network on a Raspberry PI. 'npm run deploy' copies the built files into my nginx site folder to serve up the UI.


