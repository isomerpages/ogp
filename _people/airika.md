---
title: Takeguchi, Airika
permalink: /people/airika
description: "Takeguchi, Airika - Job Title"
third_nav_title: People Team
id: airika
name: Takeguchi, Airika
joinDate: 1970-01-01
function: corporate
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Life is beautiful. It’s about giving. It’s about family.
linkedinId: airika

---

{%- assign staff = site.data.people | find: "id", "airika" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.corporate %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
