---
title: Siow, Stephanie
permalink: /aboutus/transformation/stephanie
description: "Siow, Stephanie - Job Title"
third_nav_title: Partnerships & Transformation
id: stephanie
name: Siow, Stephanie
joinDate: 2022-01-04
functionId: transformation
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family is not defined by our genes, it is built and maintained through love.
linkedinId: stephanie
functionName: Partnerships & Transformation

---

{%- assign staff = site.data.people | find: "id", "stephanie" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.transformation %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
