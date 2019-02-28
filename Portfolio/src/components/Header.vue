<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>My Portfolio</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item router-link to="/">Top</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <!-- <b-nav-item to="/languages">Languages</b-nav-item> -->
          <b-nav-item to="/research">Research</b-nav-item>
          <b-nav-item to="/activity">Activity</b-nav-item>
          <!-- <b-nav-item to="/contacts">Contacts</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav> -->
      </b-collapse>
    </b-navbar>
  </div>
</template>
