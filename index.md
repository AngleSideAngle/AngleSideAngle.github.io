---
layout: default
title: Asa Paparo
---

<section id="about">
    <h2>I'm Asa Paparo</h2>
    <p>Sections of this site are generated using the GitHub api</p>
    <hr>
    <!-- About is auto generated in gen.js-->
</section>

<section id="projects">
    <h2>Projects</h2>
    <p>A few of my most recent contributions</p>
    <hr>
    <!-- Projects are auto generated in gen.js-->
</section>

<section id="posts">
    <h2>Posts</h2>
    <hr>
        {% for post in site.posts %}
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        {{ post.excerpt }}
        {% endfor %}
</section>

<script src="assets/scripts/gen.js"></script>
