---
title: Lee, Charmaine
permalink: /aboutus/pm/charmaine
description: "Lee, Charmaine - Job Title"
third_nav_title: Product Management
id: charmaine
name: Lee, Charmaine
joinDate: 1970-01-01
functionId: pm
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: The family is one of nature’s masterpieces.
linkedinId: charmaine

---

{%- assign staff = site.data.people | find: "id", "charmaine" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.pm %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
