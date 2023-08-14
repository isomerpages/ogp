---
title: Vasu, Reshma
permalink: /people/reshma
description: "Vasu, Reshma - Serious Title"
id: reshma
name: Vasu, Reshma
joinDate: 1970-01-01
function: ops
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Families are like fudge – mostly sweet with a few nuts.
linkedinId: reshma

---

{%- assign staff = site.data.people | find: "id", "{{page.id}}" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.ops %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
