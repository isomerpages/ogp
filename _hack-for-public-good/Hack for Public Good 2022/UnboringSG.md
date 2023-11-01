---
title: UnboringSG
permalink: /hackathon/2022/unboringsg/
description: ""
third_nav_title: Hack for Public Good 2022
---


<iframe allowfullscreen="true" height="515" width="100%" frameborder="0" src="https://docs.google.com/presentation/d/e/2PACX-1vRRBLBCQGdFGur9KOyiDnsj9phdGPRe34UK_7YRwuTc35UdFEM6ysSin24QBqtlMWxRySZGllBPEY6_/embed?start=false&loop=false&delayms=3000" ></iframe>

#### What is UnboringSG?
UnboringSG is a website and browser extension that aims to help Singaporean residents discover interesting things to eat, do, and learn in the city, and challenges the perception that Singapore is ‘boring’.

It is kind of like your favourite colleague telling you about that cool new thing they found last weekend!

#### What motivated you to build this product?
UnboringSG was born out of a genuine belief that there’s a LOT more to Singapore than is typically believed or explored. Much of this has to do with the picture-perfect impression that most international tourists tend to have, and a lack of awareness among local residents.

While several great resources already exist for people to find interesting things to do or experience, there are fundamental challenges of discoverability and accessibility. Activities and ideas are scattered across various sources, which means people would need to download multiple apps (and remember to open them regularly enough) to find inspiration.

UnboringSG solves these challenges in a simple, elegant way: the inspiration lives in your browser, so you’re shown something new each time you open a new tab – something we all do many times a day. To keep things fresh and interesting, the database is a combination of curated activities from Singapore Tourism Board’s (STB) content hub, and inspiration that’s continuously being crowdsourced from the public (using form.sg and within the browser extension itself).

At a broader level, we want to encourage a deeper appreciation of Singapore and all the hidden wonders it has to offer, and in the longer term, help broaden the view the world holds of Singapore as a tourist destination.

#### What tech stack did you use?

For the [website](https://github.com/thorwebdev/unboring.sg/tree/main/website) and [API layer](https://github.com/thorwebdev/unboring.sg/tree/main/website/pages/api), we used [Next.js](https://nextjs.org/) hosted on [Vercel](https://vercel.com/home), and for the backend data layer we used [Supabase](https://supabase.com/), probably the best stack for building MVPs quickly.

For the user interface we utilised [Open Government Products Design System](https://github.com/opengovsg/design-system), one of the other Hack for Public Good projects, which uses Chakra UI under the hood.

The [Chrome extension](https://github.com/thorwebdev/unboring.sg/tree/main/chrome_extension) was built in VanillaJS and is using the website and APIs under the hood.

#### What were the key challenges you faced in building UnboringSG? 

The single biggest challenge was ensuring we had a large enough database for each of our three categories: Eat, Do, and Learn. Since the product allows a user to ‘shuffle’ through a few ideas in each category, it was important for us to have enough content to show without any repetition.

Our database was initially populated with personal recommendations from our team, friends, and family, but this approach was very hard to scale and sustain. We were fortunate to get support from the Singapore Tourism Board, who gave us access to their Tourism Information & Services Hub (TIH) APIs, which allowed us to import a large number of recommendations at once. 

Another challenge we foresee is having to manually curate and moderate content, to prevent duplicate or outdated information being shown to users.

#### What is the product vision for UnboringSG? 
We want UnboringSG to be an engaging but low-effort way for people to find endless inspiration in Singapore, which essentially involves enabling people to find and share inspiration within their current digital environments. In the future, we plan to supercharge our crowdsourcing capabilities by allowing people to effortlessly submit recommendations by tagging us on platforms like Instagram or TikTok. We’ve also considered the future possibility of location-based recommendations, allowing people to discover new things to eat, do, or learn even in areas they thought they were already familiar with.

There is also great potential for partnerships with local discovery/activity-based platforms, or even government agencies, who could use this as a channel to organically reach out to an audience beyond their existing apps or websites.

#### Fun facts!
**One interesting finding:**\\

When going through the initial list of submissions from teammates and friends, we were amazed at how many new things each of us discovered – it was a clear indication that we’d be filling a gap for a much wider audience with UnboringSG.

**One thing you'd have done differently:**\\

Better curated recommendations, and possibly included content from more sources.

**Takeaway/learnings:**\\

First off, that Singapore is NOT boring! We also learned some of the challenges of sourcing and curating large quantities of content.

![UnboringSG product demo image](/images/unboringsg-snapshot.jpg)

#### Meet the Team

- [Kathleen Koh](https://www.linkedin.com/in/kathleenkohhuiying/)
- [Sarah Espaldon](https://www.linkedin.com/in/sarahespaldon/)
- [Shannen Ho](https://www.linkedin.com/in/shannen-ho/)
- [Shantanu (Shanty) Basrur](https://www.linkedin.com/in/sbasrur/)
- [Thorsten Schaeff (@thorwebdev) - co-hacker from Supabase](https://www.linkedin.com/in/thorwebdev/)
