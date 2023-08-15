---
title: Woon Quan, Austin
permalink: /people/austin
description: "Woon Quan, Austin - Job Title"
third_nav_title: Software Engineering
id: austin
name: Woon Quan, Austin
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family is family.
linkedinId: austin

---

{%- assign staff = site.data.people | find: "id", "austin" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
