<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
              
                <span class="d-none d-lg-block"><img class="img-fluid img-profile mx-auto mb-2" src="../assets/img/JERPLOGO2.png" alt=""  style="border:none;"/></span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">Instructions</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#blog">BLOG</a>
                        <ul style="list-style:none" class="blog-menu">
                            <li v-for="blog in blogs" :key="blog.id" @click.prevent="selectBlog(blog.id)" class="text-left">
                                <a href="#" style="color:white;text-decoration: none;">{{ blog.title }}</a>
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
        selectBlog(id) {
            this.$emit('onSelectBlog', id);
        }
    }
};
</script>

<style scoped>
 .blog-menu li a:hover {
     color: #893312 !important;
 }
</style>
