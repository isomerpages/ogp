---
title: Ang, Jasmine
permalink: /people/jasmine
description: "Ang, Jasmine - Job Title"
third_nav_title: Software Engineering
id: jasmine
name: Ang, Jasmine
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Nothing is better than going home to family and eating good food and relaxing
linkedinId: jasmine

---

{%- assign staff = site.data.people | find: "id", "jasmine" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
