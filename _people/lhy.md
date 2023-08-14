---
title: Li, Hongyi
permalink: /people/lhy
description: "Li, Hongyi - Serious Title"
id: lhy
name: Li, Hongyi
joinDate: 1970-01-01
function: corporate
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Our family is a circle of strength of love with every birth and every
  union the circle grows.
linkedinId: lhy

---

{%- assign staff = site.data.people | find: "id", "{{page.id}}" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.corporate %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
