
<template>
     <div class="sidebar" @mouseenter="isMenuOver=true" @mouseleave="isMenuOver=false"  @touchstart="isMenuOver=true" >
        <div class="main-menu">
            <vue-perfect-scrollbar class="scroll" :settings="{ suppressScrollX: true, wheelPropagation: false }" >
                <ul class="list-unstyled">

                    <li :class="{ active : selectedParentMenu==='dashboards' }"><a @click.prevent="openSubMenu($event,'dashboards')" href="#dashboards"><i class="iconsminds-shop-4"></i>{{ $t("menu.dashboards") }}</a></li>
                   <li :class="{ active : selectedParentMenu==='pages'}"><a @click.prevent="openSubMenu($event,'pages')" href="#pages"><i class="iconsminds-digital-drawing"></i>{{ $t("menu.pages") }}</a></li>
                   <li :class="{ active : selectedParentMenu==='applications'}"><a @click.prevent="openSubMenu($event,'applications')" href="#applications"><i class="iconsminds-air-balloon-1"></i>{{ $t("menu.applications") }}</a></li>
                   <li :class="{ active : selectedParentMenu==='ui'}"><a @click.prevent="openSubMenu($event,'ui')" href="#ui"><i class="iconsminds-pantone"></i>{{ $t("menu.ui") }}</a></li>
                   <li :class="{ active : selectedParentMenu==='menu'}"><a @click.prevent="openSubMenu($event,'menu')" href="#menu"><i class="iconsminds-three-arrow-fork"></i>{{ $t("menu.menu") }}</a></li>

                   <!-- Single Menu
                    <router-link :class="{ active : selectedParentMenu==='dashboards' }" @click.native="changeSelectedParentHasNoSubmenu('dashboards')" to="/app/dashboards/default" tag="li">
                      <a><i class="iconsminds-digital-drawing"></i>  {{ $t("menu.dashboards") }}</a>
                    </router-link>
                    <router-link :class="{ active : selectedParentMenu==='pages' }" @click.native="changeSelectedParentHasNoSubmenu('pages')" to="/app/pages/data-list" tag="li">
                      <a><i class="iconsminds-digital-drawing"></i>  {{ $t("menu.pages") }}</a>
                    </router-link>
                    <router-link :class="{ active : selectedParentMenu==='applications' }" @click.native="changeSelectedParentHasNoSubmenu('applications')" to="/app/applications/todo" tag="li">
                      <a><i class="iconsminds-digital-drawing"></i>  {{ $t("menu.applications") }}</a>
                    </router-link>
                     -->
                </ul>
            </vue-perfect-scrollbar>
        </div>

        <div class="sub-menu">
             <vue-perfect-scrollbar class="scroll" :settings="{ suppressScrollX: true, wheelPropagation: false }" >
                <ul class="list-unstyled" data-link="dashboards" :class="{'d-block':selectedParentMenu==='dashboards' }">
                    <router-link tag="li" to="/app/dashboards/default"><a><i class="simple-icon-briefcase"></i> {{ $t("menu.default") }}</a></router-link>
                    <router-link tag="li" to="/app/dashboards/analytics"><a><i class="simple-icon-pie-chart"></i> {{ $t("menu.analytics") }}</a></router-link>
                    <router-link tag="li" to="/app/dashboards/ecommerce"><a><i class="simple-icon-basket-loaded"></i> {{ $t("menu.ecommerce") }}</a></router-link>
                    <router-link tag="li" to="/app/dashboards/content"><a><i class="simple-icon-doc"></i> {{ $t("menu.content") }}</a></router-link>
                </ul>

                <ul class="list-unstyled" data-link="pages" :class="{'d-block':selectedParentMenu==='pages' }">
                    <router-link tag="li" to="/app/pages/data-list"><a><i class="simple-icon-credit-card"></i> {{ $t("menu.data-list") }}</a></router-link>
                    <router-link tag="li" to="/app/pages/thumb-list"><a><i class="simple-icon-list"></i> {{ $t("menu.thumb-list") }}</a></router-link>
                    <router-link tag="li" to="/app/pages/image-list"><a><i class="simple-icon-grid"></i> {{ $t("menu.image-list") }}</a></router-link>
                    <router-link tag="li" to="/app/pages/details"><a><i class="simple-icon-book-open"></i> {{ $t("menu.details") }}</a></router-link>
                    <router-link tag="li" to="/app/pages/search"><a><i class="simple-icon-magnifier"></i> {{ $t("menu.search") }}</a></router-link>
                    <router-link tag="li" to="/app/pages/mailing"><a><i class="simple-icon-envelope-open"></i> {{ $t("menu.mailing") }}</a></router-link>
                    <router-link tag="li" to="/app/pages/invoice"><a><i class="simple-icon-bag"></i> {{ $t("menu.invoice") }}</a></router-link>
                    <router-link tag="li" to="/user/login"><a target="_blank"><i class="simple-icon-user-following"></i> {{ $t("menu.login") }}</a></router-link>
                    <router-link tag="li" to="/user/register"><a target="_blank"><i class="simple-icon-user-follow"></i> {{ $t("menu.register") }}</a></router-link>
                    <router-link tag="li" to="/user/forgot-password"><a target="_blank"><i class="simple-icon-user-unfollow"></i> {{ $t("menu.forgot-password") }}</a></router-link>
                    <router-link tag="li" to="/error"><a target="_blank"><i class="simple-icon-exclamation"></i> {{ $t("menu.error") }}</a></router-link>
                </ul>

                <ul class="list-unstyled" data-link="applications" :class="{'d-block':selectedParentMenu==='applications' }">
                    <router-link tag="li" to="/app/applications/todo"><a><i class="simple-icon-check"></i> {{ $t("menu.todo") }}</a></router-link>
                    <router-link tag="li" to="/app/applications/survey"><a><i class="simple-icon-calculator"></i> {{ $t("menu.survey") }}</a></router-link>
                    <router-link tag="li" to="/app/applications/chat"><a><i class="simple-icon-bubbles"></i> {{ $t("menu.chat") }}</a></router-link>
                </ul>

                <ul class="list-unstyled" data-link="ui" :class="{'d-block':selectedParentMenu==='ui' }">
                    <router-link tag="li" to="/app/ui/alerts"><a><i class="simple-icon-bell"></i> {{ $t("menu.alerts") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/badges"><a><i class="simple-icon-badge"></i> {{ $t("menu.badges") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/buttons"><a><i class="simple-icon-control-play"></i> {{ $t("menu.buttons") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/cards"><a><i class="simple-icon-layers"></i> {{ $t("menu.cards") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/carousel"><a><i class="simple-icon-picture"></i> {{ $t("menu.carousel") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/charts"><a><i class="simple-icon-chart"></i> {{ $t("menu.charts") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/collapse"><a><i class="simple-icon-arrow-up"></i> {{ $t("menu.collapse") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/dropdowns"><a><i class="simple-icon-arrow-down"></i> {{ $t("menu.dropdowns") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/editors"><a><i class="simple-icon-book-open"></i> {{ $t("menu.editors") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/forms"><a><i class="simple-icon-check mi-forms"></i> {{ $t("menu.forms") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/form-components"><a><i class="simple-icon-puzzle"></i> {{ $t("menu.form-components") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/icons"><a><i class="simple-icon-star"></i> {{ $t("menu.icons") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/input-groups"><a><i class="simple-icon-note"></i> {{ $t("menu.input-groups") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/jumbotron"><a><i class="simple-icon-screen-desktop"></i> {{ $t("menu.jumbotron") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/maps"><a><i class="simple-icon-map"></i> {{ $t("menu.maps") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/modal"><a><i class="simple-icon-docs"></i> {{ $t("menu.modal") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/navigation"><a><i class="simple-icon-cursor"></i> {{ $t("menu.navigation") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/popover-tooltip"><a><i class="simple-icon-pin"></i> {{ $t("menu.popover-tooltip") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/sortable"><a><i class="simple-icon-shuffle"></i> {{ $t("menu.sortable") }}</a></router-link>
                    <router-link tag="li" to="/app/ui/tables"><a><i class="simple-icon-grid"></i> {{ $t("menu.tables") }}</a></router-link>
                </ul>

                <ul class="list-unstyled" data-link="menu" :class="{'d-block':selectedParentMenu==='menu' }">
                    <router-link tag="li" to="#/app/menu/default" @click.native.prevent="changeDefaultMenuType('menu-default')"><a><i class="simple-icon-control-pause"></i> {{ $t("menu.default") }}</a></router-link>
                    <router-link tag="li" to="#/app/menu/subhidden" @click.native.prevent="changeDefaultMenuType('menu-sub-hidden')"><a><i class="simple-icon-arrow-left mi-subhidden"></i> {{ $t("menu.subhidden") }}</a></router-link>
                    <router-link tag="li" to="#/app/menu/hidden" @click.native.prevent="changeDefaultMenuType('menu-hidden')"><a><i class="simple-icon-control-start mi-hidden"></i> {{ $t("menu.hidden") }}</a></router-link>
                </ul>
            </vue-perfect-scrollbar>

        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { menuHiddenBreakpoint, subHiddenBreakpoint } from '@/constants/config'

export default {
  data () {
    return {
      selectedParentMenu: '',
      isMenuOver: false
    }
  },
  mounted () {
    this.selectMenu()
    window.addEventListener('resize', this.handleWindowResize)
    document.addEventListener('click', this.returnSelectedMenu)
    this.handleWindowResize()
  },
  beforeDestroy () {
    document.removeEventListener('click', this.returnSelectedMenu)
    window.removeEventListener('resize', this.handleWindowResize)
  },

  methods: {
    ...mapMutations(['changeSideMenuStatus', 'addMenuClassname', 'changeSelectedMenuHasSubItems']),
    selectMenu () {
      const currentParentUrl = this.$route.path.split('/').filter(x => x !== '')[1]
      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase()
      } else {
        this.selectedParentMenu = 'dashboards'
      }
    },
    changeSelectedParentHasNoSubmenu (parentMenu) {
      this.selectedParentMenu = parentMenu
      this.changeSelectedMenuHasSubItems(false)
    },
    openSubMenu (e, selectedParent) {
      this.changeSelectedMenuHasSubItems(true)

      const currentClasses = this.menuType ? this.menuType.split(' ').filter(x => x !== '') : ''

      if (!currentClasses.includes('menu-mobile')) {
        if (
          currentClasses.includes('menu-sub-hidden') &&
          (this.menuClickCount === 2 || this.menuClickCount === 0)
        ) {
          this.changeSideMenuStatus({ step: 3, classNames: this.menuType })
        } else if (
          currentClasses.includes('menu-hidden') &&
          (this.menuClickCount === 1 || this.menuClickCount === 3)
        ) {
          this.changeSideMenuStatus({ step: 2, classNames: this.menuType })
        } else if (
          currentClasses.includes('menu-default') &&
          !currentClasses.includes('menu-sub-hidden') &&
          (this.menuClickCount === 1 || this.menuClickCount === 3)
        ) {
          this.changeSideMenuStatus({ step: 0, classNames: this.menuType })
        }
      } else {
        this.addMenuClassname({ classname: 'sub-show-temporary', currentClasses: this.menuType })
      }
      this.selectedParentMenu = selectedParent
    },
    addEvents () {
      document.addEventListener('click', this.handleDocumentClick)
    },
    removeEvents () {
      document.removeEventListener('click', this.handleDocumentClick)
    },
    returnSelectedMenu () {
      if (!this.isMenuOver) {
        this.selectMenu()
      }
    },
    handleDocumentClick (e) {
      if (!this.isMenuOver) {
        let cont = true
        e.path.map(p => {
          if (p.nodeName !== 'svg' && p.className !== undefined && p.className.indexOf('menu-button') > -1) {
            cont = false
          }
        })
        if (cont) {
          this.toggle()
        }
      }
    },
    toggle () {
      const currentClasses = this.menuType.split(' ').filter(x => x !== '')
      if (currentClasses.includes('menu-sub-hidden') && this.menuClickCount === 3) {
        this.changeSideMenuStatus({ step: 2, classNames: this.menuType })
      } else if (currentClasses.includes('menu-hidden') || currentClasses.includes('menu-mobile')) {
        this.changeSideMenuStatus({ step: 0, classNames: this.menuType })
      }
    },
    // Resize
    handleWindowResize (event) {
      if (event && !event.isTrusted) {
        return
      }
      let nextClasses = this.getMenuClassesForResize(this.menuType)
      this.changeSideMenuStatus({ step: 0, classNames: nextClasses.join(' ') })
    },
    getMenuClassesForResize (classes) {
      let nextClasses = classes.split(' ').filter(x => x !== '')
      const windowWidth = window.innerWidth

      if (windowWidth < menuHiddenBreakpoint) {
        nextClasses.push('menu-mobile')
      } else if (windowWidth < subHiddenBreakpoint) {
        nextClasses = nextClasses.filter(x => x !== 'menu-mobile')
        if (
          nextClasses.includes('menu-default') &&
          !nextClasses.includes('menu-sub-hidden')
        ) {
          nextClasses.push('menu-sub-hidden')
        }
      } else {
        nextClasses = nextClasses.filter(x => x !== 'menu-mobile')
        if (
          nextClasses.includes('menu-default') &&
          nextClasses.includes('menu-sub-hidden')
        ) {
          nextClasses = nextClasses.filter(x => x !== 'menu-sub-hidden')
        }
      }
      return nextClasses
    },
    // Change Default Menu Type
    changeDefaultMenuType (containerClassnames) {
      let nextClasses = this.getMenuClassesForResize(containerClassnames)
      this.changeSideMenuStatus({ step: 0, classNames: nextClasses.join(' ') })
    }
  },
  computed: {
    ...mapGetters({
      menuType: 'getMenuType',
      menuClickCount: 'getMenuClickCount',
      selectedMenuHasSubItems: 'getSelectedMenuHasSubItems'
    })
  },
  watch: {
    menuType: function (val) {
      if (val.indexOf('show-temporary') > -1) {
        this.addEvents()
      } else {
        this.removeEvents()
      }
    },
    '$route' (to, from) {
      if (to.path !== from.path) {
        this.changeSideMenuStatus({ step: 0, classNames: this.menuType })
        this.selectMenu()
        window.scrollTo(0, top)
      }
    }
  }
}
</script>
