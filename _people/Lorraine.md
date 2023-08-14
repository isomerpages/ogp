---
title: Choo, Lorraine
permalink: /people/lorraine
description: "Choo, Lorraine - Serious Title"
id: lorraine
name: Choo, Lorraine
joinDate: 1970-01-01
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The family is the test of freedom; because the family is the only thing
  that the free man makes for himself and by himself.
linkedinId: lorraine

---

{%- assign staff = site.data.people | find: "id", "lorraine" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
