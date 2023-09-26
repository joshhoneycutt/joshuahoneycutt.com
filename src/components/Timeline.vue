<style>
  .job-details {
    padding-left: 05%;
    padding-right: 05%;
  }

  /* Use a media query to add a breakpoint at 600px: */
  @media screen and (max-width: 600px) {
    .v-timeline {
      display: block !important; /* change the layout, when the viewport is 600px or smaller */
    }
  }
</style>

<template>
    <v-timeline align="start">
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :dot-color="year.color"
        size="small"
      >
        <template v-slot:opposite>
          <div
            :class="`pt-1 headline font-weight-bold text-${year.color}`"
            v-text="year.year"
          ></div>
        </template>
        <div>
          <h2 :class="`mt-n1 headline font-weight-bold text-${year.color}`">
            {{year.company}}
          </h2>
          <div>
            <!--{{year.body}}-->
            <template class="list-margin" v-for="role in year.role">
              <h3 :class="`mt-n1 headline mb-4`">
                {{role.title}}
              </h3>
              <div class="job-details">
                <template class="list-margin" v-for="item in role.bodyArray">
                  <p>{{ item }}</p><br>
                </template>
              </div>
            </template>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
</template>

<script>
  export default {
    data: () => ({
      years: [
        {
          color: 'blue',
          year: '2019 - Current',
          company: 'Salesforce',
          role: [
            {
              title: 'Software Engineering SMTS',
              bodyArray: [
                "Updated our custom gateway codebase to enable better scalability by adding a queueing system using SQS.",
                "Refactored our gateway codebase (Golang) to improve code readability and code coverage.",
                "Introduced LocalStack for integration testing both locally in Docker and in the CI/CD Pipeline.",
                "Provide engineering, administration, and dev-ops support for various applications using kubernetes, aws, jenkins, splunk, etc. and in-house tools."
              ]
            },
            {
              title: 'Software Engineering MTS',
              bodyArray: [
                "Began working with the Optimization Engineering.",
                "Designed and developed a Salesforce Managed Package that enabled end-users to communicate with routing engine APIs natively through the Salesforce UI.",
                "Made extensive updates to an existing managed package that enabled users to see a visualization of routing problems and key metrics within a map interface inside of Salesforce.",
                "Assisted with administration and support of various applications and infrastructure."
              ]
            },
            {
              title: 'Senior Technical Consultant',
              bodyArray: [
                "Worked hands-on with clients undergoing a digital transformation to design a personalized Salesforce experience that would meet their business needs and integrate with their existing digital infrastructure.",
                "Designed, developed, tested, and delivered multiple custom features and configurations to the Salesforce interface."
              ]
            },
            {
              title: 'Sr. Services Developer',
              bodyArray: [
                "Engaged clients on various projects to design and develop custom solutions on the Salesforce platform, including a custom routing solution utilizing MapAnything Routing Engine.",
                "Designed, developed, tested, and supported the custom routing solution, which utilized a front-end interface built with Visualforce, JavaScript (vanillaJS + several 3rd party libraries), HTML, and CSS (Lightning Design System), as well as a back-end built with Apex, Flow, and Process Builder.",
                "Utilized Salesforce-specific features such as custom fields, objects, pages, tabs, apps, permission sets, and record types to seamlessly integrate it into the Salesforce platform.",
                "Successfully delivered the solution to the client on time and received positive feedback for the easy to use design and vehicle routing ability which resulted in significant time and cost savings.",
                "Migrated over 30+ custom code solutions built for MapAnything over to Salesforce Maps within a set timeline and budet."
              ]
            }
          ]
        },
        {
          color: 'purple',
          year: '2016 - 2019',
          company: 'MapAnything',
          role: [
            {
              title: 'Sr. Services Developer',
              bodyArray: [
                "Contributed to the development and maintenance of MapAnything Live, a custom solution that allows customers to track their vehicle assets in real-time within Salesforce and provides daily reports on vehicle metrics. This involved adding new functionality to the application as well as providing ongoing support to ensure its continued performance.",
                "Played a key role in architectural decision-making, while collaborating with internal and external stakeholders to gather requirements. Provided necessary support and training to ensure smooth adoption and utilization of the technology.",
                "Continuously provided support for existing custom solutions, performing upgrades and maintenance whenever necessary.",
                "Continued developing custom code solutions for clients using the Salesforce platform using Apex, SOQL, Visualforce Pages, JavaScript, HTML, and CSS."
              ]
            },
            {
              title: 'Services Developer',
              bodyArray: [
                "As a member of the professional services team, I was responsible for developing custom code solutions for clients on the Salesforce Platform. This involved the entire software development life cycle, from building and implementing solutions to testing and maintaining them. My main focus was on ensuring that the custom code solutions met the unique requirements of each client, while also ensuring that they were scalable and maintainable in the long run.",
                "Played a key role in architectural decision-making, while collaborating with internal and external stakeholders to gather requirements. Provided necessary support and training to ensure smooth adoption and utilization of the technology.",
                "Key achievements included successfully completing multiple projects on time and within budget, and consistently delivering high-quality code that met or exceeded client expectations. Additionally, received positive feedback from clients for exceptional communication skills and ability to understand and translate their business needs into technical solutions."
              ]
            }
          ]
        },
        {
          color: 'amber',
          year: '2016 - 2016',
          company: 'SMS',
          role: [
            {
              title: 'Reporting Data Analyst',
              bodyArray: [
                "Responsible for developing, servicing, and optimizing reports in Tableau and SSRS, as well as maintaining the reporting data warehouse environment and developing in SAP Data Services Designer.",
                "Successfully reduced ETL lag time from a minimum of 24 hours down to an average of 11 hours through optimization of nightly job routines.",
                "Assisted with the introduction of SSRS to the reporting environment to provide more specific access to the data users require.",
                "Contributed to the design of an internal corporate reporting SharePoint site.",
                "Utilized SQL Server 2014, Tableau 8.0, SSRS, Visual Studio 2015, SAP Data Services Designer, and SQL to achieve these goals."
              ]
            }
          ]
        },
        {
          color: 'green',
          year: '2015 - 2016',
          company: 'Sunbelt',
          role: [
            {
              title: 'Technology Analyst',
              bodyArray: [
                "Joined Sunbelt Rentals after interning during the summer and began working with the Business Intelligence team.",
                "I facilitated the requirements gathering process for new reports by collaborating with internal stakeholders from various departments throughout the organization. Through these meetings, I identified and documented the specific data needs that would best meet their business requirements.",
                "I utilized SSRS and SQL to develop the new reports. Throughout the process, I worked closely with stakeholders to ensure that the resulting reports provided valuable insights and information, enabling teams to make informed business decisions.",
                "I helped the team transition to a ViewPoint environment by recreating many existing SSRS reports in ViewPoint, using my report development skills to replicate the original reports' functionality and visualizations ensuring a seamless transition for stakeholders."
              ]
            },
            {
              title: 'Tech Intern - Territory Analytics',
              bodyArray: [
                "I utilized C# and SQL Server to enhance an internal application used daily by the territory analytics team. This resulted in improved efficiency, faster performance, and a more streamlined address validation process. Additionally, I produced detailed documentation and architecture diagrams for the existing codebase.",
                "Assisted with updating and automating ArcGIS scripts using Python batches, resulting in improved nightly job routines and monthly job automation.",
                "Created new SSRS reports and ad hoc queries using and stored procedures."
              ]
            }
          ]
        },
      ],
    }),
  }
</script>