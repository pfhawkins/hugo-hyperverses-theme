SASS Mixins
===========

A collection of [SASS](http://sass-lang.com/ "SASS") mixins for your project.

## Available via Bower

You can download the mixins through [Bower](http://bower.io "Bower"):
```
bower install lib-sass-mixins
```

## Mixins examples

* [Animation](#animation)
   * [Keyframes](#keyframes)
* [Background size](#background-size)
* [Box shadow](#box-shadow)
* [Opacity](#opacity)
* [Clearfix](#clearfix)
* [Border radius](#border-radius)
    * [Border top radius](#border-top-radius)
    * [Border bottom radius](#border-bottom-radius)
    * [Border left radius](#border-left-radius)
    * [Border right radius](#border-right-radius)
* [Box-sizing](#box-sizing)
* [Transition](#transition)
* [Columns](#columns)
* [Font-family](#font-family)
* [Absolute center](#absolute-center)
* [Transform](#transform)
    * [Default](#default)
    * [Translate](#translate)
    * [Skew](#skew)
    * [Scale](#scale)
    * [Rotate](#rotate)
    * [Transform-origin](#transform-origin)
* [Gradients](#gradients)
    * [Linear Horizontal (simple)](#linear-horizontal-simple)
    * [Linear Horizontal (multiple)](#linear-horizontal-multiple)
    * [Linear Vertical (simple)](#linear-vertical-simple)
    * [Linear Vertical (multiple)](#linear-vertical-multiple)

## Animation

```scss
.class { @include animation(animationName 1s); }
```

### Keyframes

```scss
@include keyframes(animationOne) {
    from { background-color: red; }
    to { background-color: black; }
}
```

## Background size

```scss
.class { @include background-size(auto 100%); }
```

## Box shadow

```scss
.class { @include box-shadow(1px 1px 10px 10px #666, 2px 2px 5px 5px #ddd inset); }
```

## Opacity

```scss
.class { @include opacity(0.5); }
```

## Clearfix

```scss
.class { @include clearfix(); }
```

## Border-radius

```scss
.class { @include border-radius(10px); }
```

### Border-top-Radius

```scss
.class { @include border-top-radius(10px); }
```

### Border-bottom-Radius

```scss
.class { @include border-bottom-radius(10px); }
```

### Border-left-Radius

```scss
.class { @include border-left-radius(10px); }
```

### Border-right-Radius

```scss
.class { @include border-right-radius(10px); }
```
## Box-sizing

```scss
.class { @include box-sizing(); }
```

## Transition

```scss
.class { @include transition(color 1s .5s ease-out); }
```

## Columns

```scss
.class { @include columns(3, 150px, solid 1px red); }
```

## Transform

### Default

```scss
.class { @include transform(rotate(45deg); }
```

### Translate

```scss
.class { @include translate(100px, 100px); }
```

### Skew

```scss
.class { @include skew(10px, 10px); }
```

### Scale

```scss
.class { @include scale(0.75); }
```

### Rotate

```scss
.class { @include rotate(45deg); }
```

### Transform-origin

```scss
.class { @include transform-origin(left, top); }
```

## Gradients

### Linear horizontal (simple)

Only start and end color.

```scss
.class { @include horizontal-gradient(#666, #000); }
```

### Linear horizontal (multiple)

The first color is the background color and the other are steps of gradient.

```scss
.class { @include horizontal-gradient(#666, #000 50%, #444 80%); }
```

### Linear vertical (simple)

Only start and end color.

```scss
.class { @include vertical-gradient(#666, #000); }
```

### Linear vertical (multiple)

The first color is the background color and the other are steps of gradient.

```scss
.class { @include vertical-gradient(#666, #000 40%, #333 75%); }
```

## Absolute Center
[Reference](http://codepen.io/shshaw/full/gEiDt)

```scss
.class {
    @include absolute-center(5%, 0, none, 0);
}
```

```css
.class {
  position: absolute;
  top: 5%;
  right: 0;
  left: 0;
  margin: auto;
}
```

## Font-family

```scss
.class { @include font-face("helvetica","../font/helvetica"); }
```
