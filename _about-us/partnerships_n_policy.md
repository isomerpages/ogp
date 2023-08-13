---
title: Partnerships & Policy
permalink: /about-us/partnerships_n_policy
---

## **Partnerships & Policy**

{%- assign people = site.data.people | where_exp: "staff", "staff.function == 'partnerships' or staff.function == 'policy'" -%}

{% include people-of-OGP.html people=site.data.people color=site.colors.function-colors.partnership  %}
