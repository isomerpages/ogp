---
title: Dong, Wen Jia
permalink: /people/wenjia
description: "Dong, Wen Jia - Serious Title"
id: wenjia
name: Dong, Wen Jia
joinDate: 17/07/2023
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family isn’t always blood. It’s the people in your life who want you in
  theirs; the ones who accept you for who you are. The ones that would do
  anything to see you smile and who love you no matter what.
linkedinId: wenjia

---

{%- assign staff = site.data.people | find: "id", "{{page.id}}" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
