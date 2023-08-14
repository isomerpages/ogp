---
title: Teo, Shu Li
permalink: /people/shuli
description: "Teo, Shu Li - Job Title"
id: shuli
name: Teo, Shu Li
joinDate: 20/04/2020
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Having somewhere to go is home. Having someone to love is family. And
  having both is a blessing.
linkedinId: shuli

---

{%- assign staff = site.data.people | find: "id", "shuli" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
