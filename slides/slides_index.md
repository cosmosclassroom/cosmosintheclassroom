---
layout: default
title: Presentations
---

# Currently Rendered and Available Presentations

{% for slide in site.pages %}
  {% if slide.layout == "revealjs" %}
* [{{ slide.title }}]({{ site.baseurl }}{{ slide.url }})
  {% endif %}
{% endfor %}

{% if site.slides %}
{% for slide in site.slides %}
* [{{ slide.title }}]({{ site.baseurl }}{{ slide.url }})
{% endfor %}
{% endif %}