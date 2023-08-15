---
title: Jain, Aditya
permalink: /aboutus/eng/aditya
description: "Jain, Aditya - Job Title"
third_nav_title: Software Engineering
id: aditya
name: Jain, Aditya
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: To us, family means putting your arms around each other and being there.
linkedinId: aditya

---

{%- assign staff = site.data.people | find: "id", "aditya" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
