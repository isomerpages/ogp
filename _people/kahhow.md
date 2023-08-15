---
title: Lee, Kahhow
permalink: /aboutus/ops/kahhow
description: "Lee, Kahhow - Job Title"
third_nav_title: Product Operations
id: kahhow
name: Lee, Kahhow
joinDate: 1970-01-01
functionId: ops
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: It’s all about the quality of life and finding a happy balance between
  work and friends and family.
linkedinId: kahhow
functionName: Product Operations

---

{%- assign staff = site.data.people | find: "id", "kahhow" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.ops %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
