---
title: Hong Malcolm, Ong Guan
permalink: /aboutus/eng/malcolm
description: "Hong Malcolm, Ong Guan - Job Title"
third_nav_title: Software Engineering
id: malcolm
name: Hong Malcolm, Ong Guan
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The only rock I know that stays steady, the only institution I know that
  works, is the family.
linkedinId: malcolm
functionName: Software Engineering

---

{%- assign staff = site.data.people | find: "id", "malcolm" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
