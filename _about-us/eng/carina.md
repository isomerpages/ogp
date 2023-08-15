---
title: Lim, Carina
permalink: /aboutus/eng/carina
description: "Lim, Carina - Job Title"
third_nav_title: Software Engineering
id: carina
name: Lim, Carina
joinDate: 26/07/2021
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Family isn’t always blood. It’s the people in your life who want you in
  theirs; the ones who accept you for who you are. The ones that would do
  anything to see you smile and who love you no matter what.
linkedinId: carina

---

{%- assign staff = site.data.people | find: "id", "carina" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
