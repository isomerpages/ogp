---
title: Lam, Kee Wei
permalink: /aboutus/eng/keewei
description: "Lam, Kee Wei - Job Title"
third_nav_title: Software Engineering
id: keewei
name: Lam, Kee Wei
joinDate: 2020-01-06
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family ties mean that no matter how much you might want to run from your
  family, you can’t.
linkedinId: keewei

---

{%- assign staff = site.data.people | find: "id", "keewei" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
