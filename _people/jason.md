---
title: Chong, Jason
permalink: /aboutus/eng/jason
description: "Chong, Jason - Job Title"
third_nav_title: Software Engineering
id: jason
name: Chong, Jason
joinDate: 2020-11-05
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: A happy family is but an earlier heaven.
linkedinId: jason
functionName: Software Engineering

---

{%- assign staff = site.data.people | find: "id", "jason" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
