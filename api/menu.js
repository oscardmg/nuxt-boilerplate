const Menu = [
  { header: 'Apps' },
  {
    text: 'Dashboard',
    icon: 'mdi-view-dashboard',
    to: '/dashboard'
  },
  {
    text: 'Empty',
    icon: 'mdi-chat',
    to: '/empty'
  },
  {
    text: 'Media',
    to: '/media',
    icon: 'mdi-folder-multiple-image'
  },
  {
    text: 'Widgets',
    group: 'widgets',
    to: '/widgets',
    icon: 'mdi-widgets',
    children: [
      { to: '/widgets/social', text: 'Social', meta: { title: 'Social' } },
      { to: '/widgets/statistic', text: 'Statistic', badge: 'new' },
      { to: '/widgets/chart', text: 'Chart' },
      { to: '/widgets/list', text: 'List' }
    ]
  },

  {
    text: 'Forms & Controls',
    group: 'form',
    to: '/form',
    icon: 'mdi-pencil',
    children: [
      { to: '/form/basicform', text: 'General' },
      { to: '/form/selectioncontrols', text: 'Selection controls' },
      { to: '/form/selects', text: 'Selects' },
      { to: '/form/steppers', text: 'Steppers' },
      { to: '/form/textfields', text: 'Text fields' }
    ]
  },
  {
    text: 'Pages',
    group: 'pages',
    to: '/login',
    icon: 'mdi-book',
    children: [
      { to: '/login', text: 'Login' },
      {
        text: 'Chat',
        icon: 'mdi-chat_bubble',
        target: '_blank',
        to: '/chat'
      },
      {
        text: 'Inbox',
        to: '/mail/all',
        target: '_blank',
        icon: 'mdi-email'
      }
    ]
  }
]

export default Menu
