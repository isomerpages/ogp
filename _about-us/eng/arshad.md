---
title: s/o Abdul Samad, Arshad Ali
permalink: /aboutus/eng/arshad
description: "s/o Abdul Samad, Arshad Ali - Job Title"
third_nav_title: Software Engineering
id: arshad
name: s/o Abdul Samad, Arshad Ali
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Treat your family like friends and your friends like family.
linkedinId: arshad

---

{%- assign staff = site.data.people | find: "id", "arshad" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
