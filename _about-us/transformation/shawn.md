---
title: Ten, Shawn
permalink: /aboutus/transformation/shawn
description: "Ten, Shawn - Job Title"
third_nav_title: Partnerships & Transformation
id: shawn
name: Ten, Shawn
joinDate: 1970-01-01
functionId: transformation
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: In family life, love is the oil that eases friction, the cement that
  binds closer together, and the music that brings harmony.
linkedinId: shawn

---

{%- assign staff = site.data.people | find: "id", "shawn" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.transformation %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
