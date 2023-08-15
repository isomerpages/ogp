---
title: Ho, Ivan
permalink: /aboutus/eng/ivan
description: "Ho, Ivan - Job Title"
third_nav_title: Software Engineering
id: ivan
name: Ho, Ivan
joinDate: 2020-06-04
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: "Call it a clan, call it a network, call it a tribe, call it a family:
  Whatever you call it, whoever you are, you need one."
linkedinId: ivan

---

{%- assign staff = site.data.people | find: "id", "ivan" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
