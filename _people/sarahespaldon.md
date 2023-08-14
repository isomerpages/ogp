---
title: Espaldon, Sarah
permalink: /people/sarahespaldon
description: "Espaldon, Sarah - Serious Title"
id: sarahespaldon
name: Espaldon, Sarah
joinDate: 2019-04-11
function: marketing
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Ohana means family and family means nobody gets left behind or forgotten.
linkedinId: sarahespaldon

---

{%- assign staff = site.data.people | find: "id", "{{page.id}}" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.marketing %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
