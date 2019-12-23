# Front-End Candidate Test

:wave: Welcome to The Telegraph front-end candidate test

- [Task](#wrench_task)
	- [What we are looking for](#mag_right-what-we-are-looking-for)
- [Set up](#floppy_disk-set-up)
- [Acceptance Criteria](#acceptance-criteria)

## :wrench: Task 

We would like you to build a responsive news article as per the included designs. You should meet the [ACs](#acceptance-criteria).

We've built a bare-bones [express](https://expressjs.com/) application with some basic front-end tooling ([webpack](https://webpack.js.org/) for JavaScript compilation and [PostCSS](https://postcss.org/) for CSS concatenation).

You should spend no more than four hours on this task. If you do not complete the task in time please submit with a list of what you would have done with more time. Feel free to be specific and write `// TODO`s throughout your code.

## Requirements

* Match the designs as closely as possible
* Application should be fully responsive
* Pass the [ACs](#acceptance-criteria)
* Ensure code is unit tested. We've set this up with [Jest](https://jestjs.io/) but feel free to use whatever you like
* Keep you JavaScript vanilla please

## :mag_right: What we are looking for

* An understanding of web fundamentals
* A consistent and scalable approach to the test
* An understanding of accessibility
* Reasoning about web performance
* Reasoning about SEO
* Solid unit testing
* Ability to translate designs

## :floppy_disk: Set up

Firstly, install all of the packages:

```sh
npm install
```

Then run:

```sh
npm run dev
```

Visit [http://localhost:3000/](http://localhost:3000/) in your web browser and you *should* see a blank webpage with The Telegraph logo.

The above command will watch and deploy your code. The watchers for CSS and JS files will not take into account changes to new files so make sure you restart the watchers when adding new files.

## Acceptance Criteria

*Work in progress*

```
- I can see the title of the article
- I can see the standfirst of the article
- I can see the comment count of the associated comments
- I can see the date of the article
- I can see associated posts by ID
```

## TODO

- Get designs
- Write proper ACs
- How to submit code
- Add test data (inc URLs)
- How to submit code?

### Example JSON requests

- GET all posts - https://jsonplaceholder.typicode.com/posts
- GET a single post by ID - https://jsonplaceholder.typicode.com/posts/1
- GET comments for a post - https://jsonplaceholder.typicode.com/posts/1/comments
