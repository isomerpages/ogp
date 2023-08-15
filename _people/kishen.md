---
title: Ashok Kumar, Kishen
permalink: /aboutus/eng/kishen
description: "Ashok Kumar, Kishen - Job Title"
third_nav_title: Software Engineering
id: kishen
name: Ashok Kumar, Kishen
joinDate: 2022-06-06
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: In family life, love is the oil that eases friction, the cement that
  binds closer together, and the music that brings harmony.
linkedinId: kishen
functionName: Software Engineering

---

{%- assign staff = site.data.people | find: "id", "kishen" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
