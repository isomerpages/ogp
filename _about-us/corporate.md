---
title: Corporate team
permalink: /about-us/corporate
---

## **Corporate Team**

{%- assign people = site.data.people | where_exp: "staff", "staff.function == 'corporate' or staff.function == 'people' or staff.function == 'marketing'" -%}
{% include people-of-OGP.html people=people color=site.colors.function-colors.corporate %}
