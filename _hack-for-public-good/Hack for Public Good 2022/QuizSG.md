---
title: QuizSG
permalink: /hackathon/2022/quizsg
description: ""
third_nav_title: Hack for Public Good 2022
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/qlxmJltQ-Ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### What is QuizSG?
QuizSG is a no-code tool for public officers to easily create and administer quizzes which learners can take by simply accessing a weblink.

#### What motivated you to build this product?
There is no easy way for public officers to administer quizzes internally or externally. Multiple platforms are needed for different tests/quizzes for each individual learner, which leads to nightmares in consolidating one's learning.

Our research also showed that there >100 FormSG forms are quizzes which creators manually “mark” after test-takers submit their answers. :Public officers have jumped through hoops to build in the logic on FormSG to create quizzes for their staff or MOP, and FormSG wasn’t built to administer quizzes nor provide analysis of such data which would be critical to the instructor’s understanding of how much knowledge a learner has gained after attending a course. FormSG is also unable to provide the learner with any outcomes or insights of his learning as it is a one-way tool.

#### What tech stack did you use?

We build our application on the OGP starter-kit called ts-template.  Under the hood, the backend runs in AWS as a nodejs application built with the nestJS framework, and connecting to a PostgreSQL database. The frontend is a reactJS single page application built with UI components from OGP's design system.

#### What were the key challenges you faced in building QuizSG? 

Quiz engines are very complex! We started off trying to tweak Moodle for our use since it was open source but we soon realised that Moodle was too complex as was a full-suite Learning Management System and administering quizzes was just a small component in the Moodle universe. Moodle also was a little antiquated :( A whole week had passed and we were back to square one! We needed to re-iterate and re-think our MVP. We also had to be realistic about what we could build within a very short period (<2 weeks).

#### What is the product vision for QuizSG? 
Clean and modern platform for public officers to easily administer quizzes on-the-go while conducting training or outreach. 

A platform that doesn't require multiple account creations and logins for different learner groups. 

A platform where learners can review all their government-administered quizzes easily with simple and elegant UI/UX, and administrators can also glean insights from the quizzes they administer via a dashboard that is easy to use and visually pleasing.

#### Fun facts!
**One interesting finding:**\\
Our co-hacker is a software engineer but was a designer previously so we got the best of both worlds as we didn't manage to secure a product designer for this project.

**One thing you'd have done differently:**\\
We would have reached out to more users to understand their pain points better.
**Takeaway/learnings:**\\
Big thanks to our collaborators from NHB and MOE who provided their time and valuable insights to us!