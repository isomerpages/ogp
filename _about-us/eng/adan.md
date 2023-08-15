---
title: Vielma, Adan
permalink: /aboutus/eng/adan
description: "Vielma, Adan - Job Title"
third_nav_title: Software Engineering
id: adan
name: Vielma, Adan
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family ties mean that no matter how much you might want to run from your
  family, you can’t.
linkedinId: adan

---

{%- assign staff = site.data.people | find: "id", "adan" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
