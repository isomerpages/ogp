---
title: Tan, Zi Xiang
permalink: /aboutus/eng/zixiang
description: "Tan, Zi Xiang - Job Title"
third_nav_title: Software Engineering
id: zixiang
name: Tan, Zi Xiang
joinDate: 2022-10-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: When trouble comes, it’s your family that supports you.
linkedinId: zixiang

---

{%- assign staff = site.data.people | find: "id", "zixiang" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
