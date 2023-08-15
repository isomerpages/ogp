---
title: Software Engineering
permalink: /about-us/eng
---

## **Software Engineering**

{%- assign people = site.data.people | where: "functionId", "eng" | sort: 'name' -%}
{% include people-of-OGP.html people=people color=site.colors.function-colors.eng %}
