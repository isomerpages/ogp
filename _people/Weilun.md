---
title: Tan, Wei Lun
permalink: /people/weilun
description: "Tan, Wei Lun - Serious Title"
id: weilun
name: Tan, Wei Lun
joinDate: 1970-01-01
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Families are the compass that guides us. They are the inspiration to
  reach great heights, and our comfort when we occasionally falter.
linkedinId: weilun

---

{%- assign staff = site.data.people | find: "id", "weilun" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
