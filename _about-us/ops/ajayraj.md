---
title: Singh, Ajayraj
permalink: /aboutus/ops/ajayraj
description: "Singh, Ajayraj - Job Title"
third_nav_title: Product Operations
id: ajayraj
name: Singh, Ajayraj
joinDate: 13/06/2022
functionId: ops
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family isn’t always blood. It’s the people in your life who want you in
  theirs; the ones who accept you for who you are. The ones that would do
  anything to see you smile and who love you no matter what.
linkedinId: ajayraj

---

{%- assign staff = site.data.people | find: "id", "ajayraj" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.ops %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
