# Castipaldioke

## What is it?

We just bought a karaoke machine, and the catalog is pretty... old school.

Me being me, of course I decided to make a web app with a searchable list to 
help the folks look for the songs they want to sing.

I got the song spreadsheet from the suppliers, wrote a script to make it a 
JSON file, and the rest is history.

## How to use it?

Not sure you'd want to unless you specifically have the RAF Karaoke machine, 
and this one is specific to us. However, you can [check the live thing out](castipaldioke.netlify.app) or 
locally install and run it.

```js
nvm use
npm install
npm run start
```

## Technical reasoning

__Why did I choose React and Gatsby?__ You might ask.

I thought long and hard for about 2 seconds on how to serve my maybe 3 or 4 
concurrent users once a month, and I decided to build it with something I 
use pretty much every day so that I could spin it up in an hour.

I also use a virtualization library in this so I don't kill anyone's phone 
by rendering over 10,000 songs at once, but they still get to have an 
infinite scrolling list of songs.

## What are the best practices you're putting in place?

