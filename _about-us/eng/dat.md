---
title: Le Thanh, Dat
permalink: /aboutus/eng/dat
description: "Le Thanh, Dat - Job Title"
third_nav_title: Software Engineering
id: dat
name: Le Thanh, Dat
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The memories we make with our family is everything.
linkedinId: dat

---

{%- assign staff = site.data.people | find: "id", "dat" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
