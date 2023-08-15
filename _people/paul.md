---
title: Tay, Paul hong
permalink: /aboutus/pm/paul
description: "Tay, Paul hong - Job Title"
third_nav_title: Product Management
id: paul
name: Tay, Paul hong
joinDate: 1970-01-01
function: pm
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Nothing is better than going home to family and eating good food and relaxing
linkedinId: paul

---

{%- assign staff = site.data.people | find: "id", "paul" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.pm %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
