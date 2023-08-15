---
title: Mahajan, Antariksh
permalink: /aboutus/eng/antariksh
description: "Mahajan, Antariksh - Job Title"
third_nav_title: Software Engineering
id: antariksh
name: Mahajan, Antariksh
joinDate: 2020-02-03
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: It didn’t matter how big our house was; it mattered that there was love in it.
linkedinId: antariksh

---

{%- assign staff = site.data.people | find: "id", "antariksh" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
