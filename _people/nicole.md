---
title: Loh Wan Hua, Nicole
permalink: /people/nicole
description: "Loh Wan Hua, Nicole - Serious Title"
id: nicole
name: Loh Wan Hua, Nicole
joinDate: 1970-01-01
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: "Family: A social unit where the father is concerned with parking space,
  the children with outer space, and the mother with closet space."
linkedinId: nicole

---

{%- assign staff = site.data.people | find: "id", "{{page.id}}" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
