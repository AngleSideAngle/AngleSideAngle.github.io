---
layout: default
title: Asa Paparo
---

<main>
    <section id="about">
        <h2>About</h2>
        <br>
        <p>Sections of this site are generated from my github profile using the github api</p>
        <p>Please note that I am no professional web designer</p>
        <hr>
        <div class="project container">
            <!-- About is auto generated in gen.js-->
        </div>
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <hr>
        <div class="project grid">
            <!-- Projects are auto generated in gen.js-->
        </div>
    </section>

    <section id="articles">
        <h2>Articles</h2>
        <hr>
        <ul>
            {% for prj in site.data.projects %}
            <li>
                <h2><a href="{{ prj.url }}">{{ prj.name }}</a></h2>
                {{ prj.desc }}
            </li>
            {% endfor %}
        </ul>
    </section>
</main>

<script src="old/scripts/gen.js"></script>
