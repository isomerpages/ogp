---
title: Tan, Jie Yin
permalink: /people/jieyin
description: "Tan, Jie Yin - Job Title"
third_nav_title: Software Engineering
id: jieyin
name: Tan, Jie Yin
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The family – that dear octopus from whose tentacles we never quite
  escape, nor, in our inmost hearts, ever quite wish to.
linkedinId: jieyin

---

{%- assign staff = site.data.people | find: "id", "jieyin" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
