---
title: ResolveSG
permalink: /hackathon/2022/resolvesg
description: ""
third_nav_title: Hack for Public Good 2022
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/-58e0IlKbsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### What is ResolveSG?
Track and resolve cases in a few days
#### What motivated you to build this product?
Currently, many workflows are still based on email. For instance, a citizen might submit an application form for a grant and this grant is processed by various public officers over email and approvals are also given over email. 
 
This is highly inefficient as application progress cannot be easily tracked, resulting in agencies struggling to meet SLAs and citizens getting delayed application results.

#### What tech stack did you use?
For the frontend, we used React and NextJs. While for the backend, we used NestJs and Prisma.

#### What were the key challenges you faced in building ResolveSG? 

One key decision was to codify a simplified version of the approvals structure instead of replicating it in its entirety. For instance, currently for the vast majority of workflows, a staff officer would approve the case followed by a director or equivalent. However, ResolveSG does not recognise the different roles that are required to approve a case, but instead just ensures that X number of officers have approved the case. This simplification gives greater flexibility and allows ResolveSG to cater to varying workflows and their approval structures. On the engineering side, we also have no need to deal with user roles and how they might differ across workflows.

#### What is the product vision for ResolveSG? 
The product is a ticket resolution system much like Zendesk, mixed in with simplified approval workflows much like Github. Most email workflows can benefit from Resolve, and possibly several chunky case management tools as well, which are expensive to maintain, slow to load and with poor user experience. For now we’re working with ESG for StartupSG grant applications, who are asking their MD for headcount to continue supporting our project. HDB Noise complaints team is keen too. NeMSW, a case management system for medical social workers can potentially use Resolve as well.

#### Fun facts!
**One interesting finding:**\\
Our hypothesis is while work is diverse, workflow is generic across use cases, and includes a) verified user identity, b) background of user, c), concern, d) internal communication, e) external communication and f) approvals.

**One thing you'd have done differently:**\\
Test against another agency early on apart from just ESG to substantiate our hypothesis.

**Takeaway/learnings:**\\
When working on a new idea, build an MVP and try it out with real users as soon as possible. Feedback from real users is the best kind of feedback.

![CalSG product demo image](/images/calsg-snapshot.jpeg)