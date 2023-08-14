---
title: Ang, Chien Ling
permalink: /people/chienling
description: "Ang, Chien Ling - Job Title"
id: chienling
name: Ang, Chien Ling
joinDate: 2021-10-08
function: people
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The most important thing in the world is family and love.
linkedinId: chienling

---

{%- assign staff = site.data.people | find: "id", "chienling" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.people %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
