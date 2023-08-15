---
title: Venkatesan, Harish
permalink: /aboutus/eng/harish
description: "Venkatesan, Harish - Job Title"
third_nav_title: Software Engineering
id: harish
name: Venkatesan, Harish
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Being part of a family means smiling for photos.
linkedinId: harish
functionName: Software Engineering

---

{%- assign staff = site.data.people | find: "id", "harish" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
