<template>
    <div class="list-group-item">
        {{ title }}
        <div class="stats__item">
            <div v-if="isLoading">
                <i class="fa fa-circle-o-notch fa-spin fa-fw"></i>
                <span class="sr-only">Loading...</span>
            </div>
            <div v-else>{{ count }}</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        props: ['action', 'title'],
        data() {
            return {
                count: 0,
                isLoading: false
            }
        },
        mounted() {
            this.fetchData();
            this.$on('refresh', () => this.fetchData());
        },
        methods: {
            fetchData() {
                this.isLoading = true;
                axios.get(this.action)
                    .then(response => {
                        this.count = response.data;
                        this.isLoading = false;
                    })
                    .catch(error => console.error(error));
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../sass/variables";
    .fa {
        color: $brand-primary;
    }
</style>