---
title: Chin, Rui Ling Talitha
permalink: /aboutus/pm/talitha
description: "Chin, Rui Ling Talitha - Job Title"
third_nav_title: Product Management
id: talitha
name: Chin, Rui Ling Talitha
joinDate: 15/10/2018
function: pm
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Stick to the basics, hold on to your family and friends – they will never
  go out of fashion.
linkedinId: talitha

---

{%- assign staff = site.data.people | find: "id", "talitha" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.pm %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
