---
title: Ong, Pearly
permalink: /aboutus/design/pearly
description: "Ong, Pearly - Job Title"
third_nav_title: Product Design
id: pearly
name: Ong, Pearly
joinDate: 21/10/2019
functionId: design
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Happiness is having a large, loving, caring, close-knit family in another city.
linkedinId: pearly
functionName: Product Design

---

{%- assign staff = site.data.people | find: "id", "pearly" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.design %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
