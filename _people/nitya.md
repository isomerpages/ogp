---
title: Menon, Nitya
permalink: /aboutus/transformation/nitya
description: "Menon, Nitya - Job Title"
third_nav_title: Partnerships & Transformation
id: nitya
name: Menon, Nitya
joinDate: 1970-01-01
functionId: transformation
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The bond that links your true family is not one of blood, but of respect
  and joy in each other’s life.
linkedinId: nitya
functionName: Partnerships & Transformation

---

{%- assign staff = site.data.people | find: "id", "nitya" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.transformation %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
