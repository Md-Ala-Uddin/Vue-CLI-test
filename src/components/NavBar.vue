<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
              
                <span class="d-none d-lg-block"><img class="img-fluid img-profile mx-auto mb-2" src="../assets/img/JERPLOGO2.png" alt=""  style="border:none;"/></span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">Instructions</a></li>
                    <li class="nav-item" id="blog-tab">
                        <a class="nav-link js-scroll-trigger" data-toggle="collapse" data-target="#demo" href="#blog">BLOG <span><i class="fas fa-angle-down"></i></span></a>
                        <ul id="demo" style="list-style:none" class="blog-menu collapse">
                            <li v-for="blog in blogs" :key="blog.id" @click.prevent.stop="selectBlog(blog.id, $event)" class="text-left">
                                <a href="#" class="blog-menu-item">{{ blog.title }}</a>
                            </li>
                        </ul>
                    </li>
					<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#"><hr></a></li>
					<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Example Blog</a></li>                    
                </ul>
            </div>
        </nav>
</template>

<script>
export default {
    props: ['blogs'],
    methods: {
        selectBlog(id, event) {
            let el = event.target;
            if($(el).hasClass('blog-menu-item')) {
                $(el).parent().siblings().filter(".active-blog").removeClass('active-blog');
                $(el).parent().addClass('active-blog');
            }
            $('html, body').animate({
              'scrollTop': $('#experience').position().top
            })
            this.$emit('onSelectBlog', id);
        }
    },
    mounted() {
        $("#blog-tab").on("click", function() {
            $(this).toggleClass('blog-tab-clicked');
            $('.fa-angle-down').toggleClass('rotate-angle');
        });
    }
};
</script>

<style scoped>
 .blog-menu li a {
     color: white;
     text-decoration: none;
 }

.blog-tab-clicked {
    background: #522819;
}

 .blog-menu.collapse {
     background: #9a4b2c;
     padding-left: 0px;
 }

.blog-menu.collapse li {
    padding-left: 50px;
}

 .blog-menu.collapse li:hover {
     background: #833e23;
 }

 .active-blog {
     background: #612e1b;
 }

 .rotate-angle {
     transform: rotate(180deg);
 }
</style>
