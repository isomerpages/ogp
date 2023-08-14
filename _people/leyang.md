---
title: Tan, Le Yang
permalink: /people/leyang
description: "Tan, Le Yang - Serious Title"
id: leyang
name: Tan, Le Yang
joinDate: 1970-01-01
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The bond that links your true family is not one of blood, but of respect
  and joy in each other’s life.
linkedinId: leyang

---

{%- assign staff = site.data.people | find: "id", "leyang" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
