---
title: Ne, Didymus
permalink: /people/didymus
description: "Ne, Didymus - Job Title"
id: didymus
name: Ne, Didymus
joinDate: 2023-08-05
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Families are the compass that guides us. They are the inspiration to
  reach great heights, and our comfort when we occasionally falter.
linkedinId: didymus

---

{%- assign staff = site.data.people | find: "id", "didymus" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
