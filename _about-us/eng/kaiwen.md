---
title: Huang, Kaiwen
permalink: /aboutus/eng/kaiwen
description: "Huang, Kaiwen - Senior Software Engineer"
third_nav_title: Software Engineering
id: kaiwen
name: Huang, Kaiwen
joinDate: 2016-04-07
functionId: eng
jobTitle: Senior Software Engineer
curProducts: "* PaySG"
pastProducts: |-
  * Parking.sg
  * Scamshield
  * FormSG
  * Redeem
accomplishments: >-
  * Tech lead for Redeem, ParkingSG, and PawsTogether

  * Served as the subject matter expert on mobile app development across OGP, consulting on multiple products and driving discussions with Apple on OGP organisation accounts

  * Worked with the other FinTech team members to drive a strong team culture of user-centricity, iterativeness, and cross-functional collaboration
quote: The most important thing in the world is family and love.
linkedinId: kaiwen

---

{%- assign staff = site.data.people | find: "id", "kaiwen" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
