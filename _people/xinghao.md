---
title: Yang, XingHao
permalink: /people/xinghao
description: "Yang, XingHao - Job Title"
third_nav_title: Software Engineering
id: xinghao
name: Yang, XingHao
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family and friendships are two of the greatest facilitators of happiness.
linkedinId: xinghao

---

{%- assign staff = site.data.people | find: "id", "xinghao" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
