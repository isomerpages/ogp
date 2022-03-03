---
title: Memo
permalink: /hackathon/2022/memo
description: ""
third_nav_title: Hack for Public Good 2022
---
<iframe allowfullscreen="true" height="515" width="100%" frameborder="0" src="https://docs.google.com/presentation/d/e/2PACX-1vRRnngeWOR0FhdewOHBOb9uHkGIOTdVrW1cQDNZhKyhb63N0nRqkSZsXqZWjrOOATQqATaAwy67MBCn/embed?start=false&loop=false&delayms=3000" ></iframe>

Watch our Finale presentation on [YouTube](https://youtu.be/wdgyggcYpQ0)!

#### What is Memo?
Memo generates templated, verifiable, and identifiable memos accessible via a weblink.

#### What motivated you to build this product?
The motivations for Memo are twofold:

Currently, citizens can receive official communications (memos) from government agencies in a number of ways: letters, emails, SMSes, etc. Of the current methods, snail-mail is slow, while the other methods make it hard for the recipient to verify the legitimacy of the memo. Memo aims to improve on these shortcomings by providing a platform for citizens to view and share their official communications.

On the other hand, it is similarly troublesome for public officers to issue these official communications. Memo provides a platform that facilitates the design, sharing, and issuing of templates for public officers. It provides a process that is much more streamlined, easily monitored, and less error-prone than existing methods.

#### What tech stack did you use?
The frontend is built with React, and the backend is built on NestJS with a Postgres database.

#### What were the key challenges you faced in building Memo? 

Design wise, it was important to provide a streamlined flow for public officers to design and issue memos, whilst still remaining familiar and easy to grasp for those who may not be so technically inclined. User tests with potential users revealed UX subtleties and feature requirements that need to be addressed, such as the template editor UI, and the need for a clear paper trail for issuing memos.
 
Engineering challenges for the product primarily revolved around the template designing and issuing workflow, whereby the editor component was crucial and yet too complex to implement from scratch in the Hack for Public Good time frame. Picking a suitable plug-and-play editor was a, and continues to be, a challenging engineering decision and significantly affects the rest of the user flow.

#### What is the product vision for Memo? 
The product vision is for Memo to be the go-to tool for any scenario where official communication is required between an official source and citizens.

#### Fun facts!
**One interesting finding:**\\
That physical or digital manually generated memos are quite expensive to generate!

**One thing you'd have done differently:**\\
With the recent uptick in online impersonation scams, making Memo provide verifiable and spoof-proof communications is now an important consideration. Incorporating some form of provable verification (like notarising), is likely to be a significant design and engineering challenge that could warp the entire issuing/receiving process around it. It would have been desirable to incorporate this concern from the start, and ship this as a core feature of Memo.

**Takeaway/learnings:**
1. Design with real end users in mind, always. 
2. Test and test and test prototypes with end users, watch them interact with our systems to get a real feel of where we can improve user experience.
3. Dogfood the product wherever possible!