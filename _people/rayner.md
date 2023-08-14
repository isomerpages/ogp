---
title: Loh, Rayner
permalink: /people/rayner
description: "Loh, Rayner - Job Title"
id: rayner
name: Loh, Rayner
joinDate: 2023-03-04
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family gives you the roots to stand tall and strong.
linkedinId: rayner

---

{%- assign staff = site.data.people | find: "id", "rayner" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
