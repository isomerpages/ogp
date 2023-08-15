---
title: Soh, Moses
permalink: /aboutus/pm/moses
description: "Soh, Moses - Job Title"
third_nav_title: Product Management
id: moses
name: Soh, Moses
joinDate: 2022-05-12
functionId: pm
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Ohana means family and family means nobody gets left behind or forgotten.
linkedinId: moses

---

{%- assign staff = site.data.people | find: "id", "moses" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.pm %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
