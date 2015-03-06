# jQuery Attributes

** this library is only POC full version will be available soon **

## purpose

When I first heard about web components I though WOW, now we
can make reusable code. but the more I dug into that I figure that the main reason to use web components (at least for me) is for general purposes or more accurate for small projects that doesn't require framework because for big project I'll prefer using a proper framework (angular, backbone, ember etc) and the biggest problem regarding web components is browser support. now when you need to support IE10< firefox chrome safari you can't use web components. and then the idea came to my head. if only you could build web components with jquery. that could be awesome and then I thought, why not? data attribute support IE8> so maybe we can use data attribute with jquery. after all components that inherited from element are good practice.
so I built this library for web component user who want browser support.

## how is it work

This repository use jQuery to create attribute that lead to action.
jQuery work in the concept of "find something do somthing" usually we find with "jQuery selectors"
the other way to find something is by using an events.
so instead writing:

```html

    <div class="something">test</div>

```

```js

    $(".something").text("something else");

```

The library suggest:

```html

    <div data-jq-text="something else">test</div>

```

By that we:

* Separate the design from the login
* Write more readable markup


## todo

- create proper API
- writing few components for example
