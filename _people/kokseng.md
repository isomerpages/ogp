---
title: Chiew, Kok Seng
permalink: /people/kokseng
description: "Chiew, Kok Seng - Job Title"
id: kokseng
name: Chiew, Kok Seng
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family and friends are hidden treasures, seek them and enjoy their riches.
linkedinId: kokseng

---

{%- assign staff = site.data.people | find: "id", "kokseng" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
