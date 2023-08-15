---
title: Tan Ying Jie, Dexter
permalink: /people/dexter
description: "Tan Ying Jie, Dexter - Job Title"
third_nav_title: Software Engineering
id: dexter
name: Tan Ying Jie, Dexter
joinDate: 2022-09-05
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: "Family: A social unit where the father is concerned with parking space,
  the children with outer space, and the mother with closet space."
linkedinId: dexter

---

{%- assign staff = site.data.people | find: "id", "dexter" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
