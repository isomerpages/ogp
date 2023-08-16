---
title: Meet The Team
permalink: /about-us/pm
third_nav_title: Product Management
---

## **Product Management**

{%- assign people = site.about-us | where_exp: "item" , "item.path contains '/pm/'" | where: "functionId", "pm" | sort: 'name' -%}
{% include staff-list.html people=people color=site.colors.function-colors.pm %}
