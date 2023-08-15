---
title: Tjide, Lisa
permalink: /aboutus/pm/lisa
description: "Tjide, Lisa - Job Title"
third_nav_title: Product Management
id: lisa
name: Tjide, Lisa
joinDate: 26/11/2018
functionId: pm
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The informality of family life is a blessed condition that allows us all
  to become our best while looking our worst.
linkedinId: lisa

---

{%- assign staff = site.data.people | find: "id", "lisa" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.pm %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
