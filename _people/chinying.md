---
title: Seah, Chin Ying
permalink: /people/chinying
description: "Seah, Chin Ying - Job Title"
third_nav_title: Software Engineering
id: chinying
name: Seah, Chin Ying
joinDate: 19/11/2018
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The family is the test of freedom; because the family is the only thing
  that the free man makes for himself and by himself.
linkedinId: chinying

---

{%- assign staff = site.data.people | find: "id", "chinying" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
