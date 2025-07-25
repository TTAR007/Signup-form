# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/solutions/sign-up-form-with-js-XtYrqdzvGd)
- Live Site URL: [Live site URL here](https://ttar007.github.io/Signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Javascript
- Mobile-first workflow

### What I learned

I have learned about regular expression and applied it for checking email input.

```js
function checkEmail(input) {
  const emailExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailExp.test(input.value);
}
```

## Author

- Frontend Mentor - [@TTAR007](https://www.frontendmentor.io/profile/TTAR007)
- Twitter - [@T_TAR_007](https://www.twitter.com/T_TAR_007)
