---
title: Liao, Yihan
permalink: /people/yihan
description: "Liao, Yihan - Serious Title"
id: yihan
name: Liao, Yihan
joinDate: 17/05/2021
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: "Blended families: woven together by choice, strengthened together by
  love, tested by everything, and each uniquely ours."
linkedinId: yihan

---

{%- assign staff = site.data.people | find: "id", "{{page.id}}" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
