---
title: Tan, Kevan
permalink: /people/kevan
description: "Tan, Kevan - Serious Title"
id: kevan
name: Tan, Kevan
joinDate: 18/11/2019
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: To us, family means putting your arms around each other and being there.
linkedinId: kevan

---

{%- assign staff = site.data.people | find: "id", "kevan" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
