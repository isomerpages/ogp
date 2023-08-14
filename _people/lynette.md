---
title: Lee, Lynette
permalink: /people/lynette
description: "Lee, Lynette - Serious Title"
id: lynette
name: Lee, Lynette
joinDate: 2023-01-08
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Treat your family like friends and your friends like family.
linkedinId: lynette

---

{%- assign staff = site.data.people | find: "id", "{{page.id}}" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
