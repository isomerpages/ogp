---
title: Lee, Zhi Ying
permalink: /aboutus/eng/zhiying
description: "Lee, Zhi Ying - Job Title"
third_nav_title: Software Engineering
id: zhiying
name: Lee, Zhi Ying
joinDate: 2023-08-05
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Stick to the basics, hold on to your family and friends – they will never
  go out of fashion.
linkedinId: zhiying

---

{%- assign staff = site.data.people | find: "id", "zhiying" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
