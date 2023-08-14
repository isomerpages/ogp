---
title: Raj Kumar, Praveen
permalink: /people/praveen
description: "Raj Kumar, Praveen - Job Title"
id: praveen
name: Raj Kumar, Praveen
joinDate: 1970-01-01
function: policy
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: In time of test, family is best.
linkedinId: praveen

---

{%- assign staff = site.data.people | find: "id", "praveen" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.policy %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
