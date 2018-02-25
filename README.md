# Super Mario World Review

This is a rather detailed review of Super Mario World for the Super Nintendo. The review features 53 videos, interactive components, and lots of information on the game. It was an experiment and a way to get some more ClojureScript and [Om](https://github.com/swannodette/om) under my belt.

## cropping-app
This directory contains an Atom Shell based app (named Daisy) that manipulates Super Nintendo videos. Daisy is how I made all of the videos for the review. It's currently a very raw, very alpha app. The app is built with ClojureScript and Om.

![daisy](https://raw.githubusercontent.com/city41/mario-review/master/daisy.png)

## review-app
This directory contains the actual review. The live version is at [http://www.mattgreer.org/super-mario-world](http://www.mattgreer.org/super-mario-world). The review is also built with ClojureScript and Om, along with [Garden](https://github.com/noprompt/garden).

![review](https://raw.githubusercontent.com/city41/mario-review/master/screenshot.png)

### Getting the review running locally
You will need a proper Clojure environment including leiningen.

From the `review-app` directory:

1. `lein cljsbuild auto`
2. `lein garden auto`
3. `lein run`

After all that churns out, you should see the review at `http://localhost:3000`


### Known issues

* For phones and tablets, animated gifs are used instead of videos. They total up to more than 80 megs of gifs, so can bog down phones, even crash mobile browsers. If the review goes into gif mode, a warning dialog pops up first.
  * You can force gif mode with `index.html?forceGifs`
* Should probably CSS sprite all the images
* Some people have reported issues with the videos on certain browser/os combos
