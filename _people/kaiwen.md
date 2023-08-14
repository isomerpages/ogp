---
title: Huang, Kaiwen
permalink: /people/kaiwen
description: "Huang, Kaiwen - Job Title"
id: kaiwen
name: Huang, Kaiwen
joinDate: 2016-04-07
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The most important thing in the world is family and love.
linkedinId: kaiwen

---

{%- assign staff = site.data.people | find: "id", "kaiwen" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
