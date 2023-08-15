---
title: All
permalink: /about-us/design
third_nav_title: Product Design
---

## **Product Design**

{%- assign people = site.data.people | where: "functionId", "design" | sort: 'name' -%}
{% include staff-list.html people=people color=site.colors.function-colors.design %}
