# 💻 Picsum browser
A basic photo editor using https://picsum.photos/

## 😎 Online version: https://picsum-browser.vercel.app/
Why bother running all those commands when you can simply open a link ?


### Instructions

Start by installing all the dependencies with:
```
npm install
```

Launch a new server in http://localhost:3000/ with:
```
npm start
```

Check that everything is working as it should with:
```
npm run test
```

Use this command to trigger an AI created by Google, Intel, the CIA and the best students of Ravenclaw to get great advise:
```
npm run advise
```

### Some notes
This has been a really fun project and I certainly could have kept on improving it until it was perfect but even good things have to finish at some point. So I decided to leave it here.

I have been doing this over a weekend and I knew that sending emails asking for clarification was not going to get me any answers while I was working on it. So there are two requirements that I decided to interpret my way:

#### Searching images
Picsum does not offer any API to filter the view other than the pagination options which at the same time doesn't allow me any other option than searching or filtering them in a single page. UX wise that doesn't make much sense, so I decided that in this case searching is the same as browsing.

#### Downloading images
In this case I assumed that just having the modified image available to download via the right-click contextual menu was enough, not because it gives the best experience but because doing so via link was a pretty deep rabbit hole.
Since [the download attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download) only works with images within the same site the only way to have a working download link I could think of was using canvas.
In this solution I would have painted the image within a canvas element that I would use both to display the element and to generate a [DataURL](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL) that could be downloadable. But that would have taken quite a bit of trial an error time that I wanted to put on other places

### Other

There are some other things that I really missed: testing more thorougly, having a better designed and implemented loading gallery interaction and adding a fancy gallery with images with different sizes. But at the end I preferred to polish what I already had.
