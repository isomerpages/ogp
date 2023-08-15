---
title: Pay Si Ying, Fiona
permalink: /people/fiona
description: "Pay Si Ying, Fiona - Job Title"
third_nav_title: Software Engineering
id: fiona
name: Pay Si Ying, Fiona
joinDate: 24/07/2023
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family ties mean that no matter how much you might want to run from your
  family, you can’t.
linkedinId: fiona

---

{%- assign staff = site.data.people | find: "id", "fiona" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
