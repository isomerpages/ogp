---
title: Hibberd, James
permalink: /aboutus/eng/james
description: "Hibberd, James - Job Title"
third_nav_title: Software Engineering
id: james
name: Hibberd, James
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: To us, family means putting your arms around each other and being there.
linkedinId: james
functionName: Software Engineering

---

{%- assign staff = site.data.people | find: "id", "james" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
