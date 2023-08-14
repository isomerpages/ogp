---
title: R, Kishore
permalink: /people/kishore
description: "R, Kishore - Serious Title"
id: kishore
name: R, Kishore
joinDate: 1970-01-01
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family is family.
linkedinId: kishore

---

{%- assign staff = site.data.people | find: "id", "kishore" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
