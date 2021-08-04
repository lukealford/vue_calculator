<template>
   <div id="calc_display">
        <p>{{currentValue}}</p>
   </div>
</template>

<script>
export default {
    computed: {
        currentValue(){
            return this.$store.getters.getValue;
        }
    },
}
</script>

<style>
    #calc_display{
        border: 4px solid #333;
        height: 90px;
        padding: 20px;
        background: #333;
        color: #fff;
        margin-bottom: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: flex-end;
    }
    #calc_display p{
        font-size: 3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

</style>