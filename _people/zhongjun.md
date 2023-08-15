---
title: Hsu, Zhong Jun
permalink: /aboutus/eng/zhongjun
description: "Hsu, Zhong Jun - Job Title"
third_nav_title: Software Engineering
id: zhongjun
name: Hsu, Zhong Jun
joinDate: 2022-08-08
functionId: eng
jobTitle: Job Title
curProducts: currentProducts
pastProducts: pastProducts
accomplishments: ""
quote: When trouble comes, it’s your family that supports you.
linkedinId: zhongjun
functionName: Software Engineering

---

{%- assign staff = site.data.people | find: "id", "zhongjun" -%}
{% include staff_heading.html staff=staff color=site.colors.function-colors.eng %}

<p>I joined since {{page.joinDate}} and I am currently working on {{page.curProducts}}.</p>

<p>Products I worked on before include {{page.pastProducts}}</p>

<p>Three things I've done recently which I'm proud of are...</p>
{{page.accomplishments}}
