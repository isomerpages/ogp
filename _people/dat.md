---
title: Le Thanh, Dat
permalink: /people/dat
description: "Le Thanh, Dat - Serious Title"
id: dat
name: Le Thanh, Dat
joinDate: 1970-01-01
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The memories we make with our family is everything.
linkedinId: dat

---

{%- assign staff = site.data.people | find: "id", "dat" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
