---
title: Tan, Huiyi
permalink: /people/max
description: "Tan, Huiyi - Job Title"
third_nav_title: Software Engineering
id: max
name: Tan, Huiyi
joinDate: 2023-06-03
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family is the heart of a home.
linkedinId: max

---

{%- assign staff = site.data.people | find: "id", "max" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
