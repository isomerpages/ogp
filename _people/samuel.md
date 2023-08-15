---
title: Koh, Samuel
permalink: /aboutus/ops/samuel
description: "Koh, Samuel - Job Title"
third_nav_title: Product Operations
id: samuel
name: Koh, Samuel
joinDate: 1970-01-01
functionId: ops
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Happiness is having a large, loving, caring, close-knit family in another city.
linkedinId: samuel
functionName: Product Operations

---

{%- assign staff = site.data.people | find: "id", "samuel" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.ops %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
