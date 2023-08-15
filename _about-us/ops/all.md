---
title: Meat The Team
permalink: /about-us/ops
third_nav_title: Product Operations
---

## **Product Operations**

{%- assign people = site.data.people | where: "functionId", "ops" | sort: 'name' -%}
{% include staff-list.html people=people color=site.colors.function-colors.ops %}
