---
title: Kabir, Raisa
permalink: /people/raisa
description: "Kabir, Raisa - Serious Title"
id: raisa
name: Kabir, Raisa
joinDate: 1970-01-01
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: In family life, love is the oil that eases friction, the cement that
  binds closer together, and the music that brings harmony.
linkedinId: raisa

---

{%- assign staff = site.data.people | find: "id", "raisa" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
