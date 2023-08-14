---
title: Ang, Yi Xin
permalink: /people/yixin
description: "Ang, Yi Xin - Job Title"
id: yixin
name: Ang, Yi Xin
joinDate: 2023-06-03
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: To us, family means putting your arms around each other and being there.
linkedinId: yixin

---

{%- assign staff = site.data.people | find: "id", "yixin" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
