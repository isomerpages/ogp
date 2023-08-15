---
title: Espaldon, Sarah
permalink: /aboutus/corporate/sarahespaldon
description: "Espaldon, Sarah - Job Title"
third_nav_title: Corporate Team
id: sarahespaldon
name: Espaldon, Sarah
joinDate: 2019-04-11
functionId: corporate
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Ohana means family and family means nobody gets left behind or forgotten.
linkedinId: sarahespaldon
functionName: Corporate Team

---

{%- assign staff = site.data.people | find: "id", "sarahespaldon" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.corporate %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
