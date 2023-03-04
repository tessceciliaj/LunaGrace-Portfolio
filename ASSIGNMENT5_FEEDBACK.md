Hi Therese!

This is fantastic work! I love how you've gone beyond what we talked about in the course. It's clear that not only do you have a wonderful understanding of what we covered, but you also have the passion and the determination to go deeper that great developers need!

As you will see below I only have a few comments, and all are minor. It's been wonderful seeing what you have created in this course.

Välgodkänt! Well done!

*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

HTML
  index.html at root level for publishing on github pages ✅

  Multiple pages ✅

  Header, footer and navigational menu on all main pages (where possible) ✅

  H1 on every page ✅ ❌
    No h1 on contact page

  Mail to Contact form ✅

  Links to specfic projects opening in new windows ✅

CSS
  External CSS

  General style sheets for common elements ✅

  Locally installed font ✅

  Typography style sheet ✅
    Assuming the entire site is either futura or calson, it's a good idea to set one of these as the site wide default font in typography.css:

    body {
      font-family: futura;
    }
  
  Separate stylesheets for each page ✅

  RWD
    Desktop ✅
    Mobile ✅

JS
  jQuery plugin (such as a carousel) ✅

  JS/jQuery multi level menu (min 2 levels) ✅
    Nice!

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

  Project organisation ✅
     img in an html tag; 'images' is a better name for a directory! 

  CSS prefixing where required ✅

  jQuery effects ✅
    Way beyon what was needed!

  Semantic element naming ✅

  Code style:
    A few unneedded empty lines but excellent.
    HTML: ✅
    CSS: ✅
    JS: ✅
      const always should be written in SNAKE_CASE
      lots of unnecessary repetion - nav, mobile hamburger etc. Create a utilities.js or somesuch for common elements and include it on every page that needs it. iI's not uncommon to see many small js files included on every page - eg the navigation could be one file, the hamburger another. This kind of 'compartmentalised' design is very common when using libraries such as React.