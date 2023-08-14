---
title: Loh, Benjamin
permalink: /people/benjaminloh
description: "Loh, Benjamin - Job Title"
id: benjaminloh
name: Loh, Benjamin
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Where there is family, there is love.
linkedinId: benjaminloh

---

{%- assign staff = site.data.people | find: "id", "benjaminloh" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
