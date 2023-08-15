---
title: Foo, Chi Fa
permalink: /aboutus/eng/chifa
description: "Foo, Chi Fa - Job Title"
third_nav_title: Software Engineering
id: chifa
name: Foo, Chi Fa
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: We may have our differences, but nothing’s more important than family.
linkedinId: chifa
functionName: Software Engineering

---

{%- assign staff = site.data.people | find: "id", "chifa" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
