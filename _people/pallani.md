---
title: s/o Selvan, Pallanikumaran
permalink: /people/pallani
description: "s/o Selvan, Pallanikumaran - Job Title"
id: pallani
name: s/o Selvan, Pallanikumaran
joinDate: 2015-11-05
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family and friends are hidden treasures, seek them and enjoy their riches.
linkedinId: pallani

---

{%- assign staff = site.data.people | find: "id", "pallani" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
