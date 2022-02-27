---
title: Ownself Go
permalink: /hackathon/2022/ownselfgo
description: ""
third_nav_title: Hack for Public Good 2022
---
<iframe allowfullscreen="true" height="515" width="100%" frameborder="0" src="https://docs.google.com/presentation/d/e/2PACX-1vRn6vLqlb2-W4W8cgQWEBWSOgDpP9Pe9f0N0ld0wLdBYjp8zLuAQGEQzoGk8FcE-JB1dlXA-u6YGH1N/embed?start=false&loop=false&delayms=3000" ></iframe>

#### What is CalSG?
An appointment booking system for all agencies

#### What motivated you to build this product?
Citizens book appointments with government agencies all the time, but each of these agencies has its own custom appointment booking system. This means that every single public-facing agency has to spend time and money to build and maintain its own system, and the quality of these systems can vary significantly.

We wanted to build a tool for public officers to easily publish time slots which others could then book using a public link. From our research on existing appointment booking systems, this tool also had to include form-building capabilities so that officers could collect relevant information (e.g. name, reason for appointment) along with the appointment booking.

During the project, we realised that if this tool was accessible to all public officers, they could also use it internally, e.g. to book time slots for meetings or shared facilities.

#### What tech stack did you use?

NextJS, Prisma and PostgreSQL

#### What were the key challenges you faced in building CalSG? 

We had to make a lot of key engineering and product decisions in the beginning. First, should we build a standalone product or integrate with FormSG? A standalone product would be technically simpler, but FormSG allowed us to leverage on its powerful form-building capabilities. We decided that form-building was essential based on what we observed from existing appointment systems, so we went with a FormSG integration.

Next, how do we address the double-booking issue where multiple people try to claim the same slot? We decided to have the FormSG client confirm the slot with the CalSG server before sending the submission to the FormSG server, as this was the simplest to implement. However, given more time, we would move this confirmation step to the FormSG server instead.

Designing the integration between FormSG and CalSG was also a challenge. We were initially going to require the public officer to enter their FormSG secret key into CalSG so that CalSG could store the form responses encrypted, but this was both more difficult to implement and much poorer UX. Hence we decided to store the responses in plaintext and limit the steps required for integration to just one: pasting the CalSG shortcode into FormSG.

#### What is the product vision for CalSG? 
We have talked to several agencies about concrete use cases, such as:
- Scheduling intern interviews (MTI)
- Parent-teacher meetings (MOE)
- Booking time slots for driver training (RSAF)

#### Fun facts!
**One interesting finding:**\\
People are surprisingly willing to try out a new product if it might help them solve a real problem!

**One thing you'd have done differently:**\\
We would have spent more time on UI reviews and user tests to improve the usability of our product.

**Takeaway/learnings:**\\
When working on a new idea, build an MVP and try it out with real users as soon as possible. Feedback from real users is the best kind of feedback.

![CalSG product demo image](/images/calsg-snapshot.jpeg)