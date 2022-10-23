export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63555e7fb573b00a4df27560',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sgqf72eb',
                  apiId: '0ab25a8a-b5b6-4c6f-84b1-548dc4c9af85'
                },
                {
                  buildHookId: '63555e7f0f2f000cf40b2d43',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p6pcymrt',
                  apiId: '589b1015-1a8f-44dd-8cc2-cb6de8ea2e5f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KooroshTorabi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p6pcymrt.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
