---
title: Sairi, Khaleedah
permalink: /people/khaleedah
description: "Sairi, Khaleedah - Job Title"
third_nav_title: Product Design
id: khaleedah
name: Sairi, Khaleedah
joinDate: 2021-12-07
function: design
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Stick to the basics, hold on to your family and friends – they will never
  go out of fashion.
linkedinId: khaleedah

---

{%- assign staff = site.data.people | find: "id", "khaleedah" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.design %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
