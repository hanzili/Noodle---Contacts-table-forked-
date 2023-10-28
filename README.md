<div align="center">
  <img src="https://github.com/ixahmedxi/noodle/blob/main/public/logo.png?raw=true" alt="Noodle logo" width="75">  
  <h1>Noodle <br> Rethinking Student Productivity</h1>
  <br>
</div>


# Ticket instructions

For this ticket, you will be adding to an Open Source Project's code base. Make sure to read the contributing doc as well to get a better Idea as to how to get started. 


### Introduction:

The contacts table will act as a repository for the user to collect contacts to professors and other staff members or so and that way they can easily add them to a module to have an easy way of contacting a person that has something to do with a given module.

The table in the database will sit at the same hierarchial level as a module (top level) and will have rows of different contacts that are linked to a user or an organisation. (just the user for now)

Once done, add a contacts page to show the contacts and let users add new contacts.

### Requirements:

-  Create a contacts table with these columns

The columns that should be in the table are as follows:

Id (UUID unique)

userId (this will be the way we link a contact to a user from clerk, this is optional because a contact can be linked to an organisation instead)

orgId (this is when the userId is null)

Name (the name of the contact)

Role (either a professor, staff, custom, or other)

Office location (optional)

Open hours (optional)

Phone number (optional)

Email (optional)

Modules (optional) linked to a module's id

- Create a frontend contacts page to show the contacts and let users add new contacts. This should follow the design of the rest of the site.







## About Noodle




> **Warning**
> This is a work-in-progress and not the finished product.
>
> Noodle is in it's very early days of development and there is not much going on for the product right now.
> We are working hard to providing an initial version as soon as possible and also accepting contributions.
>
> Feel free to leave feature suggestions but please don't open issues for bugs or support requests just yet.
>
> Follow me on twitter [@ixahmedxii](https://twitter.com/ixahmedxii) for updates.

![Noodle Preview](https://github.com/ixahmedxi/noodle/blob/main/public/preview.png?raw=true)

<p align="center" style="color:dodgerblue;"><strong>⚠️ This is a UI design mockup of what the platform will look like, it is not the current state of the project.</strong></p>

## Planned Features

- 📁 Module/Subject Management
- 📒 Note taking
- 🗄️ Task Management
- ✅ Assignment grade calculator
- ⚡️ Flash cards
- 🤖 Powerful AI automations
- 📆 Timetable
- 📈 Insights
- 🧠 Mind maps

## Purpose

Typically, for a student, you need to be using multiple applications just to be managing your education well. This would include a note-taking, a calendar, task management, a grade calculator, flashcards and more apps. This is tedious to manage and can be overwhelming for students.

Noodle is a platform that aims to solve this problem by providing a single platform for students to manage everything to do with their education. And with the power of having all of that data in one place, we can provide students with powerful insights and automation to help them be more productive.

As an open-source platform, Noodle strives to cultivate a community of students and developers who can collectively contribute to building the most exceptional student productivity platform.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=ixahmedxi/noodle#gh-light-mode-only)](https://star-history.com/#ixahmedxi/noodle#gh-light-mode-only)
[![Star History Chart](https://api.star-history.com/svg?repos=ixahmedxi/noodle&theme=dark#gh-dark-mode-only)](https://star-history.com/#ixahmedxi/noodle#gh-dark-mode-only)
