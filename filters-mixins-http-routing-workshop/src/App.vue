<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <app-navigation :nav-items="technologies"></app-navigation>
      <router-view :technologies="technologies"></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/core/Header';
import AppFooter from './components/core/Footer';
import AppNavigation from './components/core/Navigation';

export default {
  name: 'App',
  props: {
    technologies: {
      type: Array,
      required: true
    },
  },
  components: {
    AppHeader,
    AppFooter,
    AppNavigation
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
body {
  font-family: "Lato", sans-serif;
}

#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/** ************************************** **/

header {
  padding: 1em 2em;
  margin: 0;
}

header section {
  display: inline-block;
  vertical-align: middle;
  width: 45%;
  margin: 0 2%;
}

header section:nth-child(1) {
  text-align: left;
}

header section:nth-child(2) {
  text-align: right;
}

header section:nth-child(2) img {
  width: 28%;
  max-width: 100%;
  padding: 0 3em;
  vertical-align: middle;
}

header button:nth-child(1) {
  background: #fff;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  padding: 8px 12px;
  cursor: pointer;
  border: 1px solid #44a9f8;
  outline: none;
}

header button:nth-child(1) a {
  color: #44a9f8;
  text-decoration: none;
  font-family: "Lato", sans-serif;
}

header .svg-inline--fa {
  width: 0.875em;
  overflow: visible;
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}

header .social-icons {
  transform: translate(-50%, -50%);
  text-align: right;
  display: inline;
  vertical-align: bottom;
}

header .social-icons a {
  color: white;
  background: #44a9f8;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-family: fontawesome;
  display: inline-block;
  width: 35px;
  height: 26px;
  padding-top: 9px;
  margin: 0 2px;
  transition: all 0.5s;
}

/** ************************************** **/

footer {
  padding: 3em;
  background-color: #303440;
  color: white;
}

footer .section-header {
  border-bottom: 3px solid #44a9f8;
  margin: 1rem;
  color: white;
}

footer span {
  background: #44a9f8;
  color: white;
  font-size: 26px;
  border-radius: 6px 6px 0 0;
  padding: 3px 17px;
}

footer section {
  width: 20%;
  display: inline-block;
  margin: 0.5em auto;
  vertical-align: top;
}

footer ul {
  padding-left: 16px;
}

footer li {
  list-style: none;
  border-bottom: 1px solid #444444;
  padding-bottom: 6px;
}

footer a {
  text-decoration: none;
  color: white;
}

footer div:nth-child(2) section {
  display: inline-block;
  vertical-align: top;
}

footer div:nth-child(2) section:nth-child(2) {
  width: 20%;
  text-align: right;
}

footer div:nth-child(2) .social-icons a {
  font-size: 26px;
  margin: 0.3em;
  padding: 10px;
}

footer .svg-inline--fa {
  overflow: visible;
  width: 1em;
  display: inline-block;
  font-size: inherit;
  height: 1em;
  vertical-align: -0.125em;
}

/** ************************************** **/

main div.navigation {
  background: #44a9f8;
  font-size: 20px;
  text-align: left;
  display: flex;
}

main div.navigation ul {
  display: inline-block;
  text-align: left;
}

main div.navigation ul:nth-child(1) {
  width: 75%;
}

main div.navigation ul:nth-child(2) {
  width: 20%;
  text-align: right;
}

main div.navigation li {
  list-style: none;
  display: inline-block;
  margin-right: 3%;
}

main div.navigation ul:nth-child(2) li {
  width: 100%;
}

main div.navigation li a {
  padding: 1%;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

main div.navigation li a:hover {
  text-decoration: underline;
}

main div.navigation li a.active {
  text-decoration: underline;
}

main div.main-content {
  display: flex;
}

main div.main-content .content-navigation {
  width: 20%;
  border-right: 3px solid whitesmoke;
  border-left: 3px solid whitesmoke;
}

main div.main-content .subject-info {
  padding: 1%;
}

main div.main-content .subject-info p {
  font-size: 18px;
}

main .main-content .content-navigation ul {
  margin: 0;
  padding: 0;
}

main div.main-content .content-navigation ul li {
  list-style-type: none;
  padding: 10%;
  font-size: 23px;
  cursor: pointer;
  text-align: left;
}

main div.main-content .content-navigation ul li:hover {
  background: whitesmoke;
}

main div.main-content .content-navigation ul li:active {
  border-right: 5px solid #44a9f8;
}

main div.main-content .content-navigation ul li.active {
  border-right: 5px solid #44a9f8;
}

main div.main-content .content-navigation ul li a {
  color: black;
  text-decoration: none;
}

main .content-info {
  width: 80%;
  padding: 1%;
  font-size: 18px;
  display: block;
}

main .content-info .user-form input {
  padding: 1%;
  width: 25%;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-family: inherit;
}

main .content-info .user-form input:focus {
  background: rgb(255, 248, 198);
}

main .content-info .user-form .form-group {
  margin-bottom: 1%;
}

main .content-info .user-form .form-group img {
  vertical-align: bottom;
}

main .content-info .user-form button {
  padding: 1%;
  background: #44a9f8;
  color: white;
  border: none;
  width: 10%;
  font-size: 16px;
  cursor: pointer;
}

main .content-info .user-links a {
  color: black;
  text-decoration: none;
  font-weight: normal;
  margin: 2%;
}

main .content-info .user-links a:hover {
  color: #44a9f8;
  text-decoration: underline;
}

main .content-info .user-links .active-route {
  color: #44a9f8;
  text-decoration: underline;
}

/** ************************************** **/

.btn {
  padding: 1%;
  background: #44a9f8;
  color: white;
  border: none;
  width: 10%;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid white;
  display: block;
  margin: 0 auto;
  margin-top: 1%;
  margin-bottom: 1%;
}

.btn:hover {
  color: #44a9f8;
  background: white;
  border: 1px solid #44a9f8;
  text-decoration: underline;
}

div.form-group {
  margin-top: 1%;
  margin-bottom: 1%;
}

div.form-group input,
option,
select {
  font-size: 18px;
  padding: 1%;
  width: 25%;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-family: inherit;
  text-align: center;
  text-align-last: center;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

.content-preview {
  text-align: left;
  word-wrap: break-word;
  display: block;
  width: 100%;
}

/** ************************************** **/

/** ************************************** **/
</style>
