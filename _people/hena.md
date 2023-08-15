---
title: Shah, Hena
permalink: /people/hena
description: "Shah, Hena - Job Title"
third_nav_title: Product Management
id: hena
name: Shah, Hena
joinDate: 1970-01-01
function: pm
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: There is no doubt that it is around the family and the home that all the
  greatest virtues… are created, strengthened and maintained.
linkedinId: hena

---

{%- assign staff = site.data.people | find: "id", "hena" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.pm %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
