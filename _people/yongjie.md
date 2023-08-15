---
title: Foo, Yong Jie
permalink: /people/yongjie
description: "Foo, Yong Jie - Job Title"
third_nav_title: Software Engineering
id: yongjie
name: Foo, Yong Jie
joinDate: 2019-02-12
function: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: Life is beautiful. It’s about giving. It’s about family.
linkedinId: yongjie

---

{%- assign staff = site.data.people | find: "id", "yongjie" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
