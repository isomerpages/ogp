---
title: Ding, Si Han
permalink: /aboutus/eng/sihan
description: "Ding, Si Han - Job Title"
third_nav_title: Software Engineering
id: sihan
name: Ding, Si Han
joinDate: 13/06/2022
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: "Blended families: woven together by choice, strengthened together by
  love, tested by everything, and each uniquely ours."
linkedinId: sihan
functionName: Software Engineering

---

{%- assign staff = site.data.people | find: "id", "sihan" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
