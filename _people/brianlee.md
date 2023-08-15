---
title: Lee, Siu Hei
permalink: /aboutus/pm/brianlee
description: "Lee, Siu Hei - Job Title"
third_nav_title: Product Management
id: brianlee
name: Lee, Siu Hei
joinDate: 20/03/2023
functionId: pm
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family and friends are hidden treasures, seek them and enjoy their riches.
linkedinId: brianlee
functionName: Product Management

---

{%- assign staff = site.data.people | find: "id", "brianlee" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.pm %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
