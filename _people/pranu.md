---
title: Pranu, Sarna
permalink: /aboutus/eng/pranu
description: "Pranu, Sarna - Job Title"
third_nav_title: Software Engineering
id: pranu
name: Pranu, Sarna
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The memories we make with our family is everything.
linkedinId: pranu
functionName: Software Engineering

---

{%- assign staff = site.data.people | find: "id", "pranu" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
