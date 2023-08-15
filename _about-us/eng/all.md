---
title: All
permalink: /about-us/eng
third_nav_title: Software Engineering
---

## **Software Engineering**

{%- assign people = site.data.people | where: "functionId", "eng" | sort: 'name' -%}
{% include people-of-OGP.html people=people color=site.colors.function-colors.eng %}
