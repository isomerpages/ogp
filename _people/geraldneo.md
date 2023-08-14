---
title: Neo, Gerald
permalink: /people/geraldneo
description: "Neo, Gerald - Serious Title"
id: geraldneo
name: Neo, Gerald
joinDate: 22/05/2023
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The only rock I know that stays steady, the only institution I know that
  works, is the family.
linkedinId: geraldneo

---

{%- assign staff = site.data.people | find: "id", "geraldneo" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
