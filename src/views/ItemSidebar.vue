<template>
    <div>
    <nav class="col-md-2 d-none d-md-block sidebar" style="box-shadow:none;padding:150px 0 0 50px">
      <div class="sidebar-sticky">
        <ul class="nav flex-column mb-2">
          <li class="nav-item mb-3">
            <router-link to="/buyitem/" class="nav-link">
              <button type="button" class="btn btn-outline-secondary" style="border:3px #AAAAAA ridge;border-radius:10px;">&nbsp;&nbsp;&nbsp;劍&nbsp;&nbsp;&nbsp;</button>
            </router-link>
          </li>
          <li class="nav-item mb-3">
            <router-link to="/buyitem/shield" class="nav-link">
              <button type="button" class="btn btn-outline-secondary" style="border:3px #AAAAAA ridge;border-radius:10px;">&nbsp;&nbsp;&nbsp;盾&nbsp;&nbsp;&nbsp;</button>
            </router-link>
          </li>
          <li class="nav-item mb-3">
            <router-link to="/buyitem/prop" class="nav-link">
              <button type="button" class="btn btn-outline-secondary" style="border:3px #AAAAAA ridge;border-radius:10px;">&nbsp;道具&nbsp;</button>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
</template>
