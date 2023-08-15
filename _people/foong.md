---
title: Yi Zhuan, Foong
permalink: /aboutus/eng/foong
description: "Yi Zhuan, Foong - Job Title"
third_nav_title: Software Engineering
id: foong
name: Yi Zhuan, Foong
joinDate: 17/07/2023
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: My family is my life, and everything else comes second as far as what’s
  important to me.
linkedinId: foong

---

{%- assign staff = site.data.people | find: "id", "foong" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
