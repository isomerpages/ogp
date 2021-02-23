---
title: CheckFirst
permalink: /hackathon/2021/checkfirst
third_nav_title: Hackathon 2021
---

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRUyZW4JXP-BCw6D9PUfWaLC9nto1RtGJbovjZ_nkV-ZZEdBGn3IGoWY3LksKAQOKg0DDk7f9_IQBYI/embed?start=false&loop=false&delayms=3000" frameborder="0" width="864" height="515" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

#### What is CheckFirst?
CheckFirst is a self-service tool that government officers can use to create eligibility checkers or calculators within a matter of minutes.

#### What motivated you to build this product?
We wanted to make it easier to figure out if someone qualified for policy schemes. In some cases today, a public user needs to either i) download a clunky Excel sheet or ii) read through several paragraphs of text in order to figure out if they qualify for certain policy schemes.

Moreover, custom eligibility checker web applications can be expensive and time-consuming to build. So we thought - why not create a low-cost tool that government agencies can use to create eligibility checkers/calculators quickly?

#### What tech stack did you use?

We used React for our frontend web application, ExpressJS for our backend server, and PostgreSQL for our database. We also depend on Math.js to power our calculation/logic engine. The service is hosted on API Gateway and AWS Lambda.

#### What were the key challenges you faced in building CheckFirst 

**Engineering challenges:**\\
We’re really excited to share about this challenge because it’s such a cool problem to solve (and it comes with an elegant solution)!
One of the most challenging parts of building CheckFirst was figuring out how to perform static analysis for the calculator evaluation engine to see if a user-defined calculator was valid. Let us explain what this means (note: this part gets a little technical!).

Assume that someone has built a simple calculator which has a result that depends on a question input field. Let’s say that the calculator has only one question - “What is your age?“. And the calculator just does one operation, which is to multiply your age by 2.

This is a valid calculator because the operation step (“Multiply your age by 2”) can run successfully because all of its dependencies exist. Specifically, the only dependency that the operation depends on is the question “What is your age?“.

However, let’s say that someone accidentally deletes the question. Or even worse, sets the result of the operation step to depend on itself. How are we able to statically determine if the calculator is a valid one?

We decided to tackle this problem by using a little graph theory. We convert our entire calculator into a graph, where each variable (operation or question) is a node on the graph, and each dependency is represented by an edge. Once we model the problem as a graphical one, we can very easily find out if the calculator is valid by checking that all dependencies exist and that there are no cycles in the graph!

**Design challenges:**\\
Calculators by themselves are not difficult to understand. However, learning how to use a tool that builds a calculator is challenging because the process is quite meta.

Specifically, it is challenging for a new user to understand the concept of applying logical/arithmetic expressions on question inputs, such as IF/ELSE statements. We attempt to make the user experience easier to understand by creating custom components - such as an IF/ELSE widget so that users can focus on building their calculator instead of having to remember programming syntax.

#### Fun facts!
**One interesting finding:**\\
Our user research has shown that people often use FAQs as a way to check for eligibility!

**One thing you're most proud of accomplishing:**\\
We are really proud that we managed to get a fully-functional prototype that is ready to be used in production.

**One thing you'd have done differently:**\\
If we had slightly more time, we would have tried using Aurora Serverless in the stack, just to try something new.

![](/images/checkfirst-snapshot.png)
