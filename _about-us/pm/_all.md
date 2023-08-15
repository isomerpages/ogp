---
title: Product Management
permalink: /about-us/pm
---

## **Product Management**

{%- assign people = site.data.people | where: "functionId", "pm" | sort: 'name' -%}
{% include people-of-OGP.html people=people color=site.colors.function-colors.pm %}
