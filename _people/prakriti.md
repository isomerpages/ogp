---
title: Bansal, Prakriti
permalink: /aboutus/eng/prakriti
description: "Bansal, Prakriti - Job Title"
third_nav_title: Software Engineering
id: prakriti
name: Bansal, Prakriti
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Other things may change us, but we start and end with the family.
linkedinId: prakriti
functionName: Software Engineering

---

{%- assign staff = site.data.people | find: "id", "prakriti" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
