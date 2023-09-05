export function Description({ projectKey = '' }: { projectKey: string }) {
  if (projectKey === '') return <></>;

  switch (projectKey) {
    case 'twoyay':
      return <TwoYay />;
    case 'biteable':
      return <Biteable />;
    case 'quitthehit':
      return <QuitTheHit />;
    case 'hustleandstrive':
      return <HustleAndStrive />;
    case 'sunsickstudio':
      return <SunsickStudio />;
    case 'behindthehaze':
      return <BehindTheHaze />;
    case 'quitnowsc':
      return <QuitNowSC />;
    case 'rethinkrecovery':
      return <RethinkRecovery />;
    default:
      return <></>;
  }
}

function TwoYay() {
  return (
    <ul>
      <li>
        <strong>Overview:</strong>&nbsp;TwoYay is a platform that connects
        social media influencers &amp; content creators with advertisers in
        order to facilitate paid promotions. It allows advertisers to create
        campaigns that influencers can apply to and get paid for their work. I
        was involved in the development of their new Open Collaborations system,
        which is a job-listing service that allows advertisers to create open
        paid-promotions that influencers can apply to.
      </li>
      <li>
        <strong>Goal:</strong>&nbsp;Allow advertisers to create open
        paid-promotions that content creators can apply to.
      </li>
      <li>
        <strong>My Roles:</strong>&nbsp;Lead Front-End Engineer
      </li>
      <li>
        <strong>Solution:</strong>&nbsp;I developed a new set of UI components
        that compose the Open Collaborations feature. I used React.js,
        TypeScript, Next.js & TailwindCSS to create a highly performant and
        scalable UI system. I also used Storybook to create a shared UI library
        that is used across the Open Collaborations suite.
      </li>
      <li>
        <strong>Result:</strong>&nbsp;The new Open Collaborations system has
        been successfully launched and is currently being used by a large number
        of advertisers and social media influencers.
      </li>
    </ul>
  );
}

function Biteable() {
  return (
    <ul>
      <li>
        <strong>Overview:</strong> Biteable is an online video maker. Their core
        mission is to allow people to bring their messages to life. Biteable.com
        is the main home and entry point for the Biteable app.
      </li>
      <li>
        <strong>Goal:</strong> Improve current ACF/PHP-based app with a new
        system that allows authors to manage web content effectively as well as
        improve website speed, detach data-layer from UI, and greatly improve
        the website experience for the end-users.
      </li>
      <li>
        <strong>My Roles:</strong> Full-Stack Engineer
      </li>
      <li>
        <strong>Solution:</strong> Developed a cutting-edge headless
        architecture using React.js/Next.js and PHP/WordPress as the CMS using
        custom Gutenberg blocks along with a shared UI library from scratch
        using React.js & Storybook.
      </li>
      <li>
        <strong>Result:</strong> Delivered a one-of-a-kind headless system with
        a shared UI library that is fed to both WordPress&apos; Gutenberg page
        editor as well as a separate Next.js app to generate static pages using
        the data from the WordPress API. This provided authors with advanced
        page building capabilities and allowed engineers to develop efficient &
        semantic UI and deliver it to the end-users faster.
      </li>
    </ul>
  );
}

function QuitTheHit() {
  return (
    <ul>
      <li>
        <strong>Overview:</strong> Quit the Hit is a program that helps youth
        and adult audiences quit vaping through the guidance of a coach.
      </li>
      <li>
        <strong>Goal:</strong> Create a system that connects youth audiences
        with coaches.
      </li>
      <li>
        <strong>My Roles:</strong> lead engineer, project architecture, database
        design, UI/UX
      </li>
      <li>
        <strong>Solution:</strong> I created a web application with Nuxt.js and
        Node.js + Express.js on the back-end. I used MySQL as the database
        language alongside the Sequelize ORM for Node.js. I also used the
        Qualtrics API for survey integration.
      </li>
      <li>
        <strong>Result:</strong> Multi-year extension of original contract as
        well as the acquisition of new contracts for other national
        organizations.
      </li>
    </ul>
  );
}

function HustleAndStrive() {
  return (
    <ul>
      <li>
        <strong>Overview:</strong> Hustle & Strive is an online self-help
        program which helps youth audiences stay away from addictive substances
        by teaching them coping techniques.
      </li>
      <li>
        <strong>Goal:</strong> Create interactive program with surveys, videos
        and digital experiences to teach users core coping mechanisims.
      </li>
      <li>
        <strong>My Roles:</strong> lead engineer, front-end architecture, UI/UX,
        back-end development
      </li>
      <li>
        <strong>Solution:</strong> I created a PHP laravel application with
        Vue.js on the front. I used MySQL for the database, and incorporated
        Laravel Nova as an administration back-end which was used by admins and
        stakeholders
      </li>
      <li>
        <strong>Result:</strong> program ran for multiple years, generated wide
        range of users and facilitated a new contract recently.
      </li>
    </ul>
  );
}

function SunsickStudio() {
  return (
    <ul>
      <li>
        <strong>Overview:</strong> Sunsick Studio is a music recording studio
        located in San Diego, California.
      </li>
      <li>
        <strong>Goal:</strong> develop a customizable website to serve as the
        main hub for Sunsick Studio&apos;s online presence, to display their
        work and, to gather more inquiries for recording work.
      </li>
      <li>
        <strong>My Roles:</strong> UI/UX designer, lead engineer, front-end
        development, headless CMS setup and configuration
      </li>
      <li>
        <strong>Solution:</strong> I designed a website that aligns with Sunsick
        Studio&apos;s brand. I used Figma to create wireframes and comps. I
        developed the website with React.js, JavaScript, and Next.js for SEO. In
        order to make the site customizble, I created a headless CMS
        architecture using Strapi.
      </li>
      <li>
        <strong>Result:</strong> Program is currently in the final stages of
        development and is expected to launch soon.
      </li>
    </ul>
  );
}

function BehindTheHaze() {
  return (
    <ul>
      <li>
        <strong>Overview:</strong> Behind the Haze is a multi-state anti-vaping
        campaign aimed at youth audiences.
      </li>
      <li>
        <strong>Goal:</strong> develop a high quality website that can be easily
        repurposed and licensed. Implement lots of interactive modules to create
        an eye-catching website.
      </li>
      <li>
        <strong>My Roles:</strong> lead engineer, front-end development, project
        architecture
      </li>
      <li>
        <strong>Solution:</strong> I created a website that is highly abstracted
        and modular. Following a component-based pattern, I developed fully
        abstracted UIs that can be easily plugged in anywhere. I created various
        interactive modules such as carousels, sliders, tappers, etc., and
        implemented parallax effects and CSS animations/transitions to make the
        website feel alive.
      </li>
      <li>
        <strong>Result:</strong> Obtained multiple clients across various states
        that have now adoped and licensed the site.
      </li>
    </ul>
  );
}

function RethinkRecovery() {
  return (
    <ul>
      <li>
        <strong>Overview:</strong> Rethink Recovery is a website for the
        Illinois Department of Human Services, to promote and raise awareness of
        their Medication-Assisted Recovery (MAR) treatment.{' '}
      </li>
      <li>
        <strong>Goal:</strong> Develop a website that is highly aesthetic,
        eye-catching and informative.
      </li>
      <li>
        <strong>My Roles:</strong> lead engineer, front-end development, project
        architecture
      </li>
      <li>
        <strong>Solution:</strong> I used HTML, SCSS, Vue.js and Nuxt.js to
        create a website that completed the requirements. I also used parallax
        effects, fade-in animations and CSS transitions and animations to create
        an eye-catching website.
      </li>
      <li>
        <strong>Result:</strong> This work resulted in the acquisition of a new
        client contract.
      </li>
    </ul>
  );
}

function QuitNowSC() {
  return (
    <ul>
      <li>
        <strong>Overview:</strong> Quit Now SC is a website for the South
        Carolina Tobacco Quitline. The purpose of this website was to create a
        main hub to raise awareness about the client&apos;s quitline resources
        and the road to quitting tobacco for good.
      </li>
      <li>
        <strong>Goal:</strong> develop a website that easy to navigate,
        accessible and can be updated easily.
      </li>
      <li>
        <strong>My Roles:</strong> lead engineer, front-end development, project
        architecture
      </li>
      <li>
        <strong>Solution:</strong> I created a system that fully abstracts the
        markup, and it&apos;s all configured with JavaScript objects and
        abstracted components. I used HTML, SCSS, JavaScript, Nuxt.js, Vue.js +
        more tools to develop the site.
      </li>
      <li>
        <strong>Result:</strong> This website resulted in successful contract
        completion and a happy client. The site has been viewed now by thousands
        of users and is still serving as one of the main hubs for users looking
        to use the Quitline resources in South Carolina.
      </li>
    </ul>
  );
}
