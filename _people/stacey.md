---
title: Tan Seok Sim, Stacey
permalink: /people/stacey
description: "Tan Seok Sim, Stacey - Job Title"
id: stacey
name: Tan Seok Sim, Stacey
joinDate: 2022-07-02
function: design
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Rejoice with your family in the beautiful land of life.
linkedinId: stacey

---

{%- assign staff = site.data.people | find: "id", "stacey" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.design %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
