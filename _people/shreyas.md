---
title: Chandrakanth Rao Inna, Shreyas
permalink: /people/shreyas
description: "Chandrakanth Rao Inna, Shreyas - Job Title"
third_nav_title: Product Operations
id: shreyas
name: Chandrakanth Rao Inna, Shreyas
joinDate: 22/05/2023
function: ops
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The memories we make with our family is everything.
linkedinId: shreyas

---

{%- assign staff = site.data.people | find: "id", "shreyas" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.ops %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
