<template>
            <!-- About-->
            <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        Vue Test
                        <span class="text-primary">MononSoft</span>
                    </h1>
                    <div class="subheading mt-3">
                        Instructions:                        
                    </div>
                    <div class="lead mb-5">
                        <ul class="fa-ul mb-0">
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                Populate Left Menu under BLOG
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                Get Detail of Selected Blog and Comments and view in main content area
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                Make a Modal for Comment on click New Comment Button
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                Receive Commenter Name, Comment and current date time for from Comment Submit
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                Create or remove new comment and display
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                Maintain SPA while develop
                            </li>
                        </ul>
                        <div class="subheading mt-5">
                            API's:                        
                        </div>
                    </div>
                    <p class="lead mt-3">
                        <ul class="fa-ul mb-0">
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                ALL-BLOGS [get] ["http://192.168.10.123/vue-test-api/public/api/all-blogs"]
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                LEFT-MENU [get] ["http://192.168.10.123/vue-test-api/public/api/blogs"]
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                VIEW-BLOG [get] ["http://192.168.10.123/vue-test-api/public/api/view-blog/id"]
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                SAVE COMMENT [post] ["http://192.168.10.123/vue-test-api/public/api/post-comment?blog_id=blog_id&comment=comment&comment_datetime=now()&user=user"]
                            </li>
                            <li>
                                <span class="fa-li"><i class="fas fa-check"></i></span>
                                DELETE COMMENT [get] ["http://192.168.10.123/vue-test-api/public/api/remove-comment/id"]
                            </li>
                        </ul>
					</p>                    
                </div>
            </section>
</template>