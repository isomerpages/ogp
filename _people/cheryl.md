---
title: Lee, Cheryl
permalink: /aboutus/pm/cheryl
description: "Lee, Cheryl - Job Title"
third_nav_title: Product Management
id: cheryl
name: Lee, Cheryl
joinDate: 1970-01-01
functionId: pm
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: In time of test, family is best.
linkedinId: cheryl
functionName: Product Management

---

{%- assign staff = site.data.people | find: "id", "cheryl" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.pm %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
