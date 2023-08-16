---
title: Meet The Team
permalink: /about-us/eng
third_nav_title: Software Engineering
---

## **Software Engineering**

{%- assign people = site.about-us | where_exp: "item" , "item.path contains '/eng/'" | where: "functionId", "eng" | sort: 'name' -%}
{% include staff-list.html people=people color=site.colors.function-colors.eng %}
