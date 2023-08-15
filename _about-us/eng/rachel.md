---
title: Rachel, Tan Si Ying
permalink: /aboutus/eng/rachel
description: "Rachel, Tan Si Ying - Job Title"
third_nav_title: Software Engineering
id: rachel
name: Rachel, Tan Si Ying
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The family is one of nature’s masterpieces.
linkedinId: rachel

---

{%- assign staff = site.data.people | find: "id", "rachel" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
