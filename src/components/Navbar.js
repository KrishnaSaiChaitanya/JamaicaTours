"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/Icon.jpg";
import navstyles from "@/styles/navbarstyles.module.css";

export default function Navbar() {
  const [open, setOpen] = useState("false");
  function handleClick() {
    console.log("clicked!");
    if (open === "false") {
      setOpen("true");
    } else {
      setOpen("false");
    }
  }
  return (
    <div class="header__logo">
      <a href="index.html" class="header__logo">
        <img src="img/general/logo-1.svg" alt="logo icon" />
      </a>

      <div class="xl:d-none ml-30">
        <div class="header__search js-liverSearch js-form-dd">
          <i class="icon-search text-18"></i>
          <input
            type="text"
            placeholder="Search destinations or activities"
            class="js-search"
            data-x-click="headerSearch"
          />

          <div
            class="headerSearchRecent"
            data-x="headerSearch"
            data-x-toggle="is-active"
          >
            <div class="headerSearchRecent__container">
              <div class="headerSearchRecent__title">
                <h4 class="text-18 fw-500">Recent Searches</h4>
              </div>

              <div class="headerSearchRecent__list js-results">
                <button
                  class="headerSearchRecent__item js-search-option"
                  data-x-click="headerSearch"
                >
                  <div class="size-50 bg-white rounded-12 border-1 flex-center">
                    <i class="icon-pin text-20"></i>
                  </div>
                  <div class="ml-10">
                    <div class="fw-500 js-search-option-target">Phuket</div>
                    <div class="lh-14 text-14 text-light-2">Thailand, Asia</div>
                  </div>
                </button>

                <button
                  class="headerSearchRecent__item js-search-option"
                  data-x-click="headerSearch"
                >
                  <div class="size-50 bg-white rounded-12 border-1 flex-center">
                    <i class="icon-price-tag text-20"></i>
                  </div>
                  <div class="ml-10">
                    <div class="fw-500 js-search-option-target">
                      London Day Trips
                    </div>
                    <div class="lh-14 text-14 text-light-2">England</div>
                  </div>
                </button>

                <button
                  class="headerSearchRecent__item js-search-option"
                  data-x-click="headerSearch"
                >
                  <div class="size-50 bg-white rounded-12 border-1 flex-center">
                    <i class="icon-flag text-20"></i>
                  </div>
                  <div class="ml-10">
                    <div class="fw-500 js-search-option-target">Europe</div>
                    <div class="lh-14 text-14 text-light-2">Country</div>
                  </div>
                </button>

                <button
                  class="headerSearchRecent__item js-search-option"
                  data-x-click="headerSearch"
                >
                  <div class="size-50 bg-white rounded-12 border-1 flex-center">
                    <img
                      src="img/misc/icon.png"
                      alt="image"
                      class="rounded-12"
                    />
                  </div>
                  <div class="ml-10">
                    <div class="text-overflow fw-500 js-search-option-target">
                      Centipede Tour - Guided Arizona Desert Tour by ATV
                    </div>
                    <div class="lh-14 text-14 text-light-2">Country</div>
                  </div>
                </button>

                <button
                  class="headerSearchRecent__item js-search-option"
                  data-x-click="headerSearch"
                >
                  <div class="size-50 bg-white rounded-12 border-1 flex-center">
                    <i class="icon-pin text-20"></i>
                  </div>
                  <div class="ml-10">
                    <div class="fw-500 js-search-option-target">Istanbul</div>
                    <div class="lh-14 text-14 text-light-2">Turkey</div>
                  </div>
                </button>

                <button
                  class="headerSearchRecent__item js-search-option"
                  data-x-click="headerSearch"
                >
                  <div class="size-50 bg-white rounded-12 border-1 flex-center">
                    <i class="icon-pin text-20"></i>
                  </div>
                  <div class="ml-10">
                    <div class="fw-500 js-search-option-target">Berlin</div>
                    <div class="lh-14 text-14 text-light-2">
                      Germany, Europe
                    </div>
                  </div>
                </button>

                <button
                  class="headerSearchRecent__item js-search-option"
                  data-x-click="headerSearch"
                >
                  <div class="size-50 bg-white rounded-12 border-1 flex-center">
                    <i class="icon-pin text-20"></i>
                  </div>
                  <div class="ml-10">
                    <div class="fw-500 js-search-option-target">London</div>
                    <div class="lh-14 text-14 text-light-2">
                      England, Europe
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
