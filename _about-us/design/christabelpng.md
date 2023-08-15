---
title: Png, Christabel
permalink: /aboutus/design/christabelpng
description: "Png, Christabel - Job Title"
third_nav_title: Product Design
id: christabelpng
name: Png, Christabel
joinDate: 2020-01-06
functionId: design
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family is not an important thing. It’s everything.
linkedinId: christabelpng

---

{%- assign staff = site.data.people | find: "id", "christabelpng" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.design %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
