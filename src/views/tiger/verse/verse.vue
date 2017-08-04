<template>
  <div>
      <el-input v-model="verseData" autofocus autocomplete="on" 
        @keyup.enter="splitWords"
      ></el-input>
    <blockquote contenteditable="true">
        <q>{{ verseData }}</q>
        <cite>Jason Zhou</cite>
    </blockquote>
  </div>  
</template>

<script>
export default {
  name: 'tigerVerse',
  data() {
    return {
      verseData: 'In me the tiger sniffs the rose.'
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch('LoginByEmail', this.loginForm).then(() => {
            this.loading = false;
            this.$router.push({ path: '/' });
            // this.showDialog = true;
          }).catch(() => {
            this.loading = false;
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    splitWords() {
      const quote = document.querySelector('blockquote q');
      quote.innerText.replace(/(<([^>]+)>)/ig, '');
      const quotewords = quote.innerText.split(' ');
      const wordCount = quotewords.length;
      quote.innerHTML = '';
      for (let i = 0; i < wordCount; i++) {
        quote.innerHTML += '<span>' + quotewords[i] + '</span>';
        if (i < quotewords.length - 1) {
          quote.innerHTML += ' ';
        }
      }
      const quoteword = document.querySelectorAll('blockquote q span');
      this.fadeWords(quoteword);
    },
    getRandom(min, max) {
      return Math.random() * (max - min) + min;
    },
    fadeWords(quotewords) {
      Array.prototype.forEach.call(quotewords, word => {
        word.animate([{
          opacity: 0,
          filter: 'blur(' + this.getRandom(2, 5) + 'px)'
        }, {
          opacity: 1,
          filter: 'blur(0px)'
        }],
          {
            duration: 1000,
            delay: this.getRandom(500, 3300),
            fill: 'forwards'
          }
        )
      })
    }
  }
}
</script>
<<style scoped>
blockquote {
    width: 230%;
    margin-top: -20%;
    margin-left: -60%;
    background-color: #333333;
    font-size: 3rem;
  }
  cite {
    display: block;
    text-align: right;
    font-family: Verdana, Arial, sans-serif;
    margin-top: 1rem;
    font-size: .9rem;
    color: #aaa;
    font-style: normal;
  }
  blockquote q {
    font-family: Georgia, serif;
    font-style: italic;
    color: #DC143C;
    letter-spacing: .1rem;
  }
  blockquote q span {
    will-change: opacity, filter;
    opacity: 0;
    filter: blur(0px);
  }
  q {
    quotes: '“' '”' '‘' '’';
  }
  q:before {
    content: open-quote;
    margin-right: .8rem;
  }
  q:after {
    content: close-quote;
  }
  q:before,
  q:after {
    color: #ccc;
    font-size: 4rem;
  }
</style>

 
