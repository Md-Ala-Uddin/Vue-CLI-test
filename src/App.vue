<template>
    <NavBar :blogs="blogs" @onSelectBlog="selectBlog"/>
    <PageContent :selectedBlog="selectedBlog" :newComment="newComment" @onRemoveComment="removeComment" @onPostComment="postComment"/>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import PageContent from "./components/PageContent.vue";

export default {
  name: "App",
  components: {
    NavBar,
    PageContent
  },
  data() {
    return {
      blogs: [],
      selectedBlog: null,
      newComment: { user: "", comment: "" },
    };
  },
  methods: {
    loadBlogs() {
      this.$swal({
          title: 'Loading Blog List...',
          didOpen: () => {
              this.$swal.showLoading();
              fetch("http://vue-test.gingerbd.com/api/blogs")
              .then(response => response.json())
              .then(json => {
                this.blogs = json.blogs
                this.$swal.close();
              });
            }
        });
    },
    selectBlog(id) {
      this.$swal({
        title: 'Loading Blog Details...',
        didOpen: () => {
          this.$swal.showLoading();
          fetch("http://vue-test.gingerbd.com/api/view-blog/" + id)
          .then(response => response.json())
          .then(json => {
            this.selectedBlog = json.blogs[0];
            this.$swal.close();
          });
        }
      })
    },
    postComment() {
      this.$swal({
        title: "Posting Comment....",
        didOpen: () => {
            this.$swal.showLoading();
            const currentDate = new Date();
            const date = currentDate.toISOString().slice(0, 10);
            const time = currentDate.toLocaleTimeString().substr(0, 8).trim();
            const date_time = date + " " + time;

            fetch("http://vue-test.gingerbd.com/api/post-comment", {
              method: "POST",
              body: JSON.stringify({
                blog_id: this.selectedBlog.id,
                comment: this.newComment.comment,
                comment_datetime: date_time,
                user: this.newComment.user,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => {
                this.$swal.close();
                return response.json();
              })
              .then((json) => {
                console.log(json);
                $("#NewCommentModal").modal("hide");
                if(json.status == 200) {
                  this.$swal({
                    position: 'top-end',
                    icon: 'success',
                    title: json.message,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  setTimeout(()=>this.selectBlog(this.selectedBlog.id), 1500);
                } else {
                  this.$swal({
                    position: 'top-end',
                    icon: 'error',
                    title: json.message,
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
              })
              .catch((error) => console.log(error));
              }
      });
    },
    removeComment(id) {
      this.$swal({
        title: 'Removing Comment....',
        didOpen: () => {
          this.$swal.showLoading();
          fetch("http://vue-test.gingerbd.com/api/remove-comment/" + id)
            .then(response => response.json())
            .then(json => {
              console.log(json)
              if(json.status == 200) {
                  this.$swal({
                    position: 'top-end',
                    icon: 'success',
                    title: json.message,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  setTimeout(()=>this.selectBlog(this.selectedBlog.id), 1500);
              } else {
                  this.$swal({
                    position: 'top-end',
                    icon: 'error',
                    title: json.message,
                    showConfirmButton: false,
                    timer: 1500
                  });
              }             
            });
        }
      })
    },
  },
  mounted() {
    this.loadBlogs();
    this.selectBlog(1);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
