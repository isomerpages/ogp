---
title: Wong Zhi Qian, Sebastian
permalink: /people/sebastian
description: "Wong Zhi Qian, Sebastian - Serious Title"
id: sebastian
name: Wong Zhi Qian, Sebastian
joinDate: 1970-01-01
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family is not an important thing. It’s everything.
linkedinId: sebastian

---

{%- assign staff = site.data.people | find: "id", "sebastian" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
