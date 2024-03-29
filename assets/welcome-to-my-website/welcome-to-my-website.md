# Adventures in Angular
Welcome to the new and improved version of my website! I recently delved into learning Angular and decided to rebuild my personal website using it. My aim was to incorporate several features, including a space to showcase any writing or projects I produce, cheap hosting (preferably free), and the flexibility to build it using Angular.

I researched a lot of options. I considered using AWS to host DB and Server for my blog posts but it looked like it could get expensive in the future. Eventually, I stumbled upon a brilliant solution demonstrated by a clever website (https://github.com/nexxeln/nexxel.dev). This website hosts blog posts directly on the client side in markdown. I had found my solution.

The logic behind this approach is similar to retrieving content from a server-side source. Instead of fetching JSON data from an endpoint, the content is stored in a folder on the client side. I have concerns about performance, particularly with larger datasets, but the size of the data I'll be using is small enough where performance differences will be neglegable.

I thought this approach was clever, and I learned lots about Angular. 
