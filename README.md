# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills (Mostly front end related) by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-create-react-app
-styles with Tailwind CSS
-[HeadlessUI](https://headlessui.dev/) - React styled components by Tailwind CSS
-Mobile-first Workflow

### What I learned

Using tailwind CSS, learning to extend or overwrite some of the built in variables such as color and sizes, as well as creating new variables that make a new specific utility or component is an awesome way to simplify writing CSS and using custom styles. Especially in repetitive situtations, the following helped me use colors over and over again, and apply a tenary easily for the color alone:  

```js
theme: {
    extend: {
      letterSpacing: {
        'large': '0.25em',
      },
      colors: {
        'limegreen': 'hsl(163, 72%, 41%)',
        'brightred': 'hsl(356, 69%, 56%)',
        'facebook': 'hsl(208, 92%, 53%)',
        'twitter': 'hsl(203, 89%, 53%)',
        'instagram': 'linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
        'youtube': 'hsl(348, 97%, 39%)',
        // Dark Theme
        'toggle-dark': 'linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)',
        'background-dark': 'hsl(230, 17%, 14%)',
        'topbackground-dark': 'hsl(232, 19%, 15%)',
        'cardbackground-dark': 'hsl(228, 28%, 20%)',
        'text-dark': 'hsl(228, 34%, 66%)',
        // Light Theme
        'toggle': 'hsl(230, 22%, 74%)',
        'topbackground': 'hsl(225, 100%, 98%)',
        'cardbackground': 'hsl(227, 47%, 96%)',
        'text': 'hsl(228, 12%, 44%)',
        'dark-text': 'hsl(230, 17%, 14%)',
      }
    },
  },
```

Headless UI allowed use of the useState Hook and make the Switch for dark mode accessible easily, with minimal code. Checked takes the value to be used to determine the position of the switch, and onChange allows the state of the value of that passed at checked: 

```js
<Switch 
  checked={dark}
  onChange={setDark}
  className={`inline-flex py-2 px-1 md:ml-4 flex-shrink-0 border-none rounded-full transition-colors w-12 h-7 ease-in-out duration-200 focus:outline-none items-center ${dark ? 'bg-toggle-dark': 'bg-toggle hover:bg-toggle-dark hover:bg-none'}`}
>
  <span
    className={`${
      dark ? '-translate-x-1 bg-dark-text' : 'translate-x-6 bg-white hover:bg-dark-text'
    } pointer-events-none shadow ring-0 transition ease-in-out duration-200 inline-block w-5 h-5 transform rounded-full`}
  />
</Switch>
```

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/mwmachingura)
- Twitter - [@yourusername](https://www.twitter.com/mutsamach)