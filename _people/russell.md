---
title: Chan, Russell
permalink: /people/russell
description: "Chan, Russell - Head of People Team"
third_nav_title: People Team
id: russell
name: Chan, Russell
joinDate: 2019-09-02
function: corporate
jobTitle: Head of People Team
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: >-
  * Grew the People team from an individual contributor practice to a team of 4
  today

  * Helped to scale OGP from 25 (2019) to >170 (2023)

  * Worked on organisation design shifts and levers (e.g. compensation schemes, performance management, management practices, resource allocation) to adapt to OGP's shifting organisation size and context
quote: I joined OGP in 2019, and have stayed since then because I think it is
  the government’s best shot today at breaking the mould on trying new ways for
  government organisations to work better, so that we can be a better public
  service.
linkedinId: russell

---

{%- assign staff = site.data.people | find: "id", "russell" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.corporate %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
