---
title: Bin Selamet, Sufyan
permalink: /aboutus/eng/sufyan
description: "Bin Selamet, Sufyan - Job Title"
third_nav_title: Software Engineering
id: sufyan
name: Bin Selamet, Sufyan
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Happiness is having a large, loving, caring, close-knit family in another city.
linkedinId: sufyan

---

{%- assign staff = site.data.people | find: "id", "sufyan" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
