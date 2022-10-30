# Contributing Guideline

You can add/remove question at src/data/[category].json

_You can literally add any character you want, however I can decide to merge it or not :trollface:_

**Schema of JSON**: See [src/data/model.ts](src/data/model.ts)
for how JSON File should look like and edit them in src/data

When adding a character, prefer japanese name to be written without spaces,
prefer the english name order to be the same as written in Japanese

## For example

香風智乃 -> Kafū Chino

ミカサ・アッカーマン -> Mikasa Ackerman

アーニャ・フォージャー -> Anya Forger

## Exception can be made for some cases

保登心愛 -> Hoto Cocoa (Instead of Hoto Kokoa)

空条徐倫 -> Jolyne Cujoh (Instead of Kūjō Jōrīn)

## For Picture

Make sure it is usable, Pictures from Wikipedia likely can't be displayed

Run locally and visit /debug to check if all picture works. (Warning: This reveals all the answer)

### Custom Image

If the picture is very hard to find, (not centered, or CORS goes brrrr),
save that image as **webp**, make sure **its size** is appropriate and put it in
`images/`, The URL **should** point to GitHub Content. (it will not appear right
now but if set correctly, will appear once pushed)

**Example**

```
https://github.com/Leomotors/anime-captcha/blob/main/images/Armin.webp?raw=true
```

### Local Testing

Start the app in development mode at visits /debug

This will display all the images **and their answer** (Spoiler Warning)

Please make sure your image is accessible from browser and not blocked by CORS or anything.
