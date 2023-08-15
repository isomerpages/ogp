---
title: Lee, Lynette
permalink: /aboutus/eng/lynette
description: "Lee, Lynette - Job Title"
third_nav_title: Software Engineering
id: lynette
name: Lee, Lynette
joinDate: 2023-01-08
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Treat your family like friends and your friends like family.
linkedinId: lynette

---

{%- assign staff = site.data.people | find: "id", "lynette" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
