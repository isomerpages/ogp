---
title: Menon, Nitya
permalink: /people/nitya
description: "Menon, Nitya - Serious Title"
id: nitya
name: Menon, Nitya
joinDate: 1970-01-01
function: partnerships
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The bond that links your true family is not one of blood, but of respect
  and joy in each other’s life.
linkedinId: nitya

---

{%- assign staff = site.data.people | find: "id", "nitya" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.partnerships %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
