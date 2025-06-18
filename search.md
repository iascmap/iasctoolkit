---
layout: simple
title: "Search"
nav: "yes"
sortTitle: "zzzSearch"
navTitle: "Search"
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /siteassets/search.js
---

# Search the toolkit


  <table class="table table-hover" id="DataTable" >
    <thead>
      <tr>
       <th scope="col">Item</th>
       <!-- <th scope="col">Section</th> -->
       <th scope="col">Page</th>      
      </tr>
    </thead>
    <tbody>

{% for file in site.data.files %}
      <tr>      
        <td>
        {% if file.filename and file.filename != '' %}
        <a href="/download/{{ file.filename }}" class="stretched-link">{{ file.title }}<span class="sticky">&nbsp;<i class="fa fa-download " aria-hidden="true"></i></span></a>
        {% else %}
        <a href="{{ file.link }}" target="_blank" class="stretched-link">{{ file.title }}<span class="sticky">&nbsp;<i class="fa fa-external-link-alt" aria-hidden="true"></i></span></a>
        {% endif %}
        </td>
        <!-- <td>{{ file.section }}</td> -->
        <td>{{ file.page }}</td>
      </tr>
{% endfor %}

      </tbody>
    </table>

