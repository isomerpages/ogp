---
title: Chiam, Caleb
permalink: /aboutus/eng/caleb
description: "Chiam, Caleb - Job Title"
third_nav_title: Software Engineering
id: caleb
name: Chiam, Caleb
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Treat your family like friends and your friends like family.
linkedinId: caleb

---

{%- assign staff = site.data.people | find: "id", "caleb" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
