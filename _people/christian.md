---
title: Chow, Christian
permalink: /aboutus/eng/christian
description: "Chow, Christian - Job Title"
third_nav_title: Software Engineering
id: christian
name: Chow, Christian
joinDate: 1970-01-01
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Think of your family today and every day thereafter, don’t let the busy
  world of today keep you from showing how much you love and appreciate your
  family.
linkedinId: christian

---

{%- assign staff = site.data.people | find: "id", "christian" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
