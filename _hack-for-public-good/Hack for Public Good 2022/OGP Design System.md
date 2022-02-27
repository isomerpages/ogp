---
title: OGP Design System
permalink: /hackathon/2022/ogpdesignsystem
description: ""
third_nav_title: Hack for Public Good 2022
---
<iframe allowfullscreen="true" height="515" width="100%" frameborder="0" src="https://docs.google.com/presentation/d/e/2PACX-1vRfsDFExNtMg7cqCLWJLaHaJDqW5jmqBxNEOB6gNaROMC-26p5UxsL39nQPJCRXHl9JEMbbWY1FKn1P/embed?start=false&loop=false&delayms=3000" ></iframe>

#### What is OGP Design System?
An accessible multi-brand design system for OGP products.

#### What motivated you to build this product?
Many products within OGP are using their own design systems which leads to visual and interaction inconsistencies and duplication of work designing and building components and patterns.
 Visual and interaction consistency is important for us because it removes confusion and cognitive load for our users. It strengthens their intuition so they understand and expect certain behaviour from the elements in our products.
 
We also wanted to create a base design system which every product could use as a starting point and build on top of if necessary. This way we could direct our focus more toward product and user challenges rather than recreating components over and over.

#### What tech stack did you use?

React, with ChakraUI as the underlying theming library. Package is built using Rollup. Netlify CMS is used for documentation of the components.
 You can view it at [https://design.hack.gov.sg](https://design.hack.gov.sg)
#### What were the key challenges you faced in building CalSG? 

##### Design
For design, deep diving into many different topics within a short period of time: understanding and implementing the concept of tokens, theming, exploring colour palettes, creating complex components such as Tables.
 
##### Engineering
Engineering wise, it was a challenge trying to get the published package to work across multiple tool chains (such as getting ESM dependencies to work well together in projects that may not support them). It was also a lot of trial and error to get the package size down, by using tree-shaking techniques. That is still a work in progress, to be honest. We’ll get there one day.

#### What is the product vision for CalSG? 
We want to create a shared design language and visual consistency across OGP products by using reusable components and patterns, as well as following usage and accessibility guidelines. Creating a shared design language provides familiarity across the different OGP products for users.

As an extension to creating components, understanding the thinking behind how and when to apply them is also important. Creating guidelines for usage educates both designers and non-designers to be more aware of creating a good experience for the users.
 
For both design and engineering, the ideal state would be for all OGP products to extend from this base design system, so as to reduce redundant design and engineering work, increase efficiency in implementation, and create consistent designs across all our products.
 
Extensions for engineering would include more components, handling of dark/light mode, and making it easier for non-engineers to update non-technical aspects of the design system such as documentation.
 
Another extension could be to shard out the existing tokens and produce more product-specific tokens that can be easily layered on the design system for additional customization.

#### Fun facts!
**One interesting finding:**\\
Having both ESM and CJS compatibility at the same time is painful. It is also really hard to make generic enough components yet abstracting away the non-essential configuration options.

**One thing you'd have done differently:**\\
Test the usability of the new system by using it in our respective products such as Form, Isomer, AskGov, etc.

Engineering wise, we could have done more research on other design system packages and understanding why they chose to structure it that way, and incorporating it into the current system.

**Takeaway/learnings:**\\
Was pleasantly surprised that engineers are really supportive when we want to test out new tools and plugins! We have the best teammates.

![CalSG product demo image](/images/ogp-design-system-snapshot.jpeg)