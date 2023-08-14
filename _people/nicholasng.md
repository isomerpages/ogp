---
title: Ng, Nicholas Zhi Hao
permalink: /people/nicholasng
description: "Ng, Nicholas Zhi Hao - Job Title"
id: nicholasng
name: Ng, Nicholas Zhi Hao
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Nothing is better than going home to family and eating good food and relaxing
linkedinId: nicholasng

---

{%- assign staff = site.data.people | find: "id", "nicholasng" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
