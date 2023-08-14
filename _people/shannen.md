---
title: Ho Yun Fang, Shannen
permalink: /people/shannen
description: "Ho Yun Fang, Shannen - Job Title"
id: shannen
name: Ho Yun Fang, Shannen
joinDate: 1970-01-01
function: marketing
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The bond that links your true family is not one of blood, but of respect
  and joy in each other’s life.
linkedinId: shannen

---

{%- assign staff = site.data.people | find: "id", "shannen" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.marketing %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
