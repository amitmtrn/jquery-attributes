[![Dependency Status](https://david-dm.org/amtmtrn/jquerjquery-attributes.svg)](https://github.com/amitmtrn/jquery-attributes)

# jQuery Attributes

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
