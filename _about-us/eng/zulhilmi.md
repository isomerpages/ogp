---
title: Icksan, Mohammad Zulhilmi
permalink: /aboutus/eng/zulhilmi
description: "Icksan, Mohammad Zulhilmi - Job Title"
third_nav_title: Software Engineering
id: zulhilmi
name: Icksan, Mohammad Zulhilmi
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Nothing is better than going home to family and eating good food and relaxing
linkedinId: zulhilmi

---

{%- assign staff = site.data.people | find: "id", "zulhilmi" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
