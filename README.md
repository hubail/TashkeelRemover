# TashkeelRemover

Just a quick Javascript RegEx to clean Arabic texts from [diacritics](https://en.wikipedia.org/wiki/Arabic_diacritics).

As demonstrated in the included html file, the magic is only with this line 

```javascript
str.replace(/[\u064b-\u064f\u0650-\u0652]/g, "")
```

It identifies two Unicode ranges of diacritics, and well, removes the matched characters.