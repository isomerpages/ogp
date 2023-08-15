---
title: Wong, Kendra
permalink: /aboutus/eng/kendra
description: "Wong, Kendra - Job Title"
third_nav_title: Software Engineering
id: kendra
name: Wong, Kendra
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The memories we make with our family is everything.
linkedinId: kendra

---

{%- assign staff = site.data.people | find: "id", "kendra" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
