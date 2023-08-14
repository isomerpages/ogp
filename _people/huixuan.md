---
title: Leow, Hui Xuan
permalink: /people/huixuan
description: "Leow, Hui Xuan - Serious Title"
id: huixuan
name: Leow, Hui Xuan
joinDate: 2022-04-07
function: policy
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The family is the test of freedom; because the family is the only thing
  that the free man makes for himself and by himself.
linkedinId: huixuan

---

{%- assign staff = site.data.people | find: "id", "huixuan" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.policy %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
