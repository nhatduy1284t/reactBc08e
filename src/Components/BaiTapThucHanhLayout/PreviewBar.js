import React, { Component } from "react";

export default class PreviewBar extends Component {
   render() {
      return (
         <div class="PreviewBar">
            <div _ngcontent-serverapp-c91 className="preview-bar bg-white fixed-top py-2 border-bottom-primary">
               <div _ngcontent-serverapp-c91 className="container-fluid h-100">
                  <div _ngcontent-serverapp-c91 className="row align-items-center justify-content-between h-100">
                     <div _ngcontent-serverapp-c91 className="col-auto col-lg">
                        <a
                           _ngcontent-serverapp-c91
                           className="btn btn-transparent-dark btn-sm"
                           href="/template/heroic-features"
                        >
                           <fa-icon _ngcontent-serverapp-c91 size="sm" className="ng-fa-icon me-1">
                              <svg
                                 role="img"
                                 aria-hidden="true"
                                 focusable="false"
                                 data-prefix="fal"
                                 data-icon="arrow-left"
                                 className="svg-inline--fa fa-arrow-left fa-w-14 fa-sm"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 448 512"
                              >
                                 <path
                                    fill="currentColor"
                                    d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
                                 />
                              </svg>
                           </fa-icon>
                           {/**/}
                           <span _ngcontent-serverapp-c91>Overview Page</span>
                           {/**/}
                        </a>
                        {/**/}
                     </div>
                     <div _ngcontent-serverapp-c91 className="col col-auto d-none d-xl-block">
                        <div _ngcontent-serverapp-c91 className="responsive-toggler justify-content-center">
                           <button
                              _ngcontent-serverapp-c91
                              id="desktopToggle"
                              placement="bottom"
                              ngbtooltip="Desktop Preview"
                              className="btn btn-icon btn-transparent-dark mx-1 active"
                           >
                              <fa-icon _ngcontent-serverapp-c91 className="ng-fa-icon">
                                 <svg
                                    role="img"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fal"
                                    data-icon="desktop"
                                    className="svg-inline--fa fa-desktop fa-w-18"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                 >
                                    <path
                                       fill="currentColor"
                                       d="M528 0H48C21.5 0 0 21.5 0 48v288c0 26.5 21.5 48 48 48h192l-24 96h-72c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16h-72l-24-96h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM249 480l16-64h46l16 64h-78zm295-144c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h480c8.8 0 16 7.2 16 16v288z"
                                    />
                                 </svg>
                              </fa-icon>
                           </button>
                           {/**/}
                           <button
                              _ngcontent-serverapp-c91
                              id="tabletToggle"
                              placement="bottom"
                              ngbtooltip="Tablet Preview"
                              className="btn btn-icon btn-transparent-dark mx-1"
                           >
                              <fa-icon _ngcontent-serverapp-c91 className="ng-fa-icon">
                                 <svg
                                    role="img"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fal"
                                    data-icon="tablet"
                                    className="svg-inline--fa fa-tablet fa-w-14"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                 >
                                    <path
                                       fill="currentColor"
                                       d="M256 416c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-21.3 14.3-32 32-32s32 14.3 32 32zM448 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h352c26.5 0 48 21.5 48 48zm-32 0c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V48z"
                                    />
                                 </svg>
                              </fa-icon>
                           </button>
                           {/**/}
                           <button
                              _ngcontent-serverapp-c91
                              id="mobileToggle"
                              placement="bottom"
                              ngbtooltip="Mobile Preview"
                              className="btn btn-icon btn-transparent-dark mx-1"
                           >
                              <fa-icon _ngcontent-serverapp-c91 className="ng-fa-icon">
                                 <svg
                                    role="img"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fal"
                                    data-icon="mobile"
                                    className="svg-inline--fa fa-mobile fa-w-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                 >
                                    <path
                                       fill="currentColor"
                                       d="M192 416c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM320 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48zm-32 0c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V48z"
                                    />
                                 </svg>
                              </fa-icon>
                           </button>
                           {/**/}
                        </div>
                     </div>
                     <div _ngcontent-serverapp-c91 className="col text-end">
                        {/**/}
                        <a
                           _ngcontent-serverapp-c91
                           className="btn btn-transparent-dark btn-sm me-2"
                           href="https://github.com/StartBootstrap/startbootstrap-heroic-features"
                        >
                           <fa-icon _ngcontent-serverapp-c91 className="ng-fa-icon text-github">
                              <svg
                                 role="img"
                                 aria-hidden="true"
                                 focusable="false"
                                 data-prefix="fab"
                                 data-icon="github"
                                 className="svg-inline--fa fa-github fa-w-16"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 496 512"
                              >
                                 <path
                                    fill="currentColor"
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                 />
                              </svg>
                           </fa-icon>
                        </a>
                        {/**/}
                        <a
                           _ngcontent-serverapp-c91
                           className="btn btn-primary-soft text-primary btn-sm d-none d-sm-inline-block me-2"
                           href="https://github.com/StartBootstrap/startbootstrap-heroic-features/archive/gh-pages.zip"
                        >
                           <fa-icon _ngcontent-serverapp-c91 className="ng-fa-icon me-1">
                              <svg
                                 role="img"
                                 aria-hidden="true"
                                 focusable="false"
                                 data-prefix="fad"
                                 data-icon="download"
                                 className="svg-inline--fa fa-download fa-w-16"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512"
                              >
                                 <g className="fa-group">
                                    <path
                                       className="fa-secondary"
                                       fill="currentColor"
                                       d="M320 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3a19.37 19.37 0 0 1-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24a23.94 23.94 0 0 1 24-24h80a23.94 23.94 0 0 1 24 24z"
                                    />
                                    <path
                                       className="fa-primary"
                                       fill="currentColor"
                                       d="M488 352H341.3l-49 49a51.24 51.24 0 0 1-72.6 0l-49-49H24a23.94 23.94 0 0 0-24 24v112a23.94 23.94 0 0 0 24 24h464a23.94 23.94 0 0 0 24-24V376a23.94 23.94 0 0 0-24-24zm-120 96a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm64 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16z"
                                    />
                                 </g>
                              </svg>
                           </fa-icon>
                           Free Download
                        </a>
                        {/**/}
                        <button _ngcontent-serverapp-c91 className="btn btn-transparent-dark btn-sm btn-icon">
                           <fa-icon _ngcontent-serverapp-c91 className="ng-fa-icon">
                              <svg
                                 role="img"
                                 aria-hidden="true"
                                 focusable="false"
                                 data-prefix="fal"
                                 data-icon="times"
                                 className="svg-inline--fa fa-times fa-w-10"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 320 512"
                              >
                                 <path
                                    fill="currentColor"
                                    d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                                 />
                              </svg>
                           </fa-icon>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
