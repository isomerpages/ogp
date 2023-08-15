---
title: See, Zi Yang
permalink: /aboutus/eng/ziyang
description: "See, Zi Yang - Job Title"
third_nav_title: Software Engineering
id: ziyang
name: See, Zi Yang
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Our family is a circle of strength of love with every birth and every
  union the circle grows.
linkedinId: ziyang
functionName: Software Engineering

---

{%- assign staff = site.data.people | find: "id", "ziyang" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
