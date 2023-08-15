---
title: Lo Wai Fun, Joanna
permalink: /people/joanna
description: "Lo Wai Fun, Joanna - Job Title"
third_nav_title: Software Engineering
id: joanna
name: Lo Wai Fun, Joanna
joinDate: 27/03/2023
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Rejoice with your family in the beautiful land of life.
linkedinId: joanna

---

{%- assign staff = site.data.people | find: "id", "joanna" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
