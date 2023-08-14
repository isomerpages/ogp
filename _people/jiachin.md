---
title: Er, Jia Chin
permalink: /people/jiachin
description: "Er, Jia Chin - Job Title"
id: jiachin
name: Er, Jia Chin
joinDate: 2021-04-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: I didn’t give you the gift of life, but life gave me the gift of you.
linkedinId: jiachin

---

{%- assign staff = site.data.people | find: "id", "jiachin" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
