---
title: Checkfirst
permalink: /hackathon/2021/checkfirst
third_nav_title: Hackathon 2021
---

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRUyZW4JXP-BCw6D9PUfWaLC9nto1RtGJbovjZ_nkV-ZZEdBGn3IGoWY3LksKAQOKg0DDk7f9_IQBYI/embed?start=false&loop=false&delayms=3000" frameborder="0" width="864" height="515" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

#### What is Checkfirst?

#### What motivated you to build this product?
Eligibility checker is expensive and time-consuming to build. Longterm maintenance is troublesome for the agency.

#### What tech stack did you use?

AWS API Gateway + Lambda hosting express.js, Math.js as the calc/logic engine

#### What were the key challenges you faced in building CheckFirst 

**Engineering challenges:**\\
Some deliberation had to be made over how the formulas that represent the checker/calculator had to be made. Math.js proved to be a godsend, and, as it turned out, was used by similar commercial offerings out there. Given that the project probably would not get much of a budget either, we had to plan so that we can have it survive on as much of AWS Free Tier as possible

**Design challenges:**\\
It is hard to show the logic in a way that a civil servant would be able to self-service and build. IF ELSE statement is not something that people get intuitively.

#### Fun facts!
**One interesting finding:**\\
People often use FAQs as a way to check for eligibility

**One thing you're most proud of accomplishing:**\\
A functional prototype that can move to production

**One thing you'd have done differently:**\\
Figured out how we can use Aurora Serverless in the stack

![](/images/Checkfirst_snapshot.png)