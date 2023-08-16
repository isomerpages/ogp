---
title: Meet The Team
permalink: /about-us/transformation
third_nav_title: Partnerships & Transformation
---

## **Partnerships & Transformation**

{%- assign people = site.about-us | where_exp: "item" , "item.path contains '/transformation/'" | where: "functionId", "transformation" | sort: 'name' -%}
{% include staff-list.html people=people color=site.colors.function-colors.transformation  %}
