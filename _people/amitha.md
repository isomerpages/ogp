---
title: Fernando, Amitha
permalink: /aboutus/corporate/amitha
description: "Fernando, Amitha - Job Title"
third_nav_title: Corporate Team
id: amitha
name: Fernando, Amitha
joinDate: 1970-01-01
function: corporate
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Some people are worth melting for.
linkedinId: amitha

---

{%- assign staff = site.data.people | find: "id", "amitha" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.corporate %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
