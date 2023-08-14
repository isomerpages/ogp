---
title: Spano, Nicolas
permalink: /people/nicolas
description: "Spano, Nicolas - Job Title"
id: nicolas
name: Spano, Nicolas
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Some people are worth melting for.
linkedinId: nicolas

---

{%- assign staff = site.data.people | find: "id", "nicolas" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
