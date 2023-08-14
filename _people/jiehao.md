---
title: Kwa, Jie Hao
permalink: /people/jiehao
description: "Kwa, Jie Hao - Serious Title"
id: jiehao
name: Kwa, Jie Hao
joinDate: 2019-09-09
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Families are like fudge – mostly sweet with a few nuts.
linkedinId: jiehao

---

{%- assign staff = site.data.people | find: "id", "jiehao" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
