---
title: Lim, Jia Yee
permalink: /people/jiayee
description: "Lim, Jia Yee - Job Title"
third_nav_title: Software Engineering
id: jiayee
name: Lim, Jia Yee
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: I didn’t give you the gift of life, but life gave me the gift of you.
linkedinId: jiayee

---

{%- assign staff = site.data.people | find: "id", "jiayee" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
