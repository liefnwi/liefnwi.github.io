---
layout: default
title: Updates
---
{% for post in site.posts %}
<article class="update">
<h2>{{ post.title }}</h2>
<h4>{{ post.date | localize: "%A %e %B %Y" }}</h4>
{{ post.content }}
</article>
{% if post.previous %}
<hr>
{% endif %}
{% endfor %}
