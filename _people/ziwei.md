---
title: Lim, Zi Wei
permalink: /people/ziwei
description: "Lim, Zi Wei - Job Title"
third_nav_title: Software Engineering
id: ziwei
name: Lim, Zi Wei
joinDate: 2022-04-07
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Some people are worth melting for.
linkedinId: ziwei

---

{%- assign staff = site.data.people | find: "id", "ziwei" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
