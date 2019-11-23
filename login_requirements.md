# Login feature requirements

## Intro
Horia's comment: Welcome to your first "real-world" project as a programmer. I've just received this message from a very important customer: 
"I already have a static website that has a single index.html page with my contact details and my picture. But I've been receiving a lot of anonymous calls and I want to make my contacts available to only those that I give a password to (the password is on my business card).

I already have a developer that is quite good at coding, but he doesn't know what to do. I need a step by step plan (Horia: like we had in session1) of how to restrict access to my index.html page"

Horia's comment: This customer has an idea of what they want, but they're not that technical. So, they might have missed to give us all the information that you need. This happens a lot in "real-world" development. Sometimes you'll be able to fill in the gaps, sometimes not. Keep track of that when you're designing a solution for this problem (we'll discuss it next time).

Good luck and have fun. If you're stuck, I invite you to brainstorm together on Slack. If you've got a solution, share it with the rest so we can solve this together. Remember, this does not involve any coding. We just need a list of tasks, in plain english, to give to the customer's developer. Assume that the index.html page exists already. Everything else needs to be built.

## What the customer wants: restricted index.html
Horia's comment: This will be achieved by adding a loging feature

* when new user opens my index.html, they are redirected to a login_required.html page
* login_required.html contains a form with a single field on which the user can fill in a given password and click a login button
* if password is correct, the user is redirected to login.html
* if the same user closes the browser and opens it again and goes to login.html, they don't need to login ever again.

## What the customer wants: login statistics
Horia's comment: as usual, the customer whats to know who visited their website. So, they want to expand the login feature a bit.

* user needs to login with their email address and their password
* the email address with be printed to the console via console.log (we're simulating it being send to google analytics)
* the email address will be displayed in the top left corner of the page
* there's a login button right under the email address that when clicked, performs a logout and redirects us to the login_required.html