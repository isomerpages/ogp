---
title: Yak, Kian Feng
permalink: /aboutus/eng/richardyak
description: "Yak, Kian Feng - Job Title"
third_nav_title: Software Engineering
id: richardyak
name: Yak, Kian Feng
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: In time of test, family is best.
linkedinId: richardyak

---

{%- assign staff = site.data.people | find: "id", "richardyak" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
