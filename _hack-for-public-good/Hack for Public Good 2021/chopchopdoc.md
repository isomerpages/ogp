---
title: ChopChopDoc
permalink: /hackathon/2021/chopchopdoc
third_nav_title: Hack for Public Good 2021
---


<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQgW4JMlHk4Md9z-idMP3tSM4g9ed7z_JoFuPKZy9RNJl_9Oz1MXZAotkalUvDRJ9tFRPPRR6s2V_H5/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%"  height="515" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe> 

Check out the demo [here](https://go.gov.sg/chopchopdemo), or watch our hackathon presentation [on Youtube](https://www.youtube.com/embed/deJoieF0FHA)!

#### What is ChopChopDoc
ChopChopDoc allows the information entered via a customizable form to automatically populate a pre-generated Word template, which is then sent directly to your inbox. By selecting options on the form, the relevant sections and clauses will be added to the document, while irrelevant parts can be removed. Once you've submitted the form, this customized document is sent straight to your inbox. 

Especially for legal and corporate teams, this is a huge time-saver as technical documents are full of jargon, and difficult to fill out for the average layman. 

#### What motivated you to build ChopChopDoc?
CPF initiated this product within their own team, and wanted help with distribution. They had already onboarded their legal and procurement teams on to their Python solution, and were able to reap substantial time-savings through this, as the logic for generating lengthy and jargon-filled documents could be templatized and abstracted into a form. Hence, we felt that the project had a clear value for not only public officers on the ground, but also for businesses and citizens, and adopting it could set a precedent for more ground-up tech initiatives. 

It also helped that the project had a very well-defined scope and already had potential use-cases amongst other agencies, hence we were confident that we could build a useful prototype within the time constraints of the hackathon.

#### Biggest challenges
**Engineering challenges:**\\
Typescript. While the technical stack was simple enough (NodeJS for the backend, Lambda serverless running the document conversion), we wanted to try out Typescript as we were curious to learn more about safe typing in Javascript. However, it was the first time any one of us had attempted it, and that learning curve was fairly steep considering that had little over 2 weeks to build and iterate on the product.

**Product Management & User Research challenges:**\\
We could have done better in picking up on nuances in user interviews and really drilling down to how users were likely to use the product. 

While the technical side of the project was completed in a couple of days, we spent over two weeks on interviews with current and potential users, trying to understand what variety of usecases we could support with this product. One issue we faced was figuring out how to make our product compelling and useful as a standalone product, since its end-user facing product would be a form, which would seem to overlap with FormSG's functionality, but its agency-user facing product would be a document template manager, which may not be directly integratable with FormSG. 

#### Fun facts!
**One thing you're most proud of accomplishing:**\\
It was a completely engineering-run team, and we managed to do the product management, design, and research aspects ourselves (passably well)!

**One interesting finding:**\\
CPF Automation labs onboarded their internal legal and procurement teams onto Python! More than 1000 people within CPF has used their Python form generator.

**One thing you'd have done differently:**\\
We could have used some expertises in design, user research, and product management. Our early stage prototypes looked like early-2000s web designs, so we definitely could have used some design weigh-in. See below:

![Product snapshot of early iterations of Chop Chop Doc](/images/chopchopdoc-initial.png)

#### Others
**Shout outs**\\
Shout out to Bing Wen, Chang Qing and Dorcas at CPF Automation Labs, for the original idea & for being really supportive agency partners and for setting up interviews with other potential agency users.

**What's next?**\\
We are keen to take this project forward and find other usecases for this product outside of legal and procurement as well. For instance, we believe this product will also help with automated letter response generation. If you're an agency partner keen to try this product, please reach us at [chopchopdoc@open.gov.sg](mailto:chopchopdoc@open.gov.sg).



![Chop Chop Doc product image](/images/chopchopdocx_snapshot_updated.png)