<template>
    <div>
        <p id="functest"></p>
    </div>
</template>

<script>
    export default {
        name: "ES6regTest"
    };
    function myfunc(){
        let text = "𠮷a";
        console.log(String.fromCodePoint(134071));
    }
    function is32Bit(c){
        return c.codePointAt(0) > 0xFFFF;
    }
    console.log(is32Bit("𠮷"));
    console.log(is32Bit("a"));
    document.getElementById("functest").innerText = myfunc();

</script>

<style scoped>

</style>