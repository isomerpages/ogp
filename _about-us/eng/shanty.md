---
title: Basrur, Shantanu Dilip
permalink: /aboutus/eng/shanty
description: "Basrur, Shantanu Dilip - Job Title"
third_nav_title: Software Engineering
id: shanty
name: Basrur, Shantanu Dilip
joinDate: 1970-01-01
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Having somewhere to go is home. Having someone to love is family. And
  having both is a blessing.
linkedinId: shanty

---

{%- assign staff = site.data.people | find: "id", "shanty" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
