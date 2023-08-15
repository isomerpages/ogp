---
title: Thoo, Wan Ling
permalink: /aboutus/eng/wanling
description: "Thoo, Wan Ling - Job Title"
third_nav_title: Software Engineering
id: wanling
name: Thoo, Wan Ling
joinDate: 13/09/2021
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Happiness is having a large, loving, caring, close-knit family in another city.
linkedinId: wanling

---

{%- assign staff = site.data.people | find: "id", "wanling" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
