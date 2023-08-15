---
title: Li, Hongyi
permalink: /aboutus/corporate/lhy
description: "Li, Hongyi - Director OGP"
third_nav_title: Corporate Team
id: lhy
name: Li, Hongyi
joinDate: 1970-01-01
functionId: corporate
jobTitle: Director OGP
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Our family is a circle of strength of love with every birth and every
  union the circle grows.
linkedinId: lhy
functionName: Corporate Team

---

{%- assign staff = site.data.people | find: "id", "lhy" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.corporate %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
