---
title: Meet The Team
permalink: /about-us/transformation
third_nav_title: Policy & Transformation
---

## **Policy & Transformation**

{%- assign people = site.about-us | where: "functionId", "transformation" | sort: 'name' -%}
{% include staff-list.html people=people color=site.colors.function-colors.transformation  %}
