---
title: All
permalink: /about-us/corporate
third_nav_title: Corporate Team
---

## **Corporate Team**

{%- assign people = site.data.people | where_exp: "staff", "staff.functionId == 'corporate'" | sort: 'name' -%}
{% include people-of-OGP.html people=people color=site.colors.function-colors.corporate %}
