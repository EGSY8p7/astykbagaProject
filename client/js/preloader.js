const vue = new Vue({
    el: '.preloader',
    data: {
       loaded: 0,
       loading: null,
       loadStyle: {
          width: '0%'
       },
       statusElem: $('[status]'),
       loader: $('[loader]'),
       body: $('body')
    },
    ready(){
       this.preloader = $(this.$el);
       this.removeScrolling();
       this.startLoading();
    },
    watch: {
       loaded(){
          this.loadStyle.width = `${this.loaded}%`;
       }
    },
    methods: {
       removeScrolling(){
          this.body.css('overflow','hidden');
       },
       startLoading(){
          this.loading = setInterval(this.load, 30);
       },
       load(){
          this.loaded < 100 ? this.loaded++ : this.doneLoading();
       },
       doneLoading(){
          clearInterval(this.loading);
          this.updateStatus();
       },
       updateStatus(){
          this.statusElem.text('');
          this.loader.fadeOut();
          this.animatePreloader();
       },
       animatePreloader(){
          let app        = this, 
              height     = this.preloader.height(),
              properties = {
                 'margin-top': `-${height}`
              },
              options    = {
                 duration: 1000,
                 easing: 'swing',
                 complete(){
                    app.removePreloader()
                 } 
              };
          this.preloader.delay(700).animate(properties, options)
       },
       removePreloader(){
          this.preloader.remove();
          this.body.removeAttr('style');
          this.animateWebsite();
       },
       animateWebsite(){
          console.log('lets do it');
       }
    }
 })