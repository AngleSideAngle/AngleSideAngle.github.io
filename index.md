---
layout: default
title: Asa Paparo
---

Hello !!!!

This site is a work in progress. Check out the [original](./old/)

<nav>
    {% for item in site.data.links %}
    <a href="{{ item.link }}">
        {{ item.name }}
    </a>
    {% endfor %}
</nav>

## Projects
<ul>
    {% for prj in site.data.projects %}
    <li>
        <h2><a href="{{ prj.url }}">{{ prj.name }}</a></h2>
        {{ prj.desc }}
    </li>
    {% endfor %}
</ul>

## Stuff I Write abt
<ul>
    {% for post in site.posts %}
    <li>
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        {{ post.excerpt }}
    </li>
    {% endfor %}
</ul>