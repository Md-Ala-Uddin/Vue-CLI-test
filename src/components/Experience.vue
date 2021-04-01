<template>
    <hr class="m-0" />
            <!-- Experience-->
            <section class="resume-section" id="experience">
                <div class="resume-section-content">                    
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">{{ selectedBlog != null ? selectedBlog.title : 'Blog Title' }}</h3>
                            <div class="subheading mb-3">{{ selectedBlog != null ? selectedBlog.created_by : 'Blog Author' }}</div>
                            <p>{{ selectedBlog != null ? selectedBlog.all_blogs[0].blog_detail : 'Blog Content' }}</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">{{ selectedBlog != null ? selectedBlog.all_blogs[0].blog_datetime : 'Blog DateTime' }}</span></div>
                    </div>
					<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h5 class="mb-0">Blog Comment<hr></h5>
                            <div v-if="selectedBlog != null">
                                <div v-for="comment in selectedBlog.all_comments" :key="comment.id" class="subheading mb-1" style="font-size:11pt;">
                                    <i class="fa fa-user"></i>
                                    {{comment != null ? comment.user : "no comment"}}
                                    <div class="float-right"><i class="fa fa-clock"></i> {{ comment.comment_datetime }}</div>
                                    <p>
                                        {{comment.comment}}
                                        <button @click="removeComment(comment.id)" class="btn btn-sm btn-danger float-right">Remove</button>
                                    </p>
                                </div>
                            </div>					
							<NewComment :newComment="newComment" @onPostComment="postComment"/>
                        </div>                        
                    </div>
                    
                </div>
            </section>
</template>

<script>
import NewComment from "./NewComment.vue";

export default {
    props: ['selectedBlog', 'newComment'],
    components: {NewComment},
    methods: {
        removeComment(id) {
            this.$emit('onRemoveComment', id);
        },
        postComment() {
            this.$emit('onPostComment');
        }
    }
}
</script>
