---
title: Lin, Huiqing
permalink: /people/huiqing
description: "Lin, Huiqing - Serious Title"
id: huiqing
name: Lin, Huiqing
joinDate: 2021-06-09
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: We may have our differences, but nothing’s more important than family.
linkedinId: huiqing

---

{%- assign staff = site.data.people | find: "id", "huiqing" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
