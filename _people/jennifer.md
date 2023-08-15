---
title: Liu, Jennifer
permalink: /aboutus/pm/jennifer
description: "Liu, Jennifer - Job Title"
third_nav_title: Product Management
id: jennifer
name: Liu, Jennifer
joinDate: 1970-01-01
functionId: pm
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Life is beautiful. It’s about giving. It’s about family.
linkedinId: jennifer
functionName: Product Management

---

{%- assign staff = site.data.people | find: "id", "jennifer" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.pm %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
