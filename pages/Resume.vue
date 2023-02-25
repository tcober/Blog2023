<template>
  <PageTransition>
    <div class="bg-[#0d112f]">
      <main
        id="resume"
        class="bg-white max-w-4xl block relative mx-auto my-0 px-8 py-6"
      >
        <header
          class="resume-header flex flex-col sm:flex-row justify-start sm:items-center"
        >
          <div class="profile-pic mb-5 sm:mb-0 sm:mr-6">
            <nuxt-img
              preload
              src="https://media-exp1.licdn.com/dms/image/C4D03AQF8SJ4bmgkcPQ/profile-displayphoto-shrink_400_400/0/1639881931562?e&#x3D;1676505600&amp;v&#x3D;beta&amp;t&#x3D;z6TbtRP3XVoT8bHxDdIA7FY5mm6Z3TbQPUADzE6Shy4"
              alt="profile-pic"
            />
          </div>
          <div class="flex flex-col sm:flex-row sm:items-end justify-start">
            <div class="profile-header mr-6 mb-1 sm:mb-0">
              <h1 class="mb-1">Thomas Cober</h1>
              <h2>Senior Javascript Engineer</h2>
            </div>
            <div class="mb-0.5">
              <p class="text-xs">tcober5@gmail.com</p>
              <p class="text-xs">thomascober.com</p>
            </div>
          </div>
        </header>
        <div class="resume-content flex sm:flex-row flex-col-reverse">
          <div
            class="left-column sm:w-1/2 sm:border-r-black sm:border-solid sm:border-r-2 sm:pr-8"
          >
            <div class="container work-container">
              <div class="title">
                <h3>Experience</h3>
                <div class="keyline"></div>
              </div>

              <section class="item">
                <div class="section-header flex justify-between">
                  <h3 class="font-bold">RBC</h3>
                  <h5 class="italic">
                    <span class="startDate">02/2020</span>
                    <span class="endDate"> - Present</span>
                  </h5>
                </div>

                <h4>Senior Developer</h4>

                <p class="summary text-xs">
                  Royal Bank of Canada Wealth Management helps people manage
                  their financial future.
                </p>

                <ul class="text-xs pl-7">
                  <li>Contributed to an A+ Vue frontend</li>
                  <li>Refactored and contributed to a Node middle tear</li>
                </ul>
              </section>
              <section class="item">
                <div class="section-header flex justify-between">
                  <h3 class="font-bold pull-left">SDG</h3>
                  <h5 class="italic pull-right">
                    <span class="startDate">05/2018</span>
                    <span class="endDate"> - 09/2019</span>
                  </h5>
                </div>

                <h4>Contract Front End Developer</h4>

                <p class="summary text-xs">
                  Solution Design Group provides staffing augmentation to help
                  companies all around the world meet their digital needs.
                </p>

                <ul class="text-xs pl-7">
                  <li>Built 2 enterprise sized web apps</li>
                  <li>Learned how to be a great contractor</li>
                </ul>
              </section>
              <section class="item">
                <div class="section-header flex justify-between">
                  <h3 class="font-bold pull-left">Pediatric Home Service</h3>
                  <h5 class="italic pull-right">
                    <span class="startDate">04/2017</span>
                    <span class="endDate"> - 05/2018</span>
                  </h5>
                </div>

                <h4>Front End Developer</h4>

                <p class="summary text-xs">
                  Pediatric Home Service helps severely disabled children get
                  the medical help they need so they are able to live at home
                  safely.
                </p>

                <ul class="text-xs pl-7">
                  <li>
                    Built an ecommerce web app for delivering medical supplies
                  </li>
                  <li>
                    Maintained and built several promotional Wordpress sites
                  </li>
                </ul>
              </section>
              <section class="item">
                <div class="section-header flex justify-between">
                  <h3 class="font-bold pull-left">Iron Horse Interactive</h3>
                  <h5 class="italic pull-right">
                    <span class="startDate">10/2016</span>
                    <span class="endDate"> - 04/2017</span>
                  </h5>
                </div>

                <h4>Front End Developer</h4>

                <p class="summary text-xs">
                  Iron Horse Interactive is a B2B marketing company focusing on
                  the VR/AR industry.
                </p>

                <ul class="text-xs pl-7">
                  <li>Helped with marketing site development</li>
                  <li>Installed analytics</li>
                  <li>Made SEO optimizations</li>
                </ul>
              </section>
              <section class="item">
                <div class="section-header flex justify-between">
                  <h3 class="font-bold pull-left">Lytics</h3>
                  <h5 class="italic pull-right">
                    <span class="startDate">10/2015</span>
                    <span class="endDate"> - 09/2016</span>
                  </h5>
                </div>

                <h4>Junior Developer</h4>

                <p class="summary text-xs">
                  Lytics is a marketing analytics customer data platform that
                  consolidates data and uses AI to analyze that data.
                </p>

                <ul class="text-xs pl-7">
                  <li>Learned foundational developer skills</li>
                  <li>Designed and programmed a new marketing site</li>
                  <li>Designed and programmed promotional sites</li>
                </ul>
              </section>
            </div>
            <div class="container mt-3 sm:mt-0 education-container">
              <div class="title">
                <h3>Education</h3>
                <div class="keyline"></div>
              </div>

              <section class="item">
                <div class="section-header">
                  <h3 class="font-bold pull-left">Portland State University</h3>
                  <h5 class="italic pull-right">
                    <span class="startDate">09/2010</span>
                    <span class="endDate"> - 06/2013</span>
                  </h5>
                </div>

                <h4 class="tracking-wider text-xs">
                  Bachelors in Graphic and Interactive Design
                </h4>
              </section>

              <section class="item">
                <div class="section-header">
                  <h3 class="font-bold">Kishwaukee Community College</h3>
                  <h5 class="italic">
                    <span class="startDate">09/2010</span>
                    <span class="endDate"> - 06/2009</span>
                  </h5>
                </div>

                <h4 class="tracking-wider text-xs">
                  Associates in General Studies
                </h4>
              </section>
            </div>
            <ResumeOutsideInterests class="sm:hidden" />
          </div>
          <div class="right-column sm:w-1/2 sm:pl-8">
            <div class="container">
              <div class="title">
                <h3>Skills</h3>
                <div class="keyline"></div>
              </div>

              <section class="flex flex-col">
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">Vue</h4>
                  <font-awesome-icon
                    v-for="index in 5"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">HTML</h4>
                  <font-awesome-icon
                    v-for="index in 5"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">CSS/SASS</h4>
                  <font-awesome-icon
                    v-for="index in 5"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">Angular 2+</h4>
                  <font-awesome-icon
                    v-for="index in 3"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">Javascript</h4>
                  <font-awesome-icon
                    v-for="index in 5"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">Grunt</h4>
                  <font-awesome-icon
                    v-for="index in 3"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">PHP</h4>
                  <font-awesome-icon
                    v-for="index in 2"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">Adobe CC</h4>
                  <font-awesome-icon
                    v-for="index in 2"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">Storyblok</h4>
                  <font-awesome-icon
                    v-for="index in 3"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">CL Tools</h4>
                  <font-awesome-icon
                    v-for="index in 4"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">Git</h4>
                  <font-awesome-icon
                    v-for="index in 4"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">Jest</h4>
                  <font-awesome-icon
                    v-for="index in 4"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">Node</h4>
                  <font-awesome-icon
                    v-for="index in 3"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">Losing My Keys</h4>
                  <font-awesome-icon
                    v-for="index in 5"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
                <div class="flex flex-row mb-4">
                  <h4 class="w-44 font-light">Supporting My Team</h4>
                  <font-awesome-icon
                    v-for="index in 5"
                    class="text-base mr-1.5"
                    icon="fa-solid fa-circle"
                  />
                </div>
              </section>
              <ResumeOutsideInterests class="hidden sm:block" />
            </div>
          </div>
        </div>
      </main>
    </div>
  </PageTransition>
</template>

<script setup>
useHead({
  title: "Thomas Cober's Resume",
  meta: [
    {
      name: "description",
      content: "A json resume version of my resume.",
    },
  ],
  bodyAttrs: {
    class: "resume",
  },
});
</script>

<style scoped>
@import "~/assets/css/resume.css";
</style>
