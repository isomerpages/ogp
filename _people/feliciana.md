---
title: Natali, Feliciana
permalink: /aboutus/eng/feliciana
description: "Natali, Feliciana - Job Title"
third_nav_title: Software Engineering
id: feliciana
name: Natali, Feliciana
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: "Call it a clan, call it a network, call it a tribe, call it a family:
  Whatever you call it, whoever you are, you need one."
linkedinId: feliciana

---

{%- assign staff = site.data.people | find: "id", "feliciana" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
