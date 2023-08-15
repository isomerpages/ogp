---
title: Danelynn, Ding You Jia,
permalink: /people/danelynn
description: "Danelynn, Ding You Jia, - Job Title"
third_nav_title: Software Engineering
id: danelynn
name: Danelynn, Ding You Jia,
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: There is no doubt that it is around the family and the home that all the
  greatest virtues… are created, strengthened and maintained.
linkedinId: danelynn

---

{%- assign staff = site.data.people | find: "id", "danelynn" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
