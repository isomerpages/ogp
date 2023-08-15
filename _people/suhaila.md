---
title: Roslan, Suhaila
permalink: /aboutus/ops/suhaila
description: "Roslan, Suhaila - Job Title"
third_nav_title: Product Operations
id: suhaila
name: Roslan, Suhaila
joinDate: 2021-05-04
function: ops
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family and friendships are two of the greatest facilitators of happiness.
linkedinId: suhaila

---

{%- assign staff = site.data.people | find: "id", "suhaila" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.ops %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
