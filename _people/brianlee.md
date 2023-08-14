---
title: Lee, Siu Hei
permalink: /people/brianlee
description: "Lee, Siu Hei - Job Title"
id: brianlee
name: Lee, Siu Hei
joinDate: 20/03/2023
function: pm
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family and friends are hidden treasures, seek them and enjoy their riches.
linkedinId: brianlee

---

{%- assign staff = site.data.people | find: "id", "brianlee" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.pm %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
