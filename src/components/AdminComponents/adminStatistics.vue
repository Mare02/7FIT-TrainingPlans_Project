<template>
    <div class="statistic-wrapper">
        <h1 class="main-header">7FIT STATISTICS FOR <b>ALMOST</b> EVERYTHING!</h1>
        <div class="nav-container">
            <a href="#users-wrapper" class="nav-items">Users</a>
            <a href="#exercises-wrapper" class="nav-items">Exercises</a>
            <a href="#plans-wrapper" class="nav-items">Plans</a>
        </div>
        <div class="content-wrapper">
            <div id="users-wrapper">
                <h1 class="section-header">Statistics for users</h1>
            </div>
            <div id="exercises-wrapper">
                <h1 class="section-header">Statistics for exercises</h1>
            </div>
            <div id="plans-wrapper">
                <h1 class="section-header">Statistics for plans</h1>
            </div>
        </div>
        <div id="go-up">
            <a href="#"><i class="fa fa-arrow-up fa-5x fa-bounce " aria-hidden="true"></i></a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>
html{
    scroll-behavior: smooth;
}
h1{
    font-family: 'Bebas Neue', cursive;
    color: white;
}
b{
    color: #eb2626;
}
.statistic-wrapper{
    position: relative;
}
.nav-container{
    /* border: 1px solid white; */
    padding: 3px;
    top: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    width: 90%;
    border-bottom: 1px solid white;
}
div.nav-container{
    position: sticky;
    top: 0;
}
.nav-container .nav-items{
    font-family: 'Bebas Neue', cursive;
    background-color: rgb(101, 101, 101);
    /* color: black; */
    font-size: 1.5rem;
    overflow: hidden;
    border: 1px solid rgb(141, 141, 141);
    width: 26%;
    height: 2rem;
    text-align: center;
    padding: 0;
}
.main-header{
    text-align: left ;
    font-size: 4rem;
}
#users-wrapper, #exercises-wrapper, #plans-wrapper{
    width: 100%;
    height: 95vh;
}
.section-header{
    text-decoration: underline;
}
#users-wrapper{
    margin-top: 1rem;
}

/* go up button */
#go-up{
    position: fixed;
    bottom: 1rem;
    right: 10rem;
    z-index: 999;
}
#go-up i{
    color: white;
}
#go-up i:hover {
    color: rgb(138, 118, 118);
}


</style>