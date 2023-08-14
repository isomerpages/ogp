---
title: Yu Ling, Tan
permalink: /people/yuling
description: "Yu Ling, Tan - Serious Title"
id: yuling
name: Yu Ling, Tan
joinDate: 25/09/2023
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: A happy family is but an earlier heaven.
linkedinId: yuling

---

{%- assign staff = site.data.people | find: "id", "{{page.id}}" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
