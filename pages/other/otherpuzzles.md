---
title: Other Puzzles Table of Contents
keywords: mydoc
sidebar: other_sidebar
toc: false
permalink: otherpuzzles.html
folder: other
---
<table>
  <tr>
    <td> Puzzle </td>
    <td> PDF </td>
    <td> Google </td>
  </tr>
{% for entry in site.data.puzzledata.puzzles %}
  {% if entry.type == "other" %}
     <tr>
       <td> <a href="{{entry.page}}"> {{entry.title}}</a> </td>
       <td> <a href="{{entry.pdf}}"> Link</a> </td>
       <td> <a href="{{entry.gsheet}}"> Link</a> </td>
     </tr>
  {% endif %}
{% endfor %}
</table>
