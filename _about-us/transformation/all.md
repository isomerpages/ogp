---
title: Partnerships & Transformation
permalink: /about-us/transformation
third_nav_title: Partnerships & Transformation
---

## **Partnerships & Transformation**

{%- assign people = site.data.people | where_exp: "staff", "staff.functionId == 'transformation'" | sort: 'name' -%}
{% include people-of-OGP.html people=people color=site.colors.function-colors.transformation  %}
