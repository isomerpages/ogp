---
title: Patanapanlert, Pete
permalink: /people/pete
description: "Patanapanlert, Pete - Serious Title"
id: pete
name: Patanapanlert, Pete
joinDate: 27/03/2023
function: pm
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Being part of a family means smiling for photos.
linkedinId: pete

---

{%- assign staff = site.data.people | find: "id", "pete" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.pm %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
