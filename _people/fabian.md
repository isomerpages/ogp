---
title: Chia Hup Peng, Fabian
permalink: /aboutus/eng/fabian
description: "Chia Hup Peng, Fabian - Job Title"
third_nav_title: Software Engineering
id: fabian
name: Chia Hup Peng, Fabian
joinDate: 2022-04-07
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: It’s all about the quality of life and finding a happy balance between
  work and friends and family.
linkedinId: fabian

---

{%- assign staff = site.data.people | find: "id", "fabian" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
