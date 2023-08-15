---
title: Kuan, Wee Loong
permalink: /aboutus/eng/weeloong
description: "Kuan, Wee Loong - Job Title"
third_nav_title: Software Engineering
id: weeloong
name: Kuan, Wee Loong
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The informality of family life is a blessed condition that allows us all
  to become our best while looking our worst.
linkedinId: weeloong
functionName: Software Engineering

---

{%- assign staff = site.data.people | find: "id", "weeloong" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
