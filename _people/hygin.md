---
title: Fernandez, Hygin
permalink: /people/hygin
description: "Fernandez, Hygin - Job Title"
third_nav_title: Partnerships & Transformation
id: hygin
name: Fernandez, Hygin
joinDate: 1970-01-01
function: transformation
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: This is my family. I found it all on my own. It’s little, and broken, but
  still good. Yeah. Still good.
linkedinId: hygin

---

{%- assign staff = site.data.people | find: "id", "hygin" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.transformation %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
