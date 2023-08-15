---
title: Yap, Jackson
permalink: /aboutus/ops/jackson
description: "Yap, Jackson - Job Title"
third_nav_title: Product Operations
id: jackson
name: Yap, Jackson
joinDate: 31/08/2020
functionId: ops
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Treat your family like friends and your friends like family.
linkedinId: jackson

---

{%- assign staff = site.data.people | find: "id", "jackson" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.ops %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
