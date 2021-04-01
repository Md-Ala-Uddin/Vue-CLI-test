<template>
    <div class="subheading mb-1">
        <button class="btn btn-sm btn-info" data-toggle="modal" data-target="#NewCommentModal">New Comment</button>
    </div>

    <!-- New Comment Modal -->
    <div class="modal fade" id="NewCommentModal" tabindex="-1" role="dialog" aria-labelledby="New Comment" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="ModalLongTitle">New Comment</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form id="newCommentForm" @submit.prevent="postComment">
                    <div class="modal-body">
                        
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input v-model="newComment.user" type="text" class="form-control" placeholder="Enter Name" id="name">
                            </div>
                            <div class="form-group">
                                <label for="comment">Comment:</label>
                                <textarea v-model="newComment.comment" class="form-control" rows="5" id="comment"></textarea>
                            </div> 
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <input type="submit" class="btn btn-primary" value="Submit">
                    </div>
                </form> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['newComment'],
    methods: {
        postComment() {
            this.$emit('onPostComment');
        }
    }
}
</script>
