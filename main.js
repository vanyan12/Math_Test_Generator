window.onload = setTimeout(generate, 0)
  
  function generate(){



let Pictures = {section1: ['Pictures/Section1/Section1-1.png', 'Pictures/Section1/Section1-2.png', 'Pictures/Section1/Section1-3.png', 
                           'Pictures/Section1/Section1-4.png', 'Pictures/Section1/Section1-5.png', 'Pictures/Section1/Section1-6.png', 
                           'Pictures/Section1/Section1-7.png', 'Pictures/Section1/Section1-8.png', 'Pictures/Section1/Section1-9.png', 
                           'Pictures/Section1/Section1-10.png', 'Pictures/Section1/Section1-11.png', 'Pictures/Section1/Section1-12.png', 
                           'Pictures/Section1/Section1-13.png', 'Pictures/Section1/Section1-14.png', 'Pictures/Section1/Section1-15.png', 
                           'Pictures/Section1/Section1-16.png', 'Pictures/Section1/Section1-17.png', 'Pictures/Section1/Section1-18.png', 
                           'Pictures/Section1/Section1-19.png', 'Pictures/Section1/Section1-20.png', 'Pictures/Section1/Section1-21.png', 
                           'Pictures/Section1/Section1-22.png', 'Pictures/Section1/Section1-23.png', 'Pictures/Section1/Section1-24.png', 
                           'Pictures/Section1/Section1-25.png', 'Pictures/Section1/Section1-26.png', 'Pictures/Section1/Section1-27.png', 
                           'Pictures/Section1/Section1-28.png', 'Pictures/Section1/Section1-29.png', 'Pictures/Section1/Section1-30.png', 
                           'Pictures/Section1/Section1-31.png', 'Pictures/Section1/Section1-32.png', 'Pictures/Section1/Section1-33.png', 
                           'Pictures/Section1/Section1-34.png', 'Pictures/Section1/Section1-35.png', 'Pictures/Section1/Section1-36.png', 
                           'Pictures/Section1/Section1-37.png', ],
                
                section2: ['Pictures/Section2/Section2-1.png', 'Pictures/Section2/Section2-2.png', 'Pictures/Section2/Section2-3.png', 
                           'Pictures/Section2/Section2-4.png', 'Pictures/Section2/Section2-5.png', 'Pictures/Section2/Section2-6.png', 
                           'Pictures/Section2/Section2-7.png', 'Pictures/Section2/Section2-8.png', 'Pictures/Section2/Section2-9.png', 
                           'Pictures/Section2/Section2-10.png', 'Pictures/Section2/Section2-11.png', 'Pictures/Section2/Section2-12.png', 
                           'Pictures/Section2/Section2-13.png', 'Pictures/Section2/Section2-14.png', 'Pictures/Section2/Section2-15.png', 
                           'Pictures/Section2/Section2-16.png', 'Pictures/Section2/Section2-17.png', 'Pictures/Section2/Section2-18.png', 
                           'Pictures/Section2/Section2-19.png', 'Pictures/Section2/Section2-20.png', 'Pictures/Section2/Section2-21.png', 
                           'Pictures/Section2/Section2-22.png', 'Pictures/Section2/Section2-23.png', 'Pictures/Section2/Section2-24.png', 
                           'Pictures/Section2/Section2-25.png', 'Pictures/Section2/Section2-26.png', 'Pictures/Section2/Section2-27.png', 
                           'Pictures/Section2/Section2-28.png', 'Pictures/Section2/Section2-29.png', 'Pictures/Section2/Section2-30.png', 
                           'Pictures/Section2/Section2-31.png', 'Pictures/Section2/Section2-32.png', 'Pictures/Section2/Section2-33.png', 
                           'Pictures/Section2/Section2-34.png', 'Pictures/Section2/Section2-35.png', 'Pictures/Section2/Section2-36.png', 
                           'Pictures/Section2/Section2-37.png', 'Pictures/Section2/Section2-38.png', 'Pictures/Section2/Section2-39.png', 
                           'Pictures/Section2/Section2-40.png', 'Pictures/Section2/Section2-41.png', 'Pictures/Section2/Section2-42.png',
                           'Pictures/Section2/Section2-43.png', 'Pictures/Section2/Section2-44.png', 'Pictures/Section2/Section2-45.png', 
                           'Pictures/Section2/Section2-46.png', 'Pictures/Section2/Section2-47.png', 'Pictures/Section2/Section2-48.png', 
                           'Pictures/Section2/Section2-49.png', 'Pictures/Section2/Section2-50.png', 'Pictures/Section2/Section2-51.png', 
                           'Pictures/Section2/Section2-52.png', 'Pictures/Section2/Section2-53.png', 'Pictures/Section2/Section2-54.png', 
                           'Pictures/Section2/Section2-55.png', 'Pictures/Section2/Section2-56.png', 'Pictures/Section2/Section2-57.png', 
                           'Pictures/Section2/Section2-58.png', 'Pictures/Section2/Section2-59.png', 'Pictures/Section2/Section2-60.png', 
                           'Pictures/Section2/Section2-61.png', 'Pictures/Section2/Section2-62.png', 'Pictures/Section2/Section2-63.png', 
                           'Pictures/Section2/Section2-64.png', 'Pictures/Section2/Section2-65.png', 'Pictures/Section2/Section2-66.png', 
                           'Pictures/Section2/Section2-67.png', 'Pictures/Section2/Section2-68.png', 'Pictures/Section2/Section2-69.png', 
                           'Pictures/Section2/Section2-70.png', 'Pictures/Section2/Section2-71.png', 'Pictures/Section2/Section2-72.png',
                           'Pictures/Section2/Section2-73.png', 'Pictures/Section2/Section2-74.png',],

                section3: ['Pictures/Section3/Section3-1.png', 'Pictures/Section3/Section3-2.png', 'Pictures/Section3/Section3-3.png', 
                           'Pictures/Section3/Section3-4.png', 'Pictures/Section3/Section3-5.png', 'Pictures/Section3/Section3-6.png', 
                           'Pictures/Section3/Section3-7.png', 'Pictures/Section3/Section3-8.png', 'Pictures/Section3/Section3-9.png', 
                           'Pictures/Section3/Section3-10.png', 'Pictures/Section3/Section3-11.png', 'Pictures/Section3/Section3-12.png', 
                           'Pictures/Section3/Section3-13.png', 'Pictures/Section3/Section3-14.png', 'Pictures/Section3/Section3-15.png', 
                           'Pictures/Section3/Section3-16.png', 'Pictures/Section3/Section3-17.png', 'Pictures/Section3/Section3-18.png', 
                           'Pictures/Section3/Section3-19.png', 'Pictures/Section3/Section3-20.png', 'Pictures/Section3/Section3-21.png', 
                           'Pictures/Section3/Section3-22.png', 'Pictures/Section3/Section3-23.png', 'Pictures/Section3/Section3-24.png', 
                           'Pictures/Section3/Section3-25.png', 'Pictures/Section3/Section3-26.png', 'Pictures/Section3/Section3-27.png', 
                           'Pictures/Section3/Section3-28.png', 'Pictures/Section3/Section3-29.png', 'Pictures/Section3/Section3-30.png', 
                           'Pictures/Section3/Section3-31.png', 'Pictures/Section3/Section3-32.png', 'Pictures/Section3/Section3-33.png',
                           'Pictures/Section3/Section3-34.png', 'Pictures/Section3/Section3-35.png', 'Pictures/Section3/Section3-36.png', 
                           'Pictures/Section3/Section3-37.png', 'Pictures/Section3/Section3-38.png', 'Pictures/Section3/Section3-39.png', 
                           'Pictures/Section3/Section3-40.png', 'Pictures/Section3/Section3-41.png', 'Pictures/Section3/Section3-42.png', 
                           'Pictures/Section3/Section3-43.png', 'Pictures/Section3/Section3-44.png', 'Pictures/Section3/Section3-45.png', 
                           'Pictures/Section3/Section3-46.png', 'Pictures/Section3/Section3-47.png', 'Pictures/Section3/Section3-48.png', 
                           'Pictures/Section3/Section3-49.png', 'Pictures/Section3/Section3-50.png', 'Pictures/Section3/Section3-51.png', 
                           'Pictures/Section3/Section3-52.png', 'Pictures/Section3/Section3-53.png', 'Pictures/Section3/Section3-54.png', 
                           'Pictures/Section3/Section3-55.png', 'Pictures/Section3/Section3-56.png', 'Pictures/Section3/Section3-57.png', 
                           'Pictures/Section3/Section3-58.png', 'Pictures/Section3/Section3-59.png', 'Pictures/Section3/Section3-60.png', 
                           'Pictures/Section3/Section3-61.png', 'Pictures/Section3/Section3-62.png', 'Pictures/Section3/Section3-63.png'],

                section4: ['Pictures/Section4/Section4-1.png', 'Pictures/Section4/Section4-2.png', 'Pictures/Section4/Section4-3.png', 
                           'Pictures/Section4/Section4-4.png', 'Pictures/Section4/Section4-5.png', 'Pictures/Section4/Section4-6.png', 
                           'Pictures/Section4/Section4-7.png', 'Pictures/Section4/Section4-8.png', 'Pictures/Section4/Section4-9.png', 
                           'Pictures/Section4/Section4-10.png', 'Pictures/Section4/Section4-11.png', 'Pictures/Section4/Section4-12.png', 
                           'Pictures/Section4/Section4-13.png', 'Pictures/Section4/Section4-14.png', 'Pictures/Section4/Section4-15.png', 
                           'Pictures/Section4/Section4-16.png', 'Pictures/Section4/Section4-17.png', 'Pictures/Section4/Section4-18.png', 
                           'Pictures/Section4/Section4-19.png', 'Pictures/Section4/Section4-20.png', 'Pictures/Section4/Section4-2.png', 
                           'Pictures/Section4/Section4-22.png', 'Pictures/Section4/Section4-23.png', 'Pictures/Section4/Section4-24.png', 
                           'Pictures/Section4/Section4-25.png', 'Pictures/Section4/Section4-26.png'],

                section5: ['Pictures/Section5/Section5-1.png', 'Pictures/Section5/Section5-2.png', 'Pictures/Section5/Section5-3.png', 
                           'Pictures/Section5/Section5-4.png', 'Pictures/Section5/Section5-5.png', 'Pictures/Section5/Section5-6.png', 
                           'Pictures/Section5/Section5-7.png', 'Pictures/Section5/Section5-8.png', 'Pictures/Section5/Section5-9.png', 
                           'Pictures/Section5/Section5-10.png', 'Pictures/Section5/Section5-11.png', 'Pictures/Section5/Section5-12.png', 
                           'Pictures/Section5/Section5-13.png', 'Pictures/Section5/Section5-14.png', 'Pictures/Section5/Section5-15.png', 
                           'Pictures/Section5/Section5-16.png', 'Pictures/Section5/Section5-17.png', 'Pictures/Section5/Section5-18.png', 
                           'Pictures/Section5/Section5-19.png', 'Pictures/Section5/Section5-20.png', 'Pictures/Section5/Section5-2.png', 
                           'Pictures/Section5/Section5-22.png', 'Pictures/Section5/Section5-23.png', 'Pictures/Section5/Section5-24.png'],

                section6: ['Pictures/Section6/Section6-1.png', 'Pictures/Section6/Section6-2.png', 'Pictures/Section6/Section6-3.png', 
                           'Pictures/Section6/Section6-4.png', 'Pictures/Section6/Section6-5.png', 'Pictures/Section6/Section6-6.png', 
                           'Pictures/Section6/Section6-7.png', 'Pictures/Section6/Section6-8.png', 'Pictures/Section6/Section6-9.png', 
                           'Pictures/Section6/Section6-10.png', 'Pictures/Section6/Section6-11.png', 'Pictures/Section6/Section6-12.png', 
                           'Pictures/Section6/Section6-13.png', 'Pictures/Section6/Section6-14.png', 'Pictures/Section6/Section6-15.png', 
                           'Pictures/Section6/Section6-16.png', 'Pictures/Section6/Section6-17.png', 'Pictures/Section6/Section6-18.png', 
                           'Pictures/Section6/Section6-19.png', 'Pictures/Section6/Section6-20.png', 'Pictures/Section6/Section6-2.png', 
                           'Pictures/Section6/Section6-22.png', 'Pictures/Section6/Section6-23.png' ],

                section7: ['Pictures/Section7/Section7-1.png', 'Pictures/Section7/Section7-2.png', 'Pictures/Section7/Section7-3.png', 
                           'Pictures/Section7/Section7-4.png', 'Pictures/Section7/Section7-5.png', 'Pictures/Section7/Section7-6.png', 
                           'Pictures/Section7/Section7-7.png', 'Pictures/Section7/Section7-8.png', 'Pictures/Section7/Section7-9.png', 
                           'Pictures/Section7/Section7-10.png', 'Pictures/Section7/Section7-11.png', 'Pictures/Section7/Section7-12.png', 
                           'Pictures/Section7/Section7-13.png', 'Pictures/Section7/Section7-14.png', 'Pictures/Section7/Section7-15.png', 
                           'Pictures/Section7/Section7-16.png', 'Pictures/Section7/Section7-17.png', 'Pictures/Section7/Section7-18.png', 
                           'Pictures/Section7/Section7-19.png', 'Pictures/Section7/Section7-20.png'],

                section8: ['Pictures/Section8/Section8-1.png', 'Pictures/Section8/Section8-2.png', 'Pictures/Section8/Section8-3.png', 
                           'Pictures/Section8/Section8-4.png', 'Pictures/Section8/Section8-5.png', 'Pictures/Section8/Section8-6.png', 
                           'Pictures/Section8/Section8-7.png', 'Pictures/Section8/Section8-8.png', 'Pictures/Section8/Section8-9.png', 
                           'Pictures/Section8/Section8-10.png', 'Pictures/Section8/Section8-11.png', 'Pictures/Section8/Section8-12.png', 
                           'Pictures/Section8/Section8-13.png', 'Pictures/Section8/Section8-14.png', 'Pictures/Section8/Section8-15.png', 
                           'Pictures/Section8/Section8-16.png', 'Pictures/Section8/Section8-17.png', 'Pictures/Section8/Section8-18.png', 
                           'Pictures/Section8/Section8-19.png', 'Pictures/Section8/Section8-20.png', 'Pictures/Section8/Section8-21.png', 
                           'Pictures/Section8/Section8-22.png', 'Pictures/Section8/Section8-23.png', 'Pictures/Section8/Section8-24.png', 
                           'Pictures/Section8/Section8-25.png', 'Pictures/Section8/Section8-26.png', 'Pictures/Section8/Section8-27.png', 
                           'Pictures/Section8/Section8-28.png', 'Pictures/Section8/Section8-29.png', 'Pictures/Section8/Section8-30.png', 
                           'Pictures/Section8/Section8-31.png', 'Pictures/Section8/Section8-32.png', 'Pictures/Section8/Section8-33.png',
                           'Pictures/Section8/Section8-34.png'], 
                           
                section9: ['Pictures/Section9/Section9-1.png', 'Pictures/Section9/Section9-2.png', 'Pictures/Section9/Section9-3.png', 
                           'Pictures/Section9/Section9-4.png', 'Pictures/Section9/Section9-5.png', 'Pictures/Section9/Section9-6.png', 
                           'Pictures/Section9/Section9-7.png', 'Pictures/Section9/Section9-8.png', 'Pictures/Section9/Section9-9.png', 
                           'Pictures/Section9/Section9-10.png', 'Pictures/Section9/Section9-11.png', 'Pictures/Section9/Section9-12.png', 
                           'Pictures/Section9/Section9-13.png', 'Pictures/Section9/Section9-14.png', 'Pictures/Section9/Section9-15.png', 
                           'Pictures/Section9/Section9-16.png', 'Pictures/Section9/Section9-17.png', 'Pictures/Section9/Section9-18.png', 
                           'Pictures/Section9/Section9-19.png', 'Pictures/Section9/Section9-20.png', 'Pictures/Section9/Section9-2.png', 
                           'Pictures/Section9/Section9-22.png', 'Pictures/Section9/Section9-23.png'],

                section10: ['Pictures/Section10/Section10-1.png', 'Pictures/Section10/Section10-2.png', 'Pictures/Section10/Section10-3.png', 
                            'Pictures/Section10/Section10-4.png', 'Pictures/Section10/Section10-5.png', 'Pictures/Section10/Section10-6.png', 
                            'Pictures/Section10/Section10-7.png', 'Pictures/Section10/Section10-8.png', 'Pictures/Section10/Section10-9.png', 
                            'Pictures/Section10/Section10-10.png', 'Pictures/Section10/Section10-11.png', 'Pictures/Section10/Section10-12.png', 
                            'Pictures/Section10/Section10-13.png', 'Pictures/Section10/Section10-14.png', 'Pictures/Section10/Section10-15.png', 
                            'Pictures/Section10/Section10-16.png', 'Pictures/Section10/Section10-17.png', 'Pictures/Section10/Section10-18.png', 
                            'Pictures/Section10/Section10-19.png', 'Pictures/Section10/Section10-20.png', 'Pictures/Section10/Section10-2.png', 
                            'Pictures/Section10/Section10-22.png', 'Pictures/Section10/Section10-23.png', 'Pictures/Section10/Section10-24.png', 
                            'Pictures/Section10/Section10-25.png', 'Pictures/Section10/Section10-26.png'],

                section2_1: ['Pictures/2Section1/2Section1-1.png', 'Pictures/2Section1/2Section1-2.png', 'Pictures/2Section1/2Section1-3.png',
                             'Pictures/2Section1/2Section1-4.png', 'Pictures/2Section1/2Section1-5.png', 'Pictures/2Section1/2Section1-6.png',
                             'Pictures/2Section1/2Section1-7.png', 'Pictures/2Section1/2Section1-8.png', 'Pictures/2Section1/2Section1-9.png',
                             'Pictures/2Section1/2Section1-10.png', 'Pictures/2Section1/2Section1-11.png', 'Pictures/2Section1/2Section1-12.png',
                             'Pictures/2Section1/2Section1-13.png', 'Pictures/2Section1/2Section1-14.png', 'Pictures/2Section1/2Section1-15.png',
                             'Pictures/2Section1/2Section1-16.png', 'Pictures/2Section1/2Section1-17.png', 'Pictures/2Section1/2Section1-18.png',
                             'Pictures/2Section1/2Section1-19.png', 'Pictures/2Section1/2Section1-20.png', 'Pictures/2Section1/2Section1-21.png' ],

                section2_2: ['Pictures/2Section2/2Section2-1.png', 'Pictures/2Section2/2Section2-2.png', 'Pictures/2Section2/2Section2-3.png',
                             'Pictures/2Section2/2Section2-4.png', 'Pictures/2Section2/2Section2-5.png', 'Pictures/2Section2/2Section2-6.png',
                             'Pictures/2Section2/2Section2-7.png', 'Pictures/2Section2/2Section2-8.png', 'Pictures/2Section2/2Section2-9.png',
                             'Pictures/2Section2/2Section2-10.png', 'Pictures/2Section2/2Section2-11.png', 'Pictures/2Section2/2Section2-12.png',
                             'Pictures/2Section2/2Section2-13.png', 'Pictures/2Section2/2Section2-14.png', 'Pictures/2Section2/2Section2-15.png',
                             'Pictures/2Section2/2Section2-16.png', 'Pictures/2Section2/2Section2-17.png', 'Pictures/2Section2/2Section2-18.png',
                             'Pictures/2Section2/2Section2-19.png' ],

                section2_3: ['Pictures/2Section3/2Section3-1.png', 'Pictures/2Section3/2Section3-2.png', 'Pictures/2Section3/2Section3-3.png',
                             'Pictures/2Section3/2Section3-4.png', 'Pictures/2Section3/2Section3-5.png', 'Pictures/2Section3/2Section3-6.png',
                             'Pictures/2Section3/2Section3-7.png', 'Pictures/2Section3/2Section3-8.png', 'Pictures/2Section3/2Section3-9.png',
                             'Pictures/2Section3/2Section3-10.png', 'Pictures/2Section3/2Section3-11.png', 'Pictures/2Section3/2Section3-12.png',
                             'Pictures/2Section3/2Section3-13.png', 'Pictures/2Section3/2Section3-14.png', 'Pictures/2Section3/2Section3-15.png',
                             'Pictures/2Section3/2Section3-16.png', 'Pictures/2Section3/2Section3-17.png', 'Pictures/2Section3/2Section3-18.png',
                             'Pictures/2Section3/2Section3-19.png'],

                section2_4: ['Pictures/2Section4/2Section4-1.png', 'Pictures/2Section4/2Section4-2.png', 'Pictures/2Section4/2Section4-3.png',
                             'Pictures/2Section4/2Section4-4.png', 'Pictures/2Section4/2Section4-5.png', 'Pictures/2Section4/2Section4-6.png',
                             'Pictures/2Section4/2Section4-7.png', 'Pictures/2Section4/2Section4-8.png', 'Pictures/2Section4/2Section4-9.png',
                             'Pictures/2Section4/2Section4-10.png', 'Pictures/2Section4/2Section4-11.png', 'Pictures/2Section4/2Section4-12.png',
                             'Pictures/2Section4/2Section4-13.png', 'Pictures/2Section4/2Section4-14.png', 'Pictures/2Section4/2Section4-15.png',
                             'Pictures/2Section4/2Section4-16.png', 'Pictures/2Section4/2Section4-17.png', 'Pictures/2Section4/2Section4-18.png',
                             'Pictures/2Section4/2Section4-19.png', 'Pictures/2Section4/2Section4-20.png', 'Pictures/2Section4/2Section4-21.png'],

                section2_5: ['Pictures/2Section5/2Section5-1.png', 'Pictures/2Section5/2Section5-2.png', 'Pictures/2Section5/2Section5-3.png',
                             'Pictures/2Section5/2Section5-4.png', 'Pictures/2Section5/2Section5-5.png', 'Pictures/2Section5/2Section5-6.png',
                             'Pictures/2Section5/2Section5-7.png', 'Pictures/2Section5/2Section5-8.png', 'Pictures/2Section5/2Section5-9.png',
                             'Pictures/2Section5/2Section5-10.png', 'Pictures/2Section5/2Section5-11.png', 'Pictures/2Section5/2Section5-12.png',
                             'Pictures/2Section5/2Section5-13.png', 'Pictures/2Section5/2Section5-14.png', 'Pictures/2Section5/2Section5-15.png',
                             'Pictures/2Section5/2Section5-16.png', 'Pictures/2Section5/2Section5-17.png', 'Pictures/2Section5/2Section5-18.png',
                             'Pictures/2Section5/2Section5-19.png', 'Pictures/2Section5/2Section5-20.png', 'Pictures/2Section5/2Section5-21.png',
                             'Pictures/2Section5/2Section5-22.png', 'Pictures/2Section5/2Section5-23.png', 'Pictures/2Section5/2Section5-24.png',
                             'Pictures/2Section5/2Section5-25.png', 'Pictures/2Section5/2Section5-26.png', 'Pictures/2Section5/2Section5-27.png',
                             'Pictures/2Section5/2Section5-28.png', 'Pictures/2Section5/2Section5-29.png', 'Pictures/2Section5/2Section5-30.png',
                             'Pictures/2Section5/2Section5-31.png', 'Pictures/2Section5/2Section5-32.png', 'Pictures/2Section5/2Section5-33.png',
                             'Pictures/2Section5/2Section5-34.png', 'Pictures/2Section5/2Section5-35.png'],

                section2_6: ['Pictures/2Section6/2Section6-1.png', 'Pictures/2Section6/2Section6-2.png', 'Pictures/2Section6/2Section6-3.png',
                             'Pictures/2Section6/2Section6-4.png', 'Pictures/2Section6/2Section6-5.png', 'Pictures/2Section6/2Section6-6.png',
                             'Pictures/2Section6/2Section6-7.png', 'Pictures/2Section6/2Section6-8.png', 'Pictures/2Section6/2Section6-9.png',
                             'Pictures/2Section6/2Section6-10.png', 'Pictures/2Section6/2Section6-11.png', 'Pictures/2Section6/2Section6-12.png',
                             'Pictures/2Section6/2Section6-13.png', 'Pictures/2Section6/2Section6-14.png', 'Pictures/2Section6/2Section6-15.png',
                             'Pictures/2Section6/2Section6-16.png', 'Pictures/2Section6/2Section6-17.png', 'Pictures/2Section6/2Section6-18.png',
                             'Pictures/2Section6/2Section6-19.png', 'Pictures/2Section6/2Section6-20.png', 'Pictures/2Section6/2Section6-21.png',
                             'Pictures/2Section6/2Section6-22.png', 'Pictures/2Section6/2Section6-23.png', 'Pictures/2Section6/2Section6-24.png',
                             'Pictures/2Section6/2Section6-25.png', 'Pictures/2Section6/2Section6-26.png', 'Pictures/2Section6/2Section6-27.png',
                             'Pictures/2Section6/2Section6-28.png', 'Pictures/2Section6/2Section6-29.png', 'Pictures/2Section6/2Section6-30.png',
                             'Pictures/2Section6/2Section6-31.png', 'Pictures/2Section6/2Section6-32.png', 'Pictures/2Section6/2Section6-33.png',
                             'Pictures/2Section6/2Section6-34.png', 'Pictures/2Section6/2Section6-33.png', 'Pictures/2Section6/2Section6-36.png',
                             'Pictures/2Section6/2Section6-37.png', 'Pictures/2Section6/2Section6-38.png', 'Pictures/2Section6/2Section6-39.png',
                             'Pictures/2Section6/2Section6-40.png', 'Pictures/2Section6/2Section6-41.png', 'Pictures/2Section6/2Section6-42.png',
                             'Pictures/2Section6/2Section6-43.png'],

                section2_7: ['Pictures/2Section7/2Section7-1.png', 'Pictures/2Section7/2Section7-2.png', 'Pictures/2Section7/2Section7-3.png',
                             'Pictures/2Section7/2Section7-4.png', 'Pictures/2Section7/2Section7-5.png', 'Pictures/2Section7/2Section7-6.png',
                             'Pictures/2Section7/2Section7-7.png', 'Pictures/2Section7/2Section7-8.png', 'Pictures/2Section7/2Section7-9.png',
                             'Pictures/2Section7/2Section7-10.png', 'Pictures/2Section7/2Section7-11.png', 'Pictures/2Section7/2Section7-12.png',
                             'Pictures/2Section7/2Section7-13.png', 'Pictures/2Section7/2Section7-14.png', 'Pictures/2Sectionn7/2Section7-15.png',
                             'Pictures/2Section7/2Section7-16.png', 'Pictures/2Section7/2Section7-17.png', 'Pictures/2Section7/2Section7-18.png',
                             'Pictures/2Section7/2Section7-19.png', 'Pictures/2Section7/2Section7-20.png', 'Pictures/2Section7/2Section7-21.png',
                             'Pictures/2Section7/2Section7-22.png', 'Pictures/2Section7/2Section7-23.png', 'Pictures/2Section7/2Section7-24.png',
                             'Pictures/2Section7/2Section7-25.png', 'Pictures/2Section7/2Section7-26.png', 'Pictures/2Section7/2Section7-27.png',
                             'Pictures/2Section7/2Section7-28.png', 'Pictures/2Section7/2Section7-29.png'],
                section2_8: ['Pictures/2Section8/2Section8-1.png', 'Pictures/2Section8/2Section8-2.png', 'Pictures/2Section8/2Section8-3.png',
                             'Pictures/2Section8/2Section8-4.png', 'Pictures/2Section8/2Section8-5.png', 'Pictures/2Section8/2Section8-6.png',
                             'Pictures/2Section8/2Section8-7.png', 'Pictures/2Section8/2Section8-8.png', 'Pictures/2Section8/2Section8-9.png',
                             'Pictures/2Section8/2Section8-10.png', 'Pictures/2Section8/2Section8-11.png', 'Pictures/2Section8/2Section8-12.png',
                             'Pictures/2Section8/2Section8-13.png', 'Pictures/2Section8/2Section8-14.png', 'Pictures/2Section8/2Section8-15.png',
                             'Pictures/2Section8/2Section8-16.png', 'Pictures/2Section8/2Section8-17.png', 'Pictures/2Section8/2Section8-18.png',
                             'Pictures/2Section8/2Section8-19.png', 'Pictures/2Section8/2Section8-20.png', 'Pictures/2Section8/2Section8-21.png',
                             'Pictures/2Section8/2Section8-22.png', 'Pictures/2Section8/2Section8-23.png', 'Pictures/2Section8/2Section8-24.png',
                             'Pictures/2Section8/2Section8-25.png', 'Pictures/2Section8/2Section8-26.png', 'Pictures/2Section8/2Section8-27.png',
                             'Pictures/2Section8/2Section8-28.png', 'Pictures/2Section8/2Section8-29.png', 'Pictures/2Section8/2Section8-30.png', 
                             'Pictures/2Section8/2Section8-31.png', 'Pictures/2Section8/2Section8-32.png', 'Pictures/2Section8/2Section8-33.png', 
                             'Pictures/2Section8/2Section8-34.png', 'Pictures/2Section8/2Section8-35.png', 'Pictures/2Section8/2Section8-36.png', 
                             'Pictures/2Section8/2Section8-37.png', 'Pictures/2Section8/2Section8-38.png', 'Pictures/2Section8/2Section8-39.png', 
                             'Pictures/2Section8/2Section8-40.png', 'Pictures/2Section8/2Section8-41.png', 'Pictures/2Section8/2Section8-42.png', 
                             'Pictures/2Section8/2Section8-43.png', 'Pictures/2Sectionn8/2Section8-44.png', 'Pictures/2Section8/2Section8-45.png', 
                             'Pictures/2Section8/2Section8-46.png', 'Pictures/2Section8/2Section8-47.png', 'Pictures/2Section8/2Section8-48.png', 
                             'Pictures/2Section8/2Section8-49.png', 'Pictures/2Section8/2Section8-50.png'],

                section3_1: ['Pictures/3Section1/3Section1-1.png', 'Pictures/3Section1/3Section1-2.png', 'Pictures/3Section1/3Section1-3.png', 
                             'Pictures/3Section1/3Section1-4.png', 'Pictures/3Section1/3Section1-5.png', 'Pictures/3Section1/3Section1-6.png', 
                             'Pictures/3Section1/3Section1-7.png', 'Pictures/3Section1/3Section1-8.png', 'Pictures/3Section1/3Section1-9.png', 
                             'Pictures/3Section1/3Section1-10.png', 'Pictures/3Section1/3Section1-11.png', 'Pictures/3Section1/3Section1-12.png', 
                             'Pictures/3Section1/3Section1-13.png', 'Pictures/3Section1/3Section1-14.png', 'Pictures/3Section1/3Section1-15.png', 
                             'Pictures/3Section1/3Section1-16.png', 'Pictures/3Section1/3Section1-17.png', 'Pictures/3Section1/3Section1-18.png', 
                             'Pictures/3Section1/3Section1-19.png', 'Pictures/3Section1/3Section1-20.png', 'Pictures/3Section1/3Section1-2.png', 
                             'Pictures/3Section1/3Section1-22.png', 'Pictures/3Section1/3Section1-23.png', 'Pictures/3Section1/3Section1-24.png', 
                             'Pictures/3Section1/3Section1-25.png', 'Pictures/3Section1/3Section1-26.png', 'Pictures/3Section1/3Section1-27.png',
                             'Pictures/3Section1/3Section1-28.png', 'Pictures/3Section1/3Section1-29.png', 'Pictures/3Section1/3Section1-30.png', 
                             'Pictures/3Section1/3Section1-31.png', 'Pictures/3Section1/3Section1-32.png', 'Pictures/3Section1/3Section1-33.png', 
                             'Pictures/3Section1/3Section1-34.png', 'Pictures/3Section1/3Section1-35.png', 'Pictures/3Section1/3Section1-36.png', 
                             'Pictures/3Section1/3Section1-37.png', 'Pictures/3Section1/3Section1-38.png', 'Pictures/3Section1/3Section1-39.png', 
                             'Pictures/3Section1/3Section1-40.png', 'Pictures/3Section1/3Section1-41.png', 'Pictures/3Section1/3Section1-42.png', 
                             'Pictures/3Section1/3Section1-43.png', 'Pictures/3Section1/3Section1-44.png', 'Pictures/3Section1/3Section1-45.png', 
                             'Pictures/3Section1/3Section1-46.png'],

                section3_2: ['Pictures/3Section2/3Section2-1.png', 'Pictures/3Section2/3Section2-2.png', 'Pictures/3Section2/3Section2-3.png', 
                             'Pictures/3Section2/3Section2-4.png', 'Pictures/3Section2/3Section2-5.png', 'Pictures/3Section2/3Section2-6.png', 
                             'Pictures/3Section2/3Section2-7.png', 'Pictures/3Section2/3Section2-8.png', 'Pictures/3Section2/3Section2-9.png', 
                             'Pictures/3Section2/3Section2-10.png', 'Pictures/3Section2/3Section2-11.png', 'Pictures/3Section2/3Section2-12.png', 
                             'Pictures/3Section2/3Section2-13.png', 'Pictures/3Section2/3Section2-14.png', 'Pictures/3Section2/3Section2-15.png', 
                             'Pictures/3Section2/3Section2-16.png', 'Pictures/3Section2/3Section2-17.png', 'Pictures/3Section2/3Section2-18.png', 
                             'Pictures/3Section2/3Section2-19.png', 'Pictures/3Section2/3Section2-20.png', 'Pictures/3Section2/3Section2-21.png', 
                             'Pictures/3Section2/3Section2-22.png', 'Pictures/3Section2/3Section2-23.png', 'Pictures/3Section2/3Section2-24.png', 
                             'Pictures/3Section2/3Section2-25.png', 'Pictures/3Section2/3Section2-26.png', 'Pictures/3Section2/3Section2-27.png', 
                             'Pictures/3Section2/3Section2-28.png', 'Pictures/3Section2/3Section2-29.png', 'Pictures/3Section2/3Section2-30.png', 
                             'Pictures/3Section2/3Section2-31.png', 'Pictures/3Section2/3Section2-32.png', 'Pictures/3Section2/3Section2-33.png', 
                             'Pictures/3Section2/3Section2-34.png', 'Pictures/3Section2/3Section2-35.png', 'Pictures/3Section2/3Section2-36.png', 
                             'Pictures/3Section2/3Section2-37.png', 'Pictures/3Section2/3Section2-38.png', 'Pictures/3Section2/3Section2-39.png', 
                             'Pictures/3Section2/3Section2-40.png', 'Pictures/3Section2/3Section2-41.png', 'Pictures/3Section2/3Section2-42.png', 
                             'Pictures/3Section2/3Section2-43.png', 'Pictures/3Section2/3Section2-44.png', 'Pictures/3Section2/3Section2-45.png', 
                             'Pictures/3Section2/3Section2-46.png', 'Pictures/3Section2/3Section2-47.png', 'Pictures/3Section2/3Section2-48.png', 
                             'Pictures/3Section2/3Section2-49.png', 'Pictures/3Section2/3Section2-50.png', 'Pictures/3Section2/3Section2-51.png', 
                             'Pictures/3Section2/3Section2-52.png', 'Pictures/3Section2/3Section2-53.png', 'Pictures/3Section2/3Section2-54.png', 
                             'Pictures/3Section2/3Section2-55.png', 'Pictures/3Section2/3Section2-56.png', 'Pictures/3Section2/3Section2-57.png', 
                             'Pictures/3Section2/3Section2-58.png', 'Pictures/3Section2/3Section2-59.png', 'Pictures/3Section2/3Section2-60.png', 
                             'Pictures/3Section2/3Section2-61.png', 'Pictures/3Section2/3Section2-62.png', 'Pictures/3Section2/3Section2-63.png', 
                             'Pictures/3Section2/3Section2-64.png', 'Pictures/3Section2/3Section2-65.png', 'Pictures/3Section2/3Section2-66.png', 
                             'Pictures/3Section2/3Section2-67.png', 'Pictures/3Section2/3Section2-68.png', 'Pictures/3Section2/3Section2-69.png', 
                             'Pictures/3Section2/3Section2-70.png', 'Pictures/3Section2/3Section2-71.png', 'Pictures/3Section2/3Section2-72.png', 
                             'Pictures/3Section2/3Section2-73.png', 'Pictures/3Section2/3Section2-74.png', 'Pictures/3Section2/3Section2-75.png', 
                             'Pictures/3Section2/3Section2-76.png', 'Pictures/3Section2/3Section2-77.png'],
                             
                section3_4: ['Pictures/3Section4/3Section4-1.png', 'Pictures/3Section4/3Section4-2.png', 'Pictures/3Section4/3Section4-3.png', 
                             'Pictures/3Section4/3Section4-4.png', 'Pictures/3Section4/3Section4-5.png', 'Pictures/3Section4/3Section4-6.png', 
                             'Pictures/3Section4/3Section4-7.png', 'Pictures/3Section4/3Section4-8.png', 'Pictures/3Section4/3Section4-9.png', 
                             'Pictures/3Section4/3Section4-10.png', 'Pictures/3Section4/3Section4-11.png', 'Pictures/3Section4/3Section4-12.png', 
                             'Pictures/3Section4/3Section4-13.png', 'Pictures/3Section4/3Section4-14.png', 'Pictures/3Section4/3Section4-15.png', 
                             'Pictures/3Section4/3Section4-16.png'],
                        }

let Answers = {

    section1: [2231, 4211, 3442, 4333, 2334, 2334, 3241, 1124, 2122, 
               3221, 4131, 4343, 2234, 2333, 2331, 3121, 2322, 3244, 3424, 1221, 3143, 2414, 1343, 1213, 3431, 2233, 1124, 2243, 3242, 1322, 3212, 3323, 4334, 4313, 4312, 2342, 4233],

    section2: [4313, 2333, 1342, 4221, 2413, 3341, 2213, 1333, 2322, 4312, 1441, 
               3342, 4242, 2311, 2313, 3344, 1331, 4134, 3134, 2231, 2241, 2334, 
               4112, 2431, 1331, 1243, 1424, 3314, 3244, 2231, 3243, 3431, 4221, 
               2213, 3344, 1313, 3131, 4314, 2321, 3133, 2432, 1322, 3341, 2434, 1231, 2321, 3243, 1343, 4321, 2331, 2323, 1341, 3142, 2334, 2322, 2231, 3322, 3241, 1223, 1323, 3242, 
               2131, 3244, 4431, 1242, 4132, 2113, 4122, 3214, 3231, 3142, 3121, 2143, 1242],

    section3: [4421, 3114, 3333, 2242, 2342, 3242, 2334, 1123, 4442, 3431, 4133, 1232, 3312, 2421,
               3412, 3323, 1432, 3123, 3321, 3314, 4313, 3444, 3344, 4313, 3344, 2412, 3334, 3442,
              1224, 2231, 4234, 1233, 2323, 3124, 3434, 3414, 1423, 3232, 2323, 4324, 3133, 3424, 4342, 3412, 
             1342, 2333, 1343, 3433, 2344, 1334, 1323, 3222, 4423, 4332, 4323, 1122, 4233, 2413, 4324, 2134, 4334, 
             3442],

    section4: [1223 , 3133 , 2244 , 4233 , 2432 , 4342 , 4413 , 2313 , 1234 , 1234 , 4434 , 2414 , 4342 , 2313 , 
               4223 , 1324 , 3324 , 4323 , 4344 , 2144 , 4414 , 3434 , 4341 , 2344 , 2433 , 3324 ],
 
    section5: [3412, 2122, 3133, 2314, 4321, 1423, 1212, 1233, 2434, 1231, 3422, 2131, 2134, 3131, 
               2344, 2134, 1341, 2443, 2314, 2131, 2331, 4121, 4321, 1132, 2434, 2314, 2243, 3421, 2314, 2134, 4132, 3112, 1232, 1243, 3241, 2131, 3213, 1234, 2134, 2413, 3412, 4412, 4231, 4233, 3321],

    section6: [3243, 4413, 2413, 4322, 3143, 3124, 2434, 4232, 3344, 2324, 2214, 4134, 2312, 2323, 
               1222, 1211, 4314, 3423, 2314, 1421, 4341, 3343, 2231],

    section7: [2412, 1213, 2234, 2343, 3221, 3243, 2141, 1314, 1123, 2342, 1442, 1314, 4434, 4123,
               3343, 3234, 4122, 3243, 4312, 3422],

    section8: [2231, 1142, 4113, 1321, 4144, 2223, 3324, 4234, 1441, 3232, 4134, 3223, 3243, 4234, 1211, 2344, 3211, 2334, 3123, 4232, 3341, 
               1322, 1324, 2232, 3122, 2343, 4324, 3243, 3241, 1424, 1442, 3442, 1143, 2141, 3332, 3232, 1233, 3233, 1334, 2412, 2332, 2132, 3331, 3341, 2342, 4421, 3134, 2234, 3342, 2344, 2313, 1242, 2234, 3424, 2141, 1423, 4143, 4322, 1434, 3124, 4424, 2313, 3142, 2343, 3244, 4332, 3433, 4223],

    section9: [4442, 2431, 1431, 3212, 3424, 2234, 2412, 4313, 4132, 4442, 4433, 1422, 4333, 4314, 2131, 
              2421, 4323, 3222, 3123, 2222, 2141, 2311, 3112],

    section10: [1132, 2122, 2132, 1324, 2324, 1312, 2143, 3344, 2311, 3121, 1312, 1432, 4131, 4212, 1332, 2413, 4212, 
                2113, 4224, 1131, 3323, 2434, 2143, 3224, 4311, 2332],

    section2_1: [[2,1,7,3], [27,2,2,2], [4,4,0,2], [2,8,51,3], [4,34,1,2], [10,0,5,51], [12,4,2,0], 
                 [2,1,1,5], [7,3,1,4], [5,90,144,2], [2,0,2,3], [8,6,24,4], [16,4,4,2], [4,5,1,6], 
                [6,7,7,0], [14,7,6,2], [50,12,2,8], [40,5,5,4], [2,7,8,2], [12,1,0,14], [4,15,1,6], [1,16,6,25], 
                [1,3,5,15], [1,2,7,5], [4,5,4,2], [3,4,7,4], [1,7,1,5], [2,12,2,3], [9,24,6,6], [1,1,4,2], [2,5,3,15], [6,2,4,21], 
               [9,6,2,10], [10,2,8,2], [22,6,2,23], [24,3,1,12], [3,125,2,1], [0,8,432,6], [2,18,2,5], [4,3,2,9], [140,3,13,98], 
              [4,95,3,0], [8,1,12,4]],
                
    section2_2: [[2,3,8,4], [1,0,2,3], [25,0,0,24], [5,2,4,3], [6,7,10,7], [7,4,0,4], [1,2,1,1], [8,13,18,15],
                 [3,1,1,4], [5,1,2,2], [6,3,5,3], [1,3,3,12], [6,5,10,9], [1,0,4,8], [1,2,5,14], [7,1,3,5] ,[5,4,9,4], [0,2,3,1], [16,0,5,3]],

    section2_3: [[36,75,216,68], [45,120,4,100], [60,36,540,792], [50,2,72,36], [3,200,100,50], [80,424,168,396], 
                 [151,136,486,186], [40,72,120,174], [25,65,36,12], [600,20,540,8], [14,39,40,86], [60,20,180,225], 
                [270,10,8,12], [18,20,10,1], [5,80,4,75], [20,10,40,75], [20,10,40,75], [25,42,25,108], [40,50,3,10], [10,31,13,169]],

    section2_4: [[9,100,2,127], [75,610,4,7], [5, 10,5,3], [4,47,3,3], [4,8,4,54] ,[423, 94, 4, 9], [10,3,8,4] ,
                 [19,74,42,3], [3,27,9,5], [12,27,3,6], [15,108,12,128], [11,23,55,55], [2,6,147,5], [85,1,8,11] ,
                 [46, 230,17,9], [11,9,13,13], [48,3,6,3], [5,3,24,4], [2,8,32,3], [1,6,2,4], [2,61,732,4], [97,15,825,55] ,
                 [10,7,15,17]],

    section2_6: [[30,24,32,10], [20,10,25,125], [10,135,10,4], [10,25,24,2], [2, 45, 10, 30], [20,3,150,11], [10,5,24,24], [15,90,20,80], [135,5,1,4], [20,10,45,120], [16,8,3,3], [12, 25,8,2], [8,48,3,6], [45,162,672,75], [144,48,2,2], [32,60,8,24], [35,210,15,6],
                [6,90,5,2], [15,12,18,54], [65,40,468,9], [6,10,72,10], [124,32,4,36], [3,14,7,30], [270,28,2,5],
                 [6,96,60,608], [8,96,3,5], [5,24,9,2], [24,12,5,4], [90,108,4,3], [8,10,64,50], [2,1,30,1], [45,578,34,26], [11,60,13,7], [45,90,6,162], [108,4,1,36], 
                [9,90,9,12], [90,12,9,204], [90,1,5,2], [90,120,13,60], [90,12,15,60], [15,9,90,300], [180,6,81,45], [16,12,20,25]],

    section2_7: [[36,48,34,15], [175,375,30,50], [45,18,288,18], [280,700,25,625], [20,15,300,960], [120,45,147,231], [72,30,18,120], 
                 [384,425,150,192], [84,4,16,4], [4,90,30,12], [144,30,7,18], [1,45,12,4], [30,8,32,192], [5,45,250,5], [9,6,60,81], [0,90,4,5], [4,180,3,90], [2,1,1,60], [90,12,13,60], [8,100,120,17], [25,56,42,336], [3,4,36,106], [30,2,150,200], [8,8,30,128], [200,41,240,28], [6,30,4,9], [45,5,125,100], [3,60,180,2], [2,60,12,180]],

    section2_8: [[8,144], [28,24], [505,125], [300, 216], [15,30], [56,46], [10,20], [32,18], [12,64], [625, 24], 
                 [30,10], [28,210], [60,48], [720,64], [675,126], [28,455], [15,720], [35,720], [12,18],
                [6,24], [5,336], [70,216], [54,6], [90, 216], [6,588], [840,23], [56,14], [48,226], [120,36], [15,280], [9,66],[32,35], [35, 0],
                [570,99], [240,480], [104,720], [56,56], [8,7], [6,210], [2,252], [232,775], [24, 28], [500, 180], [512,70], [8,40], [720,480], [45,64], [12,72], [9,840], [210,700], 
               [16,400], [36,6], [232,64], [420,360], [375,48], [6,48], [216,480], [120,32], [10,65], [15,480], [35,210], [380,891], [6,8], [312,11], [28,288], [10,36], [990,26], [14,42], [504,17], [552,48], [240,11], [16,8], [120,240], [175,720], [3,126], [24,225], [119,420], [7,108], [35,45], [64,495], [0,7], [380,72], [10,10], [156,48], [404,800], [9,60]],

    section3_1: [[1,1,0,0,1,1], [1,0,1,1,1,0], [0,1,1,1,0,0], [1,1,0,0,0,1], [1,1,1,0,1,0],
                 [1,0,0,1,0,0], [0,0,0,1,0,0], [0,1,0,1,1,0], [0,1,1,0,1,0], [1,1,0,1,1,1],
                 [1,0,1,1,0,1], [1,1,0,1,0,0], [0,0,1,1,0,1], [1,1,1,0,1,1], [1,1,0,1,0,0], 
                 [1,1,0,1,0,1], [1,1,0,0,1,0], [0,0,1,1,0,1], [0,1,0,0,1,0], [0,0,0,1,1,0], 
                 [1,0,0,1,0,1], [0,1,1,1,1,0], [0,1,0,1,1,0], [1,1,0,0,0,1], [0,1,0,0,1,1], [1,0,1,0,0,1],
                 [1,0,1,1,1,1], [1,0,0,1,0,0], [1,0,0,1,1,0], [1,0,1,1,0,1], [0,1,1,1,0,1], [1,1,1,1,0,0], [1,0,0,1,0,1], [0,1,0,1,0,1], 
                 [1,1,1,0,0,0], [1,0,1,0,1,1], [1,1,1,0,1,0], [1,0,0,1,1,0], [0,1,0,0,0,1], [1,1,0,0,0,1], [1,0,1,1,0,0], [0,1,1,0,0,1], [0,1,1,1,1,0], [0,1,1,1,0,0], [0,0,1,0,0,1], 
                 [0,0,1,0,1,1]],
                
    section3_2: [[1,0,0,1,0,1], [0,0,0,1,0,1], [0,1,1,0,1,0], [0,0,0,1,1,0], [1,1,1,1,0,1], [0,0,0,1,0,0], [1,1,0,1,1,0], [0,1,1,0,0,1], [1,0,0,1,0,1], [0,0,1,1,1,0],
                 [1,1,0,0,1,0], [1,0,0,0,0,0], [0,0,0,0,1,0], [1,0,1,0,0,1], [1,0,0,1,0,1], [1,0,0,1,0,1], [0,1,1,0,0,1], [0,0,1,1,0,1], [0,1,1,0,1,0], [0,1,0,1,0,1],
                 [0,1,0,1,1,0], [1,1,1,0,1,0], [0,0,0,0,1,1], [1,1,1,1,0,0], [0,0,0,1,0,1], [1,1,0,1,1,0], [0,1,1,0,0,0], [0,0,0,1,0,1], [0,1,0,0,1,1], [1,1,1,0,1,0],
                 [1,0,0,0,1,0], [1,0,0,1,0,1], [0,1,0,0,1,1], [1,0,1,0,1,1], [1,1,0,0,1,1], [0,0,1,0,1,1], [1,0,1,0,0,1], [0,0,1,1,0,0], [1,0,1,0,0,0], [0,1,0,1,1,1],
                [1,0,0,0,1,1], [0,0,1,1,1,1], [0,0,1,1,0,1], [1,1,0,0,0,1], [0,1,1,0,0,1], [0,1,0,0,1,1], [0,0,1,0,1,1], [0,1,0,1,0,1], [0,1,0,0,1,1], [0,1,0,0,1,1], [0,1,0,1,1,1], [0,1,1,1,0,0], [0,1,0,1,1,0], [0,1,0,0,1,1], [1,0,0,0,1,1], [0,1,0,0,0,0], [0,0,0,1,1,1], [0,1,0,0,1,1], [0,0,1,0,1,0], [1,0,0,0,1,1], [0,0,1,1,0,0], [1,0,0,1,1,0], [1,0,0,1,0,1] ,[0,0,1,1,1,0], [1,1,0,1,0,1], [0,1,1,0,1,1], [1,0,1,0,1,1], [1,1,1,1,0,0], [1,0,1,1,1,0], [0,1,1,1,0,0], [0,1,1,0,1,0], [1,0,1,1,0,0], [0,1,0,0,0,1], [1,0,1,0,1,0], [0,1,0,1,0,1], [1,0,1,0,0,1], [0,0,1,0,1,0], [1,1,1,1,0,1]],

    section3_4: [[1,1,0,0,0,0], [0,0,1,0,1,1], [1,0,1,0,1,0], [1,0,1,1,0,0], [0,0,1,0,1,1], [0,0,1,0,1,0], [0,0,0,0,1,1], [1,1,1,1,0,0], [0,1,1,1,1,0], [1,0,0,1,0,1],
                 [0,1,0,1,1,0], [0,0,1,0,1,1], [0,0,0,0,1,1], [0,0,0,0,1,1], [0,1,0,1,1,1], [0,1,1,0,1,0]]
}       


                        


             let random1 = Math.round(Math.random() * Pictures.section1.length)
             let random2 = Math.round(Math.random() * Pictures.section2.length)
             let random3 = Math.round(Math.random() * Pictures.section3.length)
             let random4 = Math.round(Math.random() * Pictures.section4.length)
             let random5 = Math.round(Math.random() * Pictures.section5.length)
             let random6 = Math.round(Math.random() * Pictures.section6.length)
             let random7 = Math.round(Math.random() * Pictures.section7.length)
             let random8 = Math.round(Math.random() * Pictures.section8.length)
             let random9 = Math.round(Math.random() * Pictures.section9.length)
             let random10 = Math.round(Math.random() * Pictures.section10.length)
             let random2_1 = Math.round(Math.random() * Pictures.section2_1.length)
             let random2_2 = Math.round(Math.random() * Pictures.section2_2.length)
             let random2_3 = Math.round(Math.random() * Pictures.section2_3.length)
             let random2_4 = Math.round(Math.random() * Pictures.section2_4.length)
             let random2_5 = Math.round(Math.random() * Pictures.section2_5.length)
             let random2_6 = Math.round(Math.random() * Pictures.section2_6.length)
             let random2_7 = Math.round(Math.random() * Pictures.section2_7.length)
             let random2_8 = Math.round(Math.random() * Pictures.section2_8.length)
             let random3_1 = Math.round(Math.random() * Pictures.section3_1.length)
             let random3_2 = Math.round(Math.random() * Pictures.section3_2.length)
             let random3_4 = Math.round(Math.random() * Pictures.section3_4.length)



let Tasks = document.querySelectorAll('img').forEach(function(item){
        switch (item.id) {
            case 'section1':

                item.src = Pictures.section1[random1]
                break;

            case 'section2':

                item.src = Pictures.section2[random2]
                break;

            case 'section3':

                item.src = Pictures.section3[random3]
                break;

            case 'section4':

                item.src = Pictures.section4[random4]
                break;

            case 'section5':

                item.src = Pictures.section5[random5]
                break;

            case 'section6':

                item.src = Pictures.section6[random6]
                break;

            case 'section7':

                item.src = Pictures.section7[random7]
                break;

            case 'section8':

                item.src = Pictures.section8[random8]
                break;

            case 'section9':

                item.src = Pictures.section9[random9]
                break;

            case 'section10':

                item.src = Pictures.section10[random10]
                break;

            case '2section1':

                item.src = Pictures.section2_1[random2_1]
                break;

            case '2section2':

                item.src = Pictures.section2_2[random2_2]
                break;

            case '2section3':

                item.src = Pictures.section2_3[random2_3]
                    break;

            case '2section4':

                item.src = Pictures.section2_4[random2_4]
                break;

            case '2section5':

                item.src = Pictures.section2_5[random2_5]
                break;

            case '2section6':

                item.src = Pictures.section2_6[random2_6]
                break;

            case '2section7':

                item.src = Pictures.section2_7[random2_7]
                break;

            case '2section8':

                item.src = Pictures.section2_8[random2_8]
                break;

            case '3section1':

                item.src = Pictures.section3_1[random3_1]
                break;

            case '3section2':

                   item.src = Pictures.section3_2[random3_2]
                break;
    
            case '3section4':

                item.src = Pictures.section3_4[random3_4]
                break;
    
                
        }
})

sessionStorage.setItem('1', '115');

//================================== ===================================================
let tableAnswer = Array.from(document.querySelectorAll('td'))

let taskAnswer = Array.from( document.querySelectorAll('td.ans'))
let TrueFalse = Array.from(document.querySelectorAll('td.tf'))

    taskAnswer[0].innerHTML = Answers.section1[random1]
    taskAnswer[1].innerHTML = Answers.section7[random7]
    taskAnswer[2].innerHTML = Answers.section3[random3]
    taskAnswer[3].innerHTML = Answers.section4[random4]

    taskAnswer[4].innerHTML = Answers.section10[random10]
    taskAnswer[5].innerHTML = Answers.section9[random9]
    taskAnswer[6].innerHTML = Answers.section6[random6]
    taskAnswer[7].innerHTML = Answers.section5[random5]

    taskAnswer[8].innerHTML = Answers.section2[random2]
    taskAnswer[9].innerHTML = Answers.section8[random8]
    taskAnswer[10].innerHTML = Answers.section2_8[random2_8]
    taskAnswer[11].innerHTML = Answers.section2_1[random2_1]

    taskAnswer[12].innerHTML = Answers.section2_3[random2_3]
    taskAnswer[13].innerHTML = Answers.section2_2[random2_2]
    taskAnswer[14].innerHTML = Answers.section2_6[random2_6]
    taskAnswer[15].innerHTML = Answers.section2_4[random2_4]

    TrueFalse[0].innerHTML = Answers.section3_1[random3_1][0]
    TrueFalse[1].innerHTML = Answers.section3_1[random3_1][1]
    TrueFalse[2].innerHTML = Answers.section3_1[random3_1][2]
    TrueFalse[3].innerHTML = Answers.section3_1[random3_1][3]
    TrueFalse[4].innerHTML = Answers.section3_1[random3_1][4]
    TrueFalse[5].innerHTML = Answers.section3_1[random3_1][5]
    
    TrueFalse[6].innerHTML = Answers.section3_4[random3_4][0]
    TrueFalse[7].innerHTML = Answers.section3_4[random3_4][1]
    TrueFalse[8].innerHTML = Answers.section3_4[random3_4][2]
    TrueFalse[9].innerHTML = Answers.section3_4[random3_4][3]
    TrueFalse[10].innerHTML = Answers.section3_4[random3_4][4]
    TrueFalse[11].innerHTML = Answers.section3_4[random3_4][5]
    
    TrueFalse[12].innerHTML = Answers.section3_2[random3_2][0]
    TrueFalse[13].innerHTML = Answers.section3_2[random3_2][1]
    TrueFalse[14].innerHTML = Answers.section3_2[random3_2][2]
    TrueFalse[15].innerHTML = Answers.section3_2[random3_2][3]
    TrueFalse[16].innerHTML = Answers.section3_2[random3_2][4]
    TrueFalse[17].innerHTML = Answers.section3_2[random3_2][5]
    
    

let btn = document.querySelector('button.answ').onclick = function(){
    let table  = document.querySelector('table').classList.add('show');


TrueFalse.forEach(  cell => {
  if (cell.innerText == 1) cell.innerText = 'ճիշտ'
  else if (cell.innerText == 0) cell.innerText = 'սխալ'
})

}






}
