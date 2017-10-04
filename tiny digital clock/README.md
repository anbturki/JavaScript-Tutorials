# Tiny digital clock using JavaScript

In this tutorial, I will show you how to build a digital clock using pure JavaScript.

##### At the end of this tutorial, we'll have done this clock that in the following image below.

![](https://i.imgflip.com/1wwp8a.gif)
 
    
**Create the file `index.html`**

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Digital Clock</title>
    </head>
    <body>
        <!--for representing our "hh:mm:ss tt" format.-->
        <h1 id="time"></h1>
        <!--Include our external JavaScript file -->
        <script src="./script.js"></script>
    </body>
</html>
```

Now we have created starter Html file, **let's** create the JavaScript file.

Let's first create a reference for the `h1` tag.
```js
var timeEl = document.getElementById('time');
```
Now we need to create a function that get the current time and format the time  as "hh:mm:ss tt"

```js
function getCurrentTime(){
    // Get the current time
    var dateOBJ = new Date();
    // Serialize clock time
    var time = {
        hours:dateOBJ.getHours(),
        minutes:dateOBJ.getMinutes(),
        seconds:dateOBJ.getSeconds(),
        tt:'AM'
    }
    // convert to 12 time
    if(time.hours == 12){
        time.ampm = 'PM';
    }else if(time.hours > 12){
        time.hours -= 12;
        time.tt = 'PM'
    }
    // Prepend a 0 on the hours to make double digits
    if(time.hours < 10){
        time.hours = '0'+time.hours
    }
    // Prepend a 0 on the Minutes to make double digits
    if(time.minutes < 10){
        time.minutes = '0'+time.minutes
    }
    // Prepend a 0 on the Seconds to make double digits
    if(time.seconds < 10){
        time.seconds = '0'+time.seconds
    }

    // Format the click time as a string "hh:mm:ss tt"
    return time.hours + ':' + time.minutes + ':' + time.seconds + ' ' + time.tt
}
```

We've done the first `function` that gets the current time and return it formatted as "hh:mm:ss tt"

Now, every second get the current time, so, we'll use a built-in method  `setInterval(function, milliseconds) `  calls a function or evaluates an expression at specified intervals (in milliseconds).

```js
// We added this for work on page opend
var time = getCurrentTime();
timeEl.innerText = time;

setInterval(function(){

    // GET TIME STRING
    var time = getCurrentTime();
    // Replace the current text
    timeEl.innerText = time;

},1000);
```

we've finished our `Js` file it should be looks like.
```js
var timeEl = document.getElementById('time');
// We added this for work on page opend
var time = getCurrentTime();
timeEl.innerText = time;

setInterval(function(){

    // GET TIME STRING
    var time = getCurrentTime();
    // Replace the current text
    timeEl.innerText = time;

},1000);


function getCurrentTime(){
    // Get the current time
    var dateOBJ = new Date();
    // Serialize clock time
    var time = {
        hours:dateOBJ.getHours(),
        minutes:dateOBJ.getMinutes(),
        seconds:dateOBJ.getSeconds(),
        tt:'AM'
    }
    // convert to 12 time
    if(time.hours == 12){
        time.ampm = 'PM';
    }else if(time.hours > 12){
        time.hours -= 12;
        time.tt = 'PM'
    }
    // Prepend a 0 on the hours to make double digits
    if(time.hours < 10){
        time.hours = '0'+time.hours
    }
    // Prepend a 0 on the Minutes to make double digits
    if(time.minutes < 10){
        time.minutes = '0'+time.minutes
    }
    // Prepend a 0 on the Seconds to make double digits
    if(time.seconds < 10){
        time.seconds = '0'+time.seconds
    }

    // Format the click time as a string "hh:mm:ss tt"
    return time.hours + ':' + time.minutes + ':' + time.seconds + ' ' + time.tt
}

```

Now, try it open the `index.html` file in a browser and you will see the following below without any style.
![](https://i.imgflip.com/1wwr3x.gif)

Wow, so far so good, now we need to style our pretty clock.
In our index file.

```html
<style>
    body{
        background-size: cover;
        height: 100%;
        font-family: 'Fjalla One', sans-serif;
        text-align: center;
        color: #fff;
        text-shadow: 0px 5px 0px #6d6d6d;
        font-size: 100px;
        padding: 30px;
        background-color: #25beec;
    }
</style>
```

We've finished our tutorial.
I hope it'll be helpful for you.

[Code on Codepen](https://codepen.io/barakat-turki/pen/JrrjMB).
