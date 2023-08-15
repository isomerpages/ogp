---
title: Gan, Hong Yao
permalink: /aboutus/eng/hongyao
description: "Gan, Hong Yao - Job Title"
third_nav_title: Software Engineering
id: hongyao
name: Gan, Hong Yao
joinDate: 14/08/2023
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: "Family: A social unit where the father is concerned with parking space,
  the children with outer space, and the mother with closet space."
linkedinId: hongyao

---

{%- assign staff = site.data.people | find: "id", "hongyao" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
