<template>
    <h1>User with id {{ $route.params.id}} </h1>
</template>

<script>
export default {
    validate({params}) {
        
        return /^\d+$/.test(params.id) //! проверка на число  
    }
}
</script>