---
title: Damodaran, Hanu
permalink: /people/hanu
description: "Damodaran, Hanu - Serious Title"
id: hanu
name: Damodaran, Hanu
joinDate: 27/02/2023
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Our family is a circle of strength of love with every birth and every
  union the circle grows.
linkedinId: hanu

---

{%- assign staff = site.data.people | find: "id", "hanu" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
