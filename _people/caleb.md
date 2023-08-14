---
title: Chiam, Caleb
permalink: /people/caleb
description: "Chiam, Caleb - Serious Title"
id: caleb
name: Chiam, Caleb
joinDate: 1970-01-01
function: eng
jobTitle: Serious Title
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
