---
title: Goh, Weiying
permalink: /aboutus/eng/alexis
description: "Goh, Weiying - Job Title"
third_nav_title: Software Engineering
id: alexis
name: Goh, Weiying
joinDate: 29/06/2020
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family is the heart of a home.
linkedinId: alexis

---

{%- assign staff = site.data.people | find: "id", "alexis" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
