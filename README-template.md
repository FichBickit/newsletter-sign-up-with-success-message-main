# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
![](./Screenshots/active-states-button-screenshot.png)
![](./Screenshots/active-states-email-screenshot.png)
![](./Screenshots/desktop-design-screenshot.png)
[](./Screenshots/desktop-success-active-screenshot.png)
[](./Screenshots/desktop-success-screenshot.png)
[](./Screenshots/error-states-screenshot.png)
[](./Screenshots/mobile-design-screenshot.png)
[](./Screenshots/mobile-success-screenshot.png)

## My process

### Built with

- Semantic HTML5
- CSS
- JavaScript

### What I learned

One of the most satisfying things that I learnt in this project was understanding regex's, getting an input to appear elsewhere in your code and the mobile design.

Our teacher Mr Del Rosario showed us the code for the regex and let us copy it as we haven't learnt about regex's yet. But I decided to have a look at the code to see how it worked anyway. The regex consists of:
<script>
  const emailRegex = /^[a-zA-Z0-9._%+-~!#$&'/=^{}|]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/;
</script>
This is what I figured out about this code. the /^ is just to declare a regex. Next the square brackets are used ([]). This means that what is in these brackets are acceptable characters, meaning that these characters are acceptable: a-zA-Z0-9._%+-~!#$&'/=^{}|. Then, the +@ means that for something to be acceptable, it must contain first characters specified, then a @ symbol, then the next characters specified. Then, the +\. means that there has to then be a full stop followed by the final set of characters. Finally, the {2,} means that to be acceptable, the input must have at least 2 characters after the full stop. The $/; then ends the regex. I probably didn't get it fully correct, but I was happy to figure this out. 

The next thing that I am proud of in this project is this bit of code:
<script>
  emailFiller.innerText = value;
</script>
This may look simple, but the process was really satisfying. I was trying to figure out how to get the email input to display on the success page. My classmate Gabe told me to use innerText, but I wasn't sure exactly how to execute it. In this code, emailFiller is a span that contains the filler email address on the success page. The loop that checks the email starts with 
<script>
  for (const [input, value] of Object.entries(data)) {}
</script>
I checked the console for what happened when I inputted an email, and an object came up. Under 'value' was the email that I inputted. Combined with this knowledge and what Gabe told me, I put it into that one line of code. When it worked first time, I was so happy. I didn't expect it to work immediately, so I was very proud of myself. 

I wasn't really explicitly proud of any HTML per se, but if I had to say something then I would probably say this bit of code: 
<strong><span class="emailFiller">@loremcompany.com</span></strong>
There's nothing that special about it, I was just happy I remembered how to use span tags from Term 1. This code is related to the second bit of code that I mentioned, about the emailFiller.

Finally, I was very happy with the mobile design, especially the fact that I also did a tablet design that I didn't even have to do. I won't display the whole code because it's very long, but I was very proud of myself for doing it without any help. The most satisfying bit of the mobile/tablet design was getting the image from on the right side during the desktop design to being on top of the content in the tablet design. 

### Continued development

Going into the nest project, I will be taking a lot of the skills that I earned into the next Tip Calculator project, especially the JavaScript. Next project's JavaScript is going to be very difficult, so the informatoion will be very helpful.

### Useful resources

- [W3Schools box-shadow](https://www.w3schools.com/cssref/css3_pr_box-shadow.php) - This helped me to add the shadow on the button when hovering. It explained how to add the shadow as well as how to add the blur that is present in the active states
- [CSSGradient](https://cssgradient.io/) - This is a great website if you are unsure of how to add gradient colours. This helped me when I had to include the gradient on the hover button. It is simple to use, just enter the colours you want to be in the gradient, and it spits out the code. It is very versatile as you can set the direction of the gradient. Highly recommended.

## Author

Tim Kensey - Year 10 Computer Tech Class

## Acknowledgments

I was trying to figure out how to get the email input into the success page where it says "we sent a confirmation email to email@example.com". Gabe mentioned to use innerText, which I was a bit unsure of how to use it. I tried to get it to work, and it worked first time, as seen in my "What I Learnt" section. So shout out to him.
Mr Del Rosario told me to use:
  flex-direction: column;
  justify-content: space-between;
  height: -webkit-fill-available;
Instead of a massive padding to get the button down in the mobile success design
Apart from that, I mostly did this project independantly, which is different from last project. I think there were some other things that my teacher helped me with, but I can't remember everything. Aside from some JavaScript that he let the whole class use, this project was mainly me. I also didn't use that many websites for help on this either. I may have searched up some random CSS properties at some point, but that was only brief and simple.