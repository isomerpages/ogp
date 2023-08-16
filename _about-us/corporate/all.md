---
title: Meet The Team
permalink: /about-us/corporate
third_nav_title: Corporate Team
---

## **Corporate Team**

{%- assign people = site.about-us | where_exp: "item" , "item.path contains '/corporate/'" | where: "functionId", "corporate" | sort: 'name' -%}
{% include staff-list.html people=people color=site.colors.function-colors.corporate %}
