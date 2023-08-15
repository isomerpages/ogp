---
title: Chan, Daryl
permalink: /aboutus/eng/daryl
description: "Chan, Daryl - Job Title"
third_nav_title: Software Engineering
id: daryl
name: Chan, Daryl
joinDate: 2022-03-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Being part of a family means smiling for photos.
linkedinId: daryl

---

{%- assign staff = site.data.people | find: "id", "daryl" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
