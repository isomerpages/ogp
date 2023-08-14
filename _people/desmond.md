---
title: Lui, Desmond
permalink: /people/desmond
description: "Lui, Desmond - Serious Title"
id: desmond
name: Lui, Desmond
joinDate: 1970-01-01
function: design
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The family – that dear octopus from whose tentacles we never quite
  escape, nor, in our inmost hearts, ever quite wish to.
linkedinId: desmond

---

{%- assign staff = site.data.people | find: "id", "{{page.id}}" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.design %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
