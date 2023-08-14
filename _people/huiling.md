---
title: Shi, Hui Ling
permalink: /people/huiling
description: "Shi, Hui Ling - Serious Title"
id: huiling
name: Shi, Hui Ling
joinDate: 1970-01-01
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: "Blended families: woven together by choice, strengthened together by
  love, tested by everything, and each uniquely ours."
linkedinId: huiling

---

{%- assign staff = site.data.people | find: "id", "huiling" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
