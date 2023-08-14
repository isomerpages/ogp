---
title: Bin Shahril Shintaro, Muhammad Shazli
permalink: /people/shazli
description: "Bin Shahril Shintaro, Muhammad Shazli - Job Title"
id: shazli
name: Bin Shahril Shintaro, Muhammad Shazli
joinDate: 1970-01-01
function: ops
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The informality of family life is a blessed condition that allows us all
  to become our best while looking our worst.
linkedinId: shazli

---

{%- assign staff = site.data.people | find: "id", "shazli" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.ops %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
