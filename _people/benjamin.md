---
title: Bowes, Benjamin
permalink: /people/benjamin
description: "Bowes, Benjamin - Job Title"
id: benjamin
name: Bowes, Benjamin
joinDate: 1970-01-01
function: design
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Families are like fudge – mostly sweet with a few nuts.
linkedinId: benjamin

---

{%- assign staff = site.data.people | find: "id", "benjamin" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.design %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
