# InstaNews

Responsive Mobile-First News App Using The New York Times API <br>

![](instaNewsgif.gif)

## Preview

Clone repository<br>

run in local server of your choice<br>

## Technologies used
* HTML5
* CSS3
* SASS
* JQuery
* JSON
* v2 NYT API
* GULP 
* Git
* bash

## Media Querys

* Mobile: 320 x 568
* Tablet: 768 x 1024
* Desktop: 1240 x 1015

## Personal Learnings

### GULP Task-runner
I learned how to utilise task-runner ```GULP``` to Automate and streamline my work flow.
We created a gulp.js file to minify my app.js and streamline my SASS into pure CSS3 live in a browser-sync.<br>

Example:<br>

```javascript
gulp.task("sass", function(){
    return gulp
    ...
}
```

```javascript
gulp.task("scripts", function(){
    return gulp
    ...
}
```

``` javascript
gulp.task("browser-sync", function(done){
    return gulp
    ...
}
```

### SASS:
This was the first time I was introduced to the stylesheet language SASS. I used SASS variables, nested rules, and mixins to create a more symantic readable stylesheet.

Example:<br>

```$font-family: 'Open-Sans-Light';```

```
@mixin tablet{
    @media (min-width: 768px){
        @content;
    }
}
```
```
div{
    @include tablet{
        // media query here 
    }
}
```

### JSON:
I was introduced to JSON(JavaScript Object Notation) a lightweight data-interchange format. Linked to the New York Times API(v2 NYT API), I was able to return real time data and format it accordingly into my webpage.

Example:<br>

```javascript
$.getJSON("path/to/Api/mykey")
.done(function(data)){
    // Use data here
}
```

## Environment

* macOS Mojave: 10.14.6
* VS Code: 1.39.1

## Contributing

Please feel free to clone this project, feedback and improvements welcome.

## Authors
* **Bruce Pouncey** - *Initial work* - [BPouncey](https://github.com/BPouncey)

## License
(MIT)

## Acknowledgments
[RED Academy](https://github.com/redacademy)



