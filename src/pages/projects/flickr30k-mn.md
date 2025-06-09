---
layout: ../../layouts/ProjectLayout.astro
title: "Flickr30k-MN"
slug: flickr30k-mn
keywords:
- paper
- conference
- dataset
description: "Flickr30k-MN: Англи-Монгол зургийн тайлбарын өгөгдөл, орчуулгын үнэлгээ"
date: "2025-05-23"
buttons:
- name: "Өгөгдөл (HF 🤗)"
  icon: file-archive
  link: "https://huggingface.co/datasets/bilguun/flickr30k-mn"
- name: "Өгүүлэл"
  icon: file-pdf
  link: "http://mmt.edu.mn/static/upload/old_paper/2025/2025-05-27_171854.486938.pdf#page=209.00"
---

[Flickr30k](https://shannon.cs.illinois.edu/DenotationGraph) хэмээх 31 мянган зурагтай, зураг тус бүр 5 англи тайлбартай өгөгдлийг *1. машин орчуулга* буюу Google Translate, *2. мультимодал LLM* (хэлний том загвар) болох Gemini 2.0 Flash-н тусламжтай монгол хэл рүү автоматаар орчуулсан өгөгдөл.

- `captions_mn_v1` - Google Translate
- `captions_mn_v2` - Gemini 2.0 Flash

Орчуулгын чанарыг үнэлэх зорилгоор хүмүүсийн дунд веб аппликейшнд суурилсан судалгаа явуулж, оролцогчдоос орчуулгын аль хувилбар нь тухайн зургийг илүү оновчтой тайлбарласан байгааг нь сонгохыг хүссэн. Судалгаанд оролцогчдын нийт саналын **63.8% нь хоёрдугаар хувилбар болох LLM** ашигласан орчуулгыг илүүд үзсэн бол **36.2% нь машин орчуулгын системээр** орчуулсан тайлбарыг сонгосон.

```bibtex
@inproceedings{bilguuno2025,
  author = {Bilguun Ochirbat and Altangerel Chagnaa},
  title = {Flickr30k-MN: Англи-Монгол зургийн тайлбарын өгөгдөл, орчуулгын үнэлгээ},
  booktitle = {Монголын Мэдээллийн Технологи 2025},
  pages = {188--190},
  year = {2025},
}
```
