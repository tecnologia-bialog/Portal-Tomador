import React from 'react';

//
// https://medium.com/@matthagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
//

export function slugify(string) {

  let string_clean ='';

  try{

      string_clean = string.trim();
      const a = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
      const b = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
      const p = new RegExp(a.split('').join('|'), 'g');

      return string_clean.toString()

          .toLowerCase()
          .replace('http://', '')
          .replace('https://', '')
          .replace(/\s+/g, '-')
          .replace(p, c => b.charAt(a.indexOf(c)))
          .replace('@', '-')
          .replace('.', '-')
          .replace('.', '-')
          .replace('.', '-')
          .replace(/&/g, '-and-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-')
          .replace(/^-+/, '')


    }catch (e) {
        return string_clean;
  }



}
