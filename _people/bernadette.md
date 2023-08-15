---
title: Cho, Bernadette Marisa Chien Ling
permalink: /aboutus/corporate/bernadette
description: "Cho, Bernadette Marisa Chien Ling - Job Title"
third_nav_title: Corporate Team
id: bernadette
name: Cho, Bernadette Marisa Chien Ling
joinDate: 1970-01-01
function: corporate
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: My family is my life, and everything else comes second as far as what’s
  important to me.
linkedinId: bernadette

---

{%- assign staff = site.data.people | find: "id", "bernadette" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.corporate %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
