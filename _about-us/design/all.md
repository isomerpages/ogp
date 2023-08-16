---
title: Meet The Team
permalink: /about-us/design
third_nav_title: Product Design
---

## **Product Design**

{%- assign people = site.about-us | where_exp: "item" , "item.path contains '/design/'" | where: "functionId", "design" | sort: 'name' -%}
{% include staff-list.html people=people color=site.colors.function-colors.design %}
