---
title: Data Buddy
permalink: /hackathon/2022/databuddy
description: ""
third_nav_title: Hack for Public Good 2023
---

<iframe allowfullscreen="true" height="515" width="100%" frameborder="0" src="https://docs.google.com/presentation/d/e/2PACX-1vRQeUHSC0ABp-I9mI0Rxxj92dQnF3fW8-O4GYgG_jlEbKkjwwlQrIp3KAS70yYJT8mRBoKG8gJYUZlJ/embed?start=false&loop=false&delayms=3000" ></iframe>

Watch our Finale presentation on [YouTube](https://youtu.be/3gHhFwrz5SY)!

#### What is Data Buddy?
A no-code tool that allows you to turn transactional data into workflow apps in minutes.

#### What motivated you to build this product?
Transactional data is at the heart of every agency process/workflow. Data producers want a way to provide data in a more easily consumed way (e.g. through APIs that their system can integrate with, a way to clean or validate data). Data consumers want a way to make sense of their data or build apps that connect with the data. Yet, both producers and consumers don’t know how to solve their challenges. 

Data Buddy is a no-code tool that allows policymakers, IT teams ops staff to turn transactional data into workflow apps in minutes. First, we allow public officers to easily convert data into an API. Second, we provide public officers with the ability to both more easily produce data (through e.g. data validation or cleaning tools) and consume the data (e.g. through off-the-shelf apps for analytics, attendance tracking, kanban). 

#### What tech stack did you use?

Data Buddy API: Express, AWS Lambda, Amazon API Gateway,  DynamoDB
Data Buddy Apps: React, Amazon SES

#### What were the key challenges you faced in building Data Buddy? 

The key challenge that we faced was in finding a way to quickly convey the potential of the product to public officers. At first we started with just the API, but it was only understood by technical folks. This motivated us to build Data Buddy applications like “[FormSG](https://form.gov.sg/#!/) Integration”, which allows FormSG submissions to be stored in Data Buddy, which is immediately obvious to users how Data Buddy might work.

Given this challenge, we pivoted to make the product much more application-focused so public officers can see immediately how Data Buddy can improve their workflows. For example, we built “Analytics Buddy” which showcased how stored data can quickly convert into charts that are useful for public officers trying to analyse survey data collected from FormSG. 

We also built an “Attendance Buddy” because keeping track of attendance for classes or meetings is a common problem that we noticed when interviewing public officers. By using Data Buddy, an agency officer can easily set up a workflow where participants for an event can sign up through FormSG, have the participant list show up in Attendance Buddy and take attendance in the application itself.

#### What is the product vision for Data Buddy? 
In the future, any public officer will be able to use Data Buddy to spin up tools to automate their key processes even if they do not know how to code. 

#### Fun facts!
**One interesting finding:**\\
We experimented with storing data as blobs in S3 and then using S3 Select to query the data. We found this method to be feasible for use cases where data is written once and read multiple times. Since we need to be able to update the dataset, we moved to using DynamoDB.

**One thing you'd have done differently:**\\
There are actually a few things that we would have done differently with more time on hand:
1. Build more productivity apps
2. Package the API and productivity tools into a more coherent product/interface
3. Add authenticated API endpoint for modifying data

**Takeaway/learnings:**\\
A simple data API can enable many complex workflows

![Data Buddy product demo image](/images/databuddy-snapshot.jpeg)