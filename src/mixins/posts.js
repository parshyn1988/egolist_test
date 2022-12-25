import { mapGetters, mapActions } from 'vuex';
import PostCard from '@/components/PostCard.vue';
export const posts = {
    components: {
        PostCard
    },

    computed: {
        ...mapGetters([
            'posts',
        ])
    },

    watch: {
        posts(val) {
            if(val) {
                this.$nextTick(() => {
                    this.lazyLoadImages();
                });
            }
        }
    },

    methods: {
        ...mapActions([
            'getPosts',
        ]),

        lazyLoadImages() {
            let lazyImages = document.querySelectorAll('.lazy-loaded-image.lazy');
            let lazyImageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        let lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove('lazy');
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });
            lazyImages.forEach(function(lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        }
    }
}
