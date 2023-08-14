---
title: Tjide, Lisa
permalink: /people/lisa
description: "Tjide, Lisa - Serious Title"
id: lisa
name: Tjide, Lisa
joinDate: 26/11/2018
function: pm
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The informality of family life is a blessed condition that allows us all
  to become our best while looking our worst.
linkedinId: lisa

---

{%- assign staff = site.data.people | find: "id", "{{page.id}}" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.pm %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
