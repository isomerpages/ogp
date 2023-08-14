---
title: Hsu, Zhong Jun
permalink: /people/zhongjun
description: "Hsu, Zhong Jun - Serious Title"
id: zhongjun
name: Hsu, Zhong Jun
joinDate: 2022-08-08
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: When trouble comes, it’s your family that supports you.
linkedinId: zhongjun

---

{%- assign staff = site.data.people | find: "id", "{{page.id}}" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
