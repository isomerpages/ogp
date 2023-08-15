---
title: Tay Li Jia, Amelia
permalink: /aboutus/eng/amelia
description: "Tay Li Jia, Amelia - Job Title"
third_nav_title: Software Engineering
id: amelia
name: Tay Li Jia, Amelia
joinDate: 2023-07-08
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The most important thing in the world is family and love.
linkedinId: amelia

---

{%- assign staff = site.data.people | find: "id", "amelia" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
