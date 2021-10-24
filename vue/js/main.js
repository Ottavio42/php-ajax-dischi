const app = new Vue({
    el : "#root",
    data : {
        selectedGenre: "",
        albums: null,
        genre: "",
    },
    created() {
        axios.get('http://localhost/47/php-ajax-dischi/vue/api/index.php/')
        .then((res) => {
            this.albums = res.data;
        });
    },
}
);