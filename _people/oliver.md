---
title: Chan, Oliver
permalink: /people/oliver
description: "Chan, Oliver - Serious Title"
id: oliver
name: Chan, Oliver
joinDate: 2021-12-13
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family ties mean that no matter how much you might want to run from your
  family, you can’t.
linkedinId: oliver

---

{%- assign staff = site.data.people | find: "id", "{{page.id}}" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
