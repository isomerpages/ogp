---
title: Yap, Jia Hui
permalink: /aboutus/corporate/jiahui
description: "Yap, Jia Hui - Job Title"
third_nav_title: Corporate Team
id: jiahui
name: Yap, Jia Hui
joinDate: 1970-01-01
function: corporate
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family and friends are hidden treasures, seek them and enjoy their riches.
linkedinId: jiahui

---

{%- assign staff = site.data.people | find: "id", "jiahui" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.corporate %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
