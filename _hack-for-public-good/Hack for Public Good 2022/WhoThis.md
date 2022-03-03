---
title: WhoThis
permalink: /hackathon/2022/whothis
description: ""
third_nav_title: Hack for Public Good 2022
---
<iframe allowfullscreen="true" height="515" width="100%" frameborder="0" src="https://docs.google.com/presentation/d/e/2PACX-1vQ8Oe2W_DMSCT63Y-bTR--HKdabgusHGDGZiJMBlEgvoMBt_SNXnnZ8xzI1T-HYVDKE-4Ei1GtnafAm/embed?start=false&amp;loop=false&amp;delayms=3000"></iframe>

Watch our Finale presentation on [YouTube](https://youtu.be/1CD8DRfuIkg)!

#### What is WhoThis?
WhoThis is a web app that enables members of the public to easily and authoritatively verify the identity of public officers.

#### What motivated you to build this product?
Today, when you receive a phone call, there is no easy way for you to verify that the person on the line is indeed a public officer. 

This can go wrong in two directions. On the one hand, a gullible member of the public could fall for impersonation scams by criminals and suffer financial loss. On the other hand, a cynical member of the public would not believe, say, quarantine-related instructions provided by a real public officer, or even pick up phone calls from unknown callers.

WhoThis allows a member of the public to verify the identity of the public officer contacting them. When a member of the public receives a phone call, they can login to https://whothis.gov.sg to check if there’s an official call in progress, and see the name and position of the officer contacting them. If there’s no official call recorded, the member of the public should be wary of providing sensitive information over the phone.

The frontend that we’ve currently envisioned is a proof of concept, but in the future, we would like to look at integrating the backend solution into apps that citizens already have access to (Singpass or ScamShield, for instance). This allows us to send authenticated push notifications directly to members of the public during a call, so that they will not have the hassle of having to log in or navigate to a website while on a call.

#### What tech stack did you use?

NextJS for our frontend, NestJS for our backend, and PostgreSQL for our database.

#### What were the key challenges you faced in building WhoThis? 

On the product usability side, we went through many iterations of the authentication mechanism while talking to potential users on both the officers' side (interviews with the COVID operations team) and the citizens’ side (interviews with friends and family). 

One of the authentication mechanisms we initially thought of involved exchanging OTPs between the citizen and the public officer. This would support workflows where the public officer does not have the NRIC number of the member of the public (MOP) they are calling. However, this imposed a higher level of complexity for the MOP, and would have been an unintuitive user experience, especially for the elderly or less tech-savvy people. This additional complexity may have opened up a gap for potential scammers to exploit.

#### What is the product vision for WhoThis? 
We envision WhoThis as a platform for establishing trust between the public and the government. Immediate use cases would be MOH’s COVID-related operations, and official surveys conducted by the government (e.g. Department of Statistics), while future use cases could be to extend to government vendors and selected businesses.

WhoThis can also be extended to the physical realm for in-person verification of officers, which is currently being done by showing identity cards. This method is unreliable, as a card can be easily forged, leaving citizens doubtful about whether the officer is truly who they say they are. With WhoThis, citizens can be assured that the officer they are speaking to has gone through checks with the government database and has a verified identity.

#### Fun facts!
**One interesting finding:**\\

It is hard to come up with a single solution for all possible use cases, e.g. some elderly folk rely on Lions Befrienders for all their phone-related activities, and would not be able to use our app. For these, a hardware token such as the TraceTogether token would be more suitable. Our solution is also not suitable without adjustments for email and SMS, but we have taken the approach of addressing one of the most common use cases – phone calls – first.

**One thing you'd have done differently:**\\

More research into possible integrations with existing products such as Singpass and ScamShield.

**Takeaway/learnings:**\\

Keep the user journey as simple as possible, rather than trying to account for all possible use cases from the outset.

![WhoThis product demo image](/images/whothis-snapshot.jpeg)