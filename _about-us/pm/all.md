---
title: Product Management
permalink: /about-us/pm
third_nav_title: Product Management
---

## **Product Management**

{%- assign people = site.data.people | where: "functionId", "pm" | sort: 'name' -%}
{% include people-of-OGP.html people=people color=site.colors.function-colors.pm %}
