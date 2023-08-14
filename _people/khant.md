---
title: Zaw, Khant
permalink: /people/khant
description: "Zaw, Khant - Job Title"
id: khant
name: Zaw, Khant
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The family is the test of freedom; because the family is the only thing
  that the free man makes for himself and by himself.
linkedinId: khant

---

{%- assign staff = site.data.people | find: "id", "khant" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
