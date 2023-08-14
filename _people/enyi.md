---
title: Leong, EnYi
permalink: /people/enyi
description: "Leong, EnYi - Job Title"
id: enyi
name: Leong, EnYi
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: A happy family is but an earlier heaven.
linkedinId: enyi

---

{%- assign staff = site.data.people | find: "id", "enyi" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
