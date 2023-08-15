---
title: Oh, Wei Jin
permalink: /aboutus/eng/justyn
description: "Oh, Wei Jin - Job Title"
third_nav_title: Software Engineering
id: justyn
name: Oh, Wei Jin
joinDate: 13/06/2022
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Having somewhere to go is home. Having someone to love is family. And
  having both is a blessing.
linkedinId: justyn

---

{%- assign staff = site.data.people | find: "id", "justyn" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
