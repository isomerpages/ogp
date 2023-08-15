---
title: Donyada, Jan
permalink: /aboutus/pm/jan
description: "Donyada, Jan - Job Title"
third_nav_title: Product Management
id: jan
name: Donyada, Jan
joinDate: 1970-01-01
function: pm
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family is not defined by our genes, it is built and maintained through love.
linkedinId: jan

---

{%- assign staff = site.data.people | find: "id", "jan" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.pm %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
