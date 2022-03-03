---
title: DocuLens
permalink: /hackathon/2022/doculens
description: ""
third_nav_title: Hack for Public Good 2022
---
<iframe allowfullscreen="true" height="515" width="100%" frameborder="0" src="https://docs.google.com/presentation/d/e/2PACX-1vSfXVNcNR1V3CDOlfLtLxwObqDB_aUkaOWrYEoq80XVcyC0OPsPVJ5cl0rzRsrYmJ_e-_EAU1IICaQt/embed?start=false&loop=false&delayms=3000" ></iframe>

Watch our Finale presentation on [YouTube](https://youtu.be/GBjewa49nk8)!

#### What is Doculens?
Doculens allows government officers to easily receive and view applications for grants and schemes that require many supporting documents.

#### What motivated you to build this product?
During the learning journeys, we observed that agencies handling grants and schemes face a common pain point — difficulty in consolidating supporting documents needed for each application. The many back-and-forth between the officers and applicants to obtain the necessary documents then results in (1) increased processing time for applications (2) less resources for officers to focus on critical work.

#### What tech stack did you use?

The team created the solution around NestJS for our backend services, React for our front-end web application - with OGP’s beta design system as the styling backbone, and MongoDB as our database service. We also explored and used a few services offered by AWS and subsequently used it as a deployment platform. 
 
 The choice of the stack was a balance between the different services and frameworks we were interested to learn about and the limited resources our team could afford (time and manpower).
 
#### What were the key challenges you faced in building Doculens? 

Our original product idea (‘smart document viewer’) stemmed from one of the learning journey sharings. However, we soon realised that the smart viewer did not address the officers’ biggest pain point from our various user interviews. This led to an entire product pivot, where we had to start from scratch in the product development process.

The initial MVP included a custom form builder so that the product can be scalable to different agencies and use cases. Since this would overlap largely with FormSG, we decided to not include the form builder to reduce duplicative work and will only pursue it if the idea goes into production.

There were also difficulties with tying a product that best conforms to policy. Doculens as a system was designed to be versatile to different use cases, and these meant the need to offer support for sensitive and secure documents that required end-to-end encryption. Due to time constraints, we have not gotten the necessary clearance to handle these documents but we are looking towards an implementation that meets these needs in the long run.

#### What is the product vision for Doculens? 
The product vision for Doculens is to be a customisable tool for officers to easily create application forms and review responses in-browser without needing to download and print.
 
Doculens targets a common pain point across many grants and schemes officers, hence there is great value in becoming customisable so that every officer can create their own forms. In the long run, a possibility for Doculens is to be integrated within FormSG such that officers can choose to build either application forms (Doculens) or standard response forms.
 
In addition, we want to explore how Doculens can further assist officers with assessing the eligibility of the application. This can be done via Optical Character Recognition to pull useful data from documents uploaded.

#### Fun facts!
**Interesting finding:**

One interesting discovery was how diverse the tech are across various government agencies. We did notice many agencies that each have their own tech solutions that could potentially be used to address a different agency’s needs [The ESG portal, OurSGGrants etc]. We were also able to see how different agencies leveraged tools such as [FormSG](https://form.gov.sg/#!/) and what is good and lacking about those to better inform our product decisions.

**What you'd have done differently:**

We would have validated our prototypes with user testing — currently we only showed a few mock-ups to get their feedback but could not see the product actually being used. We could have also addressed policy blockers — get feedback from agencies on whether Doculens submitted forms will be valid for audit. Lastly, to work with stakeholders on how to optimise the entire application process, explore more flows and implement more features (such as end-to-end encryption).
 
**Takeaway/learnings:**
User interviews are critical in developing a good product that brings impact. Otherwise, we will just be building a nice product that serves no one. Also, be ready to pivot based on user needs rather than own assumptions, design for pivotability.

![Doculens product demo image](/images/doculens-snapshot.jpeg)