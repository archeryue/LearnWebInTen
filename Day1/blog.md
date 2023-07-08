# Day 1: Familiar with web development quickly

## Where to start?
 - find a cool site: MDN(developer.mozilla.org), looks like really suitable for me.

## Quick look at HTML
 - Syntax: \<div id="xx" class="yy" style="zz"\> hello world \</div\>
 - Let's take a look the most commonly used elements. The first few elements are quite familiar: \<html\>, \<head\>, \<meta\>, \<title\>, \<body\>, \<header\>, \<footer\>, \<article\>, \<section\>, \<p\>, \<div\>, \<span\>, \<img\>, \<audio\>, \<video\>, \<canvas\>, \<ul\>, \<ol\>, \<li\>
 - Do not know: \<aside\>, \<datalist\>, \<details\>, \<embed\>, \<nav\>, \<output\>, \<progress\>
  - And I forget the difference between \<canvas\> and \<img\>, Precisely, what does \<canvas\> for?
   - Well, \<canvas\> can deal with something named canvas scripting API or WebGL to draw graphics and animations. sounds like it's for web game development. cool!
  - \<aside\>: looks like a quote but semantically like a comment.
  - \<datalist\>: ok, datalist consists of \<option\>s, simple.
  - \<details\>: when you click a \<summary\>, it will display its \<details\>. useful.
  - \<embed\>: the example for this element is a video embed in the page. fuck...I think it's a general purpose element for multi-media.
  - \<nav\>: semantically, it's a navigation. but it is just a list indeed. Maybe it has some special uses.
  - \<output\>: nothing special, just somewhere to show output.
  - \<progress\>: well, just a progress bar.
 - \<table\>: not sure if it is out of date. just leave it.
 - Ok, let's finish HTML part for day1.

## Quick look at CSS
 - Fucking cumbersome content. but the idea is simple: put the style attributes together, make them much easier to manage.
 - Syntax: selector {color: xx; background-color: yy; border: zz;}
  - selector can be: elements, class, id and so on. select DOMs and set the sytle.
 - Ok, there's a lot of head-scratching details here, let's just forget about it. we will learn UI framework anyway.

## Quick look at JS
 - Just another stupid dynamic langauage. I don't think I need to learn it. Let's code.
 - JS API: browzer APIs and third-part APIs.
  - Browzer APIs: DOM APIs / Data Fetch APIs / Graphic APIs / Video Audio APIs / Device APIs / Storage APIs
