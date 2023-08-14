---
title: Siow, Stephanie
permalink: /people/stephanie
description: "Siow, Stephanie - Serious Title"
id: stephanie
name: Siow, Stephanie
joinDate: 2022-01-04
function: partnerships
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family is not defined by our genes, it is built and maintained through love.
linkedinId: stephanie

---

{%- assign staff = site.data.people | find: "id", "{{page.id}}" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.partnerships %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
