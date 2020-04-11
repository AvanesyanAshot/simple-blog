<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Blog</a>
            <div class="collapse navbar-collapse" >
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <nuxt-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/users">Users</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/about">about</nuxt-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>  
</template>

<script>
export default {
    
}
</script>