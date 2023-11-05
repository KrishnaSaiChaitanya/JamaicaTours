import React, { useEffect, useState } from "react";

const Terms = () => {
  useEffect(() => {
    const targets = document.querySelectorAll(".js-tabs");
    if (!targets) return;

    targets.forEach((el) => {
      singleTab(el);
    });
  }, []);

  function singleTab(target) {
    const controls = target.querySelector(".js-tabs-controls");
    const controlsItems = target.querySelectorAll(
      ".js-tabs-controls .js-tabs-button"
    );
    const content = target.querySelector(".js-tabs-content");

    for (let l = 0; l < controlsItems.length; l++) {
      const el = controlsItems[l];

      el.addEventListener("click", (e) => {
        const selector = el.getAttribute("data-tab-target");

        controls
          .querySelector(".is-tab-el-active")
          .classList.remove("is-tab-el-active");
        content
          .querySelector(".is-tab-el-active")
          .classList.remove("is-tab-el-active");

        el.classList.add("is-tab-el-active");
        content.querySelector(selector).classList.add("is-tab-el-active");
      });
    }
  }

  return (
    <div className="mt-header2">
      <div class="container mt-header pt-30">
        <h1 class="text-30">Terms and Conditions</h1>
      </div>
      <div class="container mb-30 pb-30">
        <div class="tabs -terms js-tabs">
          <div class="row y-gap-30">
            <div class="col-lg-3">
              <div class="tabs__controls row y-gap-10 js-tabs-controls">
                <div class="col-12">
                  <button
                    class="tabs__button relative pl-20 js-tabs-button is-tab-el-active"
                    data-tab-target=".-tab-item-1"
                  >
                    Account &amp; Payments
                  </button>
                </div>

                <div class="col-12">
                  <button
                    class="tabs__button relative pl-20 js-tabs-button "
                    data-tab-target=".-tab-item-2"
                  >
                    Manage Orders
                  </button>
                </div>

                <div class="col-12">
                  <button
                    class="tabs__button relative pl-20 js-tabs-button "
                    data-tab-target=".-tab-item-3"
                  >
                    Returns &amp; Refunds
                  </button>
                </div>

                <div class="col-12">
                  <button
                    class="tabs__button relative pl-20 js-tabs-button "
                    data-tab-target=".-tab-item-4"
                  >
                    COVID-19
                  </button>
                </div>

                <div class="col-12">
                  <button
                    class="tabs__button relative pl-20 js-tabs-button "
                    data-tab-target=".-tab-item-5"
                  >
                    Other
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-9">
              <div class="tabs__content js-tabs-content">
                <div class="tabs__pane -tab-item-1 is-tab-el-active">
                  <h2 class="text-20 fw-500">1. Introduction</h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>

                  <h2 class="text-20 fw-500 mt-60 md:mt-30">
                    2. Your Use of the Zenmart Sites
                  </h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>

                  <h2 class="text-20 fw-500 mt-60 md:mt-30">
                    3. Content and Ideas
                  </h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>
                </div>

                <div class="tabs__pane -tab-item-2 ">
                  <h2 class="text-20 fw-500">1. Introduction two</h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>

                  <h2 class="text-20 fw-500 mt-60 md:mt-30">
                    2. Your Use of the Zenmart Sites
                  </h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>

                  <h2 class="text-20 fw-500 mt-60 md:mt-30">
                    3. Content and Ideas
                  </h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>
                </div>

                <div class="tabs__pane -tab-item-3 ">
                  <h2 class="text-20 fw-500">1. Introduction</h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>

                  <h2 class="text-20 fw-500 mt-60 md:mt-30">
                    2. Your Use of the Zenmart Sites
                  </h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>

                  <h2 class="text-20 fw-500 mt-60 md:mt-30">
                    3. Content and Ideas
                  </h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>
                </div>

                <div class="tabs__pane -tab-item-4 ">
                  <h2 class="text-20 fw-500">1. Introduction</h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>

                  <h2 class="text-20 fw-500 mt-60 md:mt-30">
                    2. Your Use of the Zenmart Sites
                  </h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>

                  <h2 class="text-20 fw-500 mt-60 md:mt-30">
                    3. Content and Ideas
                  </h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>
                </div>

                <div class="tabs__pane -tab-item-5 ">
                  <h2 class="text-20 fw-500">1. Introduction</h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>

                  <h2 class="text-20 fw-500 mt-60 md:mt-30">
                    2. Your Use of the Zenmart Sites
                  </h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>

                  <h2 class="text-20 fw-500 mt-60 md:mt-30">
                    3. Content and Ideas
                  </h2>
                  <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nascetur morbi nisl, mi, in semper metus porttitor
                    non. Augue nunc amet fringilla sit. Fringilla eget arcu
                    sodales sed a, parturient fermentum amet scelerisque. Amet
                    purus urna, dictumst aliquet aliquam natoque non, morbi
                    pretium. Integer amet fermentum nibh viverra mollis
                    consectetur arcu, ultrices dolor. Gravida purus arcu viverra
                    eget. Aliquet tincidunt dignissim aliquam tempor nec id.
                    Habitant suscipit sit semper duis odio amet, at.
                    <br />
                    <br />
                    Massa ultricies a arcu velit eget gravida purus ultrices
                    eget. Orci, fames eu facilisi justo. Lacus netus a at sed
                    justo vel leo leo pellentesque. Nulla ut laoreet luctus cum
                    turpis et amet ac viverra. Vitae neque orci dui eu ac
                    tincidunt. Egestas placerat egestas netus nec velit gravida
                    consectetur laoreet vitae. Velit sed enim habitant habitant
                    non diam. Semper tellus turpis tempus ac leo tempor.
                    Ultricies amet, habitasse adipiscing bibendum consequat
                    amet, sed. Id convallis suspendisse vitae, lacinia mattis
                    cursus montes, dui. Tortor lobortis dignissim eget egestas.
                    Eget enim auctor nunc eget mattis sollicitudin senectus
                    diam. Tincidunt morbi egestas dignissim eget id aliquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
