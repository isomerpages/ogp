---
title: Tan, Junming
permalink: /aboutus/corporate/joshua
description: "Tan, Junming - Job Title"
third_nav_title: Corporate Team
id: joshua
name: Tan, Junming
joinDate: 2021-06-09
functionId: corporate
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: It didn’t matter how big our house was; it mattered that there was love in it.
linkedinId: joshua
functionName: Corporate Team

---

{%- assign staff = site.data.people | find: "id", "joshua" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.corporate %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
