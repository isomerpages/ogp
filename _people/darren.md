---
title: Ng, Darren
permalink: /people/darren
description: "Ng, Darren - Job Title"
id: darren
name: Ng, Darren
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The most important thing in the world is family and love.
linkedinId: darren

---

{%- assign staff = site.data.people | find: "id", "darren" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
