---
title: Bin Mohamed Aneess Alrragi, Sheikh Salim
permalink: /people/sheikh
description: "Bin Mohamed Aneess Alrragi, Sheikh Salim - Serious Title"
id: sheikh
name: Bin Mohamed Aneess Alrragi, Sheikh Salim
joinDate: 1970-01-01
function: eng
jobTitle: Serious Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Being a family means you are a part of something very wonderful. It means
  you will love and be loved for the rest of your life.
linkedinId: sheikh

---

{%- assign staff = site.data.people | find: "id", "sheikh" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
