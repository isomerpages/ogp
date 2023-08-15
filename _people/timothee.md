---
title: Groleau, Timothee
permalink: /aboutus/eng/timothee
description: "Groleau, Timothee - Lead Software Engineer"
third_nav_title: Software Engineering
id: timothee
name: Groleau, Timothee
joinDate: 1970-01-01
functionId: eng
jobTitle: Lead Software Engineer
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: It didn’t matter how big our house was; it mattered that there was love in it.
linkedinId: timothee
functionName: Software Engineering

---

{%- assign staff = site.data.people | find: "id", "timothee" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
