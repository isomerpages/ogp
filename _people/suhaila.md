---
title: Roslan, Suhaila
permalink: /people/suhaila
description: "Roslan, Suhaila - Serious Title"
id: suhaila
name: Roslan, Suhaila
joinDate: 2021-05-04
function: ops
jobTitle: Serious Title
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
