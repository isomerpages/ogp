---
title: Teo, Clifford
permalink: /people/clifford
description: "Teo, Clifford - Job Title"
id: clifford
name: Teo, Clifford
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Other things may change us, but we start and end with the family.
linkedinId: clifford

---

{%- assign staff = site.data.people | find: "id", "clifford" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
