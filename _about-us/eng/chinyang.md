---
title: Oh, Chin Yang
permalink: /aboutus/eng/chinyang
description: "Oh, Chin Yang - Job Title"
third_nav_title: Software Engineering
id: chinyang
name: Oh, Chin Yang
joinDate: 2023-06-03
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Other things may change us, but we start and end with the family.
linkedinId: chinyang

---

{%- assign staff = site.data.people | find: "id", "chinyang" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
