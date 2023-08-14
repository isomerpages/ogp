---
title: Tan, Alwyn Solomon
permalink: /people/alwyn
description: "Tan, Alwyn Solomon - Serious Title"
id: alwyn
name: Tan, Alwyn Solomon
joinDate: 1970-01-01
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Where there is family, there is love.
linkedinId: alwyn

---

{%- assign staff = site.data.people | find: "id", "alwyn" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
