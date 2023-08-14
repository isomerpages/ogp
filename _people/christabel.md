---
title: Neo, Xiuwen Christabel
permalink: /people/christabel
description: "Neo, Xiuwen Christabel - Job Title"
id: christabel
name: Neo, Xiuwen Christabel
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: When trouble comes, it’s your family that supports you.
linkedinId: christabel

---

{%- assign staff = site.data.people | find: "id", "christabel" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
