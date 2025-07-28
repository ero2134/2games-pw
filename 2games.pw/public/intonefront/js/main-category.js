"use strict";
! function() {
	var e = function() {
		var e = document.querySelector(".js-category-filters"),
			t = document.querySelector(".js-index-show-more-filter"),
			a = document.querySelector(".js-index-sub-filters"),
			r = app.trans["games.filters.show_filters"],
			i = app.trans["games.filters.hide_filters"];
		if (e) {
			! function() {
				t.addEventListener("click", function() {
					a.classList.toggle("is-active"), a.classList.contains("is-active") ? t.innerText = i : t.innerText = r
				})
			}()
		}
	};
	e(), document.addEventListener("indexGameCategoryFilterToggle", e)
}(),
function() {
	var e = function() {
		var e = document.querySelector(".js-index-games"),
			t = document.querySelector(".game-list-box"),
			a = document.querySelectorAll(".nav-category-list__item"),
			r = document.querySelector(".js-popup-terms"),
			i = "";
		if (e && !r) {
			var s = {
					api: search_games,
					urlDeafult: search_games+"?locale=" + app.locale,
					urlFavoriteIcon: "/favorites/",
					imagePattern: "/intonefront/images/game-pattern.svg",
					urlCategory: "all",
					userAuth: "",
					firstLoad: !0,
					globalFirstLoad: !1,
					isMobile: app.mobile,
					favoritesFirstPageLoad: !0,
					categoryNeedsCommercialParam: !0,
					isNetentLiveGame: !1,
					currentPage: 0,
					loading: !1,
					ajaxIsEmpty: !1,
					pageURIParams: window.location.pathname,
					gamesDOMList: [],
					newGamesDOMList: [],
					newGameJSONExist: !1,
					progressTimeOut: "",
					commercialParam: "&needTiles=true",
					newGamesParam: "&needSeparateNewGames=true",
					translate: {
						isBlockedForLocal: app.trans["games.is_blocked_for_locale"],
						isBlockedForCurrency: app.trans["games.is_blocked_for_currency"],
						isBlockedInCountry: app.trans["games.is_blocked_in_country"],
						playForDemo: app.trans["games.play_demo"],
						gameShowAll: app.trans["games.show_all"],
						gamesEmpty: app.trans["games.not_found"],
						allProviders: app.trans["games.providers"],
						search: app.trans["games.search"],
						showMore: app.trans["games.filters.show_filters"],
						filterSortNew: app.trans["games.filters.sort_newest"],
						filterSortMaxBet: app.trans["games.filters.sort_maxbet"],
						filterSortMinBet: app.trans["games.filters.sort_minbet"],
						filterVolatility: app.trans["games.filters.volatility"],
						filterVolatilityAny: app.trans["games.filters.volatility_any"],
						filterVolatilityHight: app.trans["games.filters.volatility_high"],
						filterVolatilityMedium: app.trans["games.filters.volatility_medium"],
						filterVolatilityLow: app.trans["games.filters.volatility_low"],
						filterBonus: app.trans["games.filters.bonus_checkbox"],
						filterBuyBonus: app.trans["games.filters.buy_bonus_checkbox"],
						filterAchivement: app.trans["games.filters.achivement_checkbox"],
						filterTournament: app.trans["games.filters.tournament_checkbox"]
					},
					filters: {
						isCreated: !1,
						inAction: function() {
							var e = !1;
							return "" == this.searchValue && "" == this.providerValue && "" == this.sortPopular && "" == this.sortMAX && "" == this.sortMIN && "" == this.volatility && 1 != this.checkboxTournament || (e = !0), e
						},
						detectHideActiveFilters: function() {
							var e = !1;
							return "" == this.volatility && 1 != this.checkboxTournament || (e = !0), e
						},
						loadingFromURLWithProvider: !1,
						dataWasLoaded: !1,
						overPreloaderMustExist: !0,
						searchValue: "",
						providerValue: "",
						providerDetectOldUriParams: !1,
						providerURIprefix: "/categories/",
						providerWasChangedInSecond: !1,
						uriPageCreator: {
							provider: "",
							category: ""
						},
						sortPopular: "",
						sortMAX: "",
						sortMIN: "",
						checkboxTournament: "",
						volatility: "",
						filterUrl: function() {
							var e = {};
							if ("" != this.searchValue ? e.search = "&query=" + this.searchValue : delete e.search, "" != this.providerValue ? s.filters.providerDetectOldUriParams ? e.provider = "&provider=" + this.providerValue : e.provider = "&providerNameKey=" + this.providerValue : delete e.providerValue, "" != this.sortPopular ? e.sortPopular = "&orderType=" + this.sortPopular : delete e.sortPopular, "" != this.sortMAX ? e.sortMAX = "&orderType=" + this.sortMAX : delete e.sortMAX, "" != this.sortMIN ? e.sortMIN = "&orderType=" + this.sortMIN : delete e.sortMIN, "" != this.volatility ? e.volatility = "&volatility=" + this.volatility : delete e.volatility, 1 == this.checkboxTournament ? e.checkboxTournament = "&isTournamentGame=" + this.checkboxTournament : delete e.checkboxTournament, Object.entries(e).length > 0) {
								var t = Object.values(e);
								e = String(t.join(""))
							} else e = "";
							return e
						}
					},
					incrementPage: function() {
						return ++s.currentPage
					},
					url: function() {
						var e = s.urlDeafult;
						return "all" === s.urlCategory && (e = "" !== s.filters.filterUrl() ? this.urlDeafult + "&category=" + this.urlCategory + s.filters.filterUrl() : s.categoryNeedsCommercialParam ? "" + this.urlDeafult + this.commercialParam + s.newGamesParam + "&category=" + this.urlCategory : "" + this.urlDeafult + s.newGamesParam + "&category=" + this.urlCategory), "livegames" === s.urlCategory && (e = "" !== s.filters.filterUrl() ? this.urlDeafult + "&category=" + this.urlCategory + s.filters.filterUrl() : s.categoryNeedsCommercialParam ? "" + this.urlDeafult + this.commercialParam + "&category=" + this.urlCategory : this.urlDeafult + "&category=" + this.urlCategory), "all" !== s.urlCategory && "livegames" !== s.urlCategory && (e = "" !== s.filters.filterUrl() ? this.urlDeafult + "&category=" + this.urlCategory + s.filters.filterUrl() : this.urlDeafult + "&category=" + this.urlCategory), e
					}
				},
				l = function() {
					return s.currentPage = 0
				},
				n = function() {
					if ("" != s.filters.uriPageCreator.category && "" != s.filters.uriPageCreator.provider) {
						var e = new RegExp("/" + app.locale, "g"),
							t = s.filters.uriPageCreator.provider.replace(e, "");
						window.history.pushState(null, null, "" + s.filters.uriPageCreator.category + t)
					} else "" != s.filters.uriPageCreator.provider ? (s.filters.uriPageCreator.category, window.history.pushState(null, null, "" + s.filters.uriPageCreator.provider)) : "" != s.filters.uriPageCreator.category && (s.filters.uriPageCreator.provider = "", window.history.pushState(null, null, "" + s.filters.uriPageCreator.category))
				},
				o = function(e) {
					var t = document.querySelector(".left-filter-parent"),
						a = document.querySelector(".provider-box"),
						r = "";
					if (s.isMobile && (r = "is-mobile"), !a) {
						var i = '\n                    <div class="provider-box ' + r + '">\n                        <span class="index-game-select index-game-select-provider select-wrap-dark provider-select-wrap">\n                            <select name="" class="select-custome js-provider-select" data-jcf=\'{"wrapNative": false, "wrapNativeOnMobile": true, "fakeDropInBody": false, "useCustomScroll": true, "maxVisibleItems": 99, "flipDropToFit": false}\'>                              \n                                <option value="" data-name="" class="js-provider-select-default">' + s.translate.allProviders + "</option>\n                            </select>\n                        </span>\n                    </div>\n                ";
						t.insertAdjacentHTML("beforeend", i)
					}
					var l = document.querySelector(".js-provider-select");
					if ("" != e) {
						var n = function() {
							for (var e = 0; e < l.options.length; e++) {
								var t = l[e];
								s.filters.providerDetectOldUriParams ? s.filters.providerValue == t.value.toLowerCase() && (l.selectedIndex = e) : s.filters.providerValue == t.dataset.name && (l.selectedIndex = e)
							}
						};
						! function() {
							l.options.length = 1
						}();
						! function() {
							for (var t = 0; t < e.length; t++) {
								var a = e[t],
									r = a.icon;
								s.isMobile && (r = ""), l.insertAdjacentHTML("beforeend", '<option class="select-proveder-filter__item" data-name="' + a.nameKey + '" value="' + a.key + '" data-image="' + r + '">' + a.name + "</option>")
							}
							n()
						}()
					}
				},
				c = function() {
					var e = function(e) {
						var t = void 0;
						"" == e ? (s.filters.providerValue = "", t = "/" + app.locale, s.categoryNeedsCommercialParam = !0) : t = "" + s.filters.providerURIprefix + e, s.filters.uriPageCreator.provider = t, n()
					};
					document.querySelector(".js-provider-select").addEventListener("change", function(t) {
						var a = t.target.options[t.target.selectedIndex].dataset.name;
						s.filters.providerValue = a, s.filters.providerDetectOldUriParams = !1, s.loading = !1, s.filters.dataWasLoaded = !1, s.filters.providerWasChangedInSecond = !0, e(a), l(), P("filterActionFlag")
					})
				};
			! function() {
				var e = function(e, t) {
					return e.insertAdjacentHTML("beforeend", t)
				};
				! function() {
					if (!s.filters.isCreated) {
						var e = document.querySelector(".game-list-config"),
							t = '<div class="category-filters js-category-filters is-disabled">\n                        <div class="category-row gen-filter">\n                            <div class="category-row__item">\n                                <div class="left-filter-parent"></div>\n                            </div>\n                            \n                            <div style="display:none;" class="category-row__item category-row__item_sort-filter is-desktop js-filter-sort-block">\n                                <div class="sort-filter js-sort-filter">\n                                    <div  style="display:none;"class="sort-filter__item">\n                                        <button class="btn-sort js-btn-sort-popular btn-sort_first is-active">' + s.translate.filterSortNew + '</button>\n                                    </div>\n                                    <div class="sort-filter__item">\n                                        <button class="btn-sort js-btn-sort-max">' + s.translate.filterSortMaxBet + '</button>\n                                    </div>\n                                    <div style="display:none;" class="sort-filter__item">\n                                        <button class="btn-sort js-btn-sort-min btn-sort_last">' + s.translate.filterSortMinBet + '</button>\n                                    </div>\n                                </div>\n                            </div>\n                            \n                            <div style="display:none;" class="category-row__item category-row__item_show-more js-filter-show-more-block">\n                                <span class="show-more-filter js-index-show-more-filter">' + s.translate.showMore + '</span>\n                            </div>\n                        </div>\n                        <div class="category-row sub-filters js-index-sub-filters">\n                            <div  style="display:none;" class="category-row__item">\n                                <div style="display:none;" class="price-filter">\n                                    <div class="price-filter__item">' + s.translate.filterVolatility + ':</div>\n                                    <div style="display:none;" class="price-filter__item price-box">\n                                        <span style="display:none;" class="index-game-select select-wrap-dark provider-select-wrap price-select">\n                                            <select name="" style="display:none;" class="select-custome js-volatility-select" data-jcf=\'{"wrapNative": false, "wrapNativeOnMobile": true, "fakeDropInBody": false, "useCustomScroll": false}\'>\n                                                <option value="">' + s.translate.filterVolatilityAny + '</option>\n                                                <option value="low">' + s.translate.filterVolatilityLow + '</option>\n                                                <option value="medium">' + s.translate.filterVolatilityMedium + '</option>\n                                                <option style="display:none;" value="high">' + s.translate.filterVolatilityHight + '</option>\n                                            </select>\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div style="display:none;" class="category-row__item bonus-filters-items">\n                                <div style="display:none;" class="bonus-filters">\n                                    <div style="display:none;" class="bonus-filters__item filter-checkbox">\n                                        <input type="checkbox" id="filter-checkbox-1" class="checkbox-custome checkbox-filters js-checkbox-tournaments-game" />\n                                        <label style="display:none;" style="display:none;" for="filter-checkbox-1" class="bonus-filters-title">' + s.translate.filterTournament + "</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    ";
						e.insertAdjacentHTML("beforeend", t), s.filters.isCreated = !0;
						var a = new Event("indexGameCategoryFilterToggle");
						document.dispatchEvent(a)
					}
				}();
				! function() {
					var t = document.querySelector(".left-filter-parent"),
						a = '<div class="search-box">\n                    <input type="text" placeholder="' + s.translate.search + '" id="search-inpt" class="inpt-search js-search-box" />\n                    <span class="icon-search">\n                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M13.5 15.5L17.5 19.5C17.5 19.5 18.5 20.5 19.5 19.5C20.5 18.5 19.5 17.5 19.5 17.5L15.5 13.5L13.5 15.5Z" fill="#F9B242"/>\n                            <path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="#F9B242" stroke-width="2"/>\n                        </svg>\n                    </span>\n                </div>';
					e(t, a)
				}();
				! function() {
					function e(e) {
						a && clearTimeout(a), a = setTimeout(function() {
							P("filterActionFlag")
						}, 500)
					}
					var t = document.querySelector(".js-search-box"),
						a = null;
					t.addEventListener("keyup", function(t) {
						s.loading = !1, s.filters.dataWasLoaded = !1, s.filters.searchValue = t.target.value, l(), e(), 0 === t.target.value.length && (s.categoryNeedsCommercialParam = !0)
					})
				}();
				! function() {
					for (var e = document.querySelectorAll(".btn-sort"), t = function() {
							for (var t = 0; t < e.length; t++) {
								e[t].classList.remove("is-active")
							}
						}, a = 0; a < e.length; a++) ! function(a) {
						var r = e[a];
						r.addEventListener("click", function() {
							t(), r.classList.add("is-active"), r.classList.contains("js-btn-sort-popular") ? s.filters.sortPopular = "popular" : s.filters.sortPopular = "", r.classList.contains("js-btn-sort-max") ? s.filters.sortMAX = "max_bet" : s.filters.sortMAX = "", r.classList.contains("js-btn-sort-min") ? s.filters.sortMIN = "min_bet" : s.filters.sortMIN = "", s.loading = !1, s.filters.dataWasLoaded = !1, l(), P("filterActionFlag")
						})
					}(a)
				}();
				! function() {
					document.querySelector(".js-volatility-select").addEventListener("change", function(e) {
						s.filters.volatility = e.target.value, s.loading = !1, s.filters.dataWasLoaded = !1, l(), u(), P("filterActionFlag")
					})
				}();
				! function() {
					for (var e = document.querySelectorAll(".checkbox-filters"), t = 0; t < e.length; t++) ! function(t) {
						var a = e[t];
						a.addEventListener("click", function() {
							a.classList.contains("js-checkbox-tournaments-game") && (a.checked ? s.filters.checkboxTournament = !0 : s.filters.checkboxTournament = !1), s.loading = !1, s.filters.dataWasLoaded = !1, l(), u(), P("filterActionFlag")
						})
					}(t)
				}()
			}();
			var d = function() {
					document.querySelector(".js-index-show-more-filter").innerText = s.translate.showMore
				},
				m = function() {
					var e = document.querySelector(".js-filter-sort-block"),
						t = document.querySelector(".js-filter-show-more-block"),
						a = document.querySelector(".js-index-sub-filters");
					"all" == s.urlCategory || "slots" == s.urlCategory ? (e.classList.remove("is-hidden"), t.classList.remove("is-hidden")) : (e.classList.add("is-hidden"), t.classList.add("is-hidden")), a.classList.remove("is-active")
				},
				u = function() {
					var e = document.querySelector(".js-index-show-more-filter");
					!0 === s.filters.detectHideActiveFilters() ? e.classList.add("is-active-any-filters") : e.classList.remove("is-active-any-filters")
				},
				g = function() {
					! function() {
						document.querySelector(".js-search-box").value = "", s.filters.searchValue = "", s.loading = !1
					}();
					! function() {
						s.filters.providerValue = "", jcf.replace(".js-provider-select"), s.loading = !1
					}();
					! function() {
						for (var e = document.querySelectorAll(".btn-sort"), t = 0; t < e.length; t++) {
							var a = e[t];
							a.classList.remove("is-active"), a.classList.contains("js-btn-sort-popular") && a.classList.add("is-active")
						}
						s.filters.sortPopular = "", s.filters.sortMAX = "", s.filters.sortMIN = "", s.loading = !1
					}();
					! function() {
						document.querySelector(".js-volatility-select").selectedIndex = 0, s.filters.volatility = "", s.loading = !1
					}();
					! function() {
						for (var e = document.querySelectorAll(".checkbox-filters"), t = 0; t < e.length; t++) {
							var a = e[t];
							a.checked && (a.checked = !1)
						}
						s.filters.checkboxTournament = "", s.loading = !1
					}()
				},
				v = function() {
					document.querySelector(".js-category-filters").classList.add("is-disabled")
				},
				f = function() {
					document.querySelector(".js-category-filters").classList.remove("is-disabled")
				};
			! function() {
				var e = function(e) {
					for (var t = document.querySelectorAll(".nav-category-list__item"), a = 0; a < t.length; a++) t[a].classList.contains("is-active") && t[a].classList.remove("is-active");
					for (var r = 0; r < t.length; r++) {
						var i = t[r],
							s = i.querySelector(".nav-category-list__link").dataset.href,
							l = new RegExp(e, "g"),
							n = s.match(l);
						null != n && "all" != e && e === n[0] && i.classList.add("is-active"), "all" === e && t[0].classList.add("is-active")
					}
				};
				s.pageURIParams.includes("games") && s.pageURIParams.includes("slots") ? (s.urlCategory = "slots", e("slots")) : s.pageURIParams.includes("games") && s.pageURIParams.includes("jackpot") ? (s.urlCategory = "jackpot", e("jackpot")) : s.pageURIParams.includes("games") && s.pageURIParams.includes("livegames") ? (s.urlCategory = "livegames", e("livegames")) : s.pageURIParams.includes("games") && s.pageURIParams.includes("tablegames") ? (s.urlCategory = "tablegames", e("tablegames")) : s.pageURIParams.includes("games") && s.pageURIParams.includes("video-pokers") ? (s.urlCategory = "video-pokers", e("video-pokers")) : s.pageURIParams.includes("games") && s.pageURIParams.includes("lottery") ? (s.urlCategory = "lottery", e("lottery")) : s.pageURIParams.includes("games") && s.pageURIParams.includes("favorites") ? (s.urlCategory = "favorites", e("favorites")) : (s.urlCategory = "all", e("all"));
				var t = s.pageURIParams;
				if (t.indexOf("/games-") >= 0) {
					var a = t.match(/\/games-(.*)/)[0];
					s.filters.uriPageCreator.provider = "/" + app.locale + a
				}
				if (t.indexOf("/games/") >= 0) {
					var r = t.match(/\/games\/([^\/]+)/)[0];
					s.filters.uriPageCreator.category = "/" + app.locale + r
				}
				m()
			}();
			! function() {
				var e = window.location.href,
					t = e.match(/provider/),
					a = e.match(/games-/),
					r = new URL(e);
				if (t) {
					var i = r.searchParams.get("provider");
					s.filters.providerDetectOldUriParams = !0, s.filters.providerValue = i, s.filters.loadingFromURLWithProvider = !0
				}
				if (a) {
					var l = r.pathname;
					s.filters.providerDetectOldUriParams = !1, s.filters.providerValue = l.split("games-")[1], s.filters.loadingFromURLWithProvider = !0
				}
			}();
			var p = function() {
					var e = document.querySelector(".game-list"),
						t = document.querySelector(".game-list-new-box");
					e.classList.add("effect-translucent"), t && t.classList.add("effect-translucent"), s.loading = !0
				},
				y = function() {
					document.querySelector(".game-list-box").insertAdjacentHTML("afterbegin", '\n                <div class="preloader-wrapp preloader-wrapp__over-games">\n                    <div class="preloader-box"></div>\n                </div>')
				},
				h = function() {
					for (var e = document.querySelectorAll(".nav-category-list__item"), t = 0; t < e.length; t++) {
						var a = e[t];
						a.classList.contains("is-active") || a.classList.toggle("disabled")
					}
				},
				b = function() {
					for (var e = document.querySelectorAll(".nav-category-list__item"), t = 0; t < e.length; t++) e[t].classList.remove("disabled")
				};
			! function() {
				for (var e = function() {
						for (var e = 0; e < a.length; e++) a[e].classList.contains("is-active") && a[e].classList.remove("is-active")
					}, t = function(e) {
						var t = document.querySelector(".header").offsetHeight;
						window.scrollBy({
							top: e.getBoundingClientRect().top - t,
							left: 0,
							behavior: "smooth"
						})
					}, r = function(e) {
						return e.classList.add("is-active")
					}, i = function(e) {
						s.filters.uriPageCreator.provider = "", s.filters.uriPageCreator.category = e, n()
					}, o = function(e) {
						s.categoryNeedsCommercialParam = !1, e.includes("slots") ? s.urlCategory = "slots" : e.includes("jackpot") ? s.urlCategory = "jackpot" : e.includes("livegames") ? (s.urlCategory = "livegames", s.categoryNeedsCommercialParam = !0) : e.includes("tablegames") ? s.urlCategory = "tablegames" : e.includes("video-pokers") ? s.urlCategory = "video-pokers" : e.includes("lottery") ? s.urlCategory = "lottery" : e.includes("favorites") ? s.urlCategory = "favorites" : (s.urlCategory = "all", s.categoryNeedsCommercialParam = !0), s.firstLoad = !0, s.filters.providerWasChangedInSecond = !1
					}, c = 0; c < a.length; c++) ! function(s) {
					var n = a[s];
					n.addEventListener("click", function() {
						var a = n.querySelector(".nav-category-list__link"),
							s = a.dataset.href;
						t(n), e(), r(n), h(), i(s), o(s), l(), d(), g(), m(), v(), u(), p(), y(), S(), P()
					})
				}(c)
			}();
			var _ = function(e) {
					null != e && e.parentNode.removeChild(e)
				},
				L = function() {
					var e = document.querySelector(".js-favorite-icon"),
						t = document.querySelector(".game-list__item"),
						a = document.querySelector(".game-list-new"),
						r = document.querySelector(".js-provider-select");
					if (t && (clearTimeout(s.progressTimeOut), s.progressTimeOut = setTimeout(function() {
							var e = new Event("progressiveLoadListGame");
							document.dispatchEvent(e)
						}, 500)), r && jcf.replaceAll(), a) {
						var i = function() {
							for (var e = document.querySelectorAll(".game-list-new__item"), t = 0; t < e.length; t++)
								if (void 0 == e[t].dataset.prgsLoad) {
									e[t].dataset.prgsLoad = !0;
									var a = e[t].querySelector(".game-item__image");
									a.setAttribute("src", a.dataset.src)
								}
						};
						$(".js-index-game-slider").owlCarousel({
							items: 6,
							loop: !1,
							margin: 10,
							nav: !0,
							autoplay: !1,
							dots: !1,
							responsive: {
								0: {
									items: 1
								},
								320: {
									items: 1
								},
								410: {
									items: 2
								},
								540: {
									items: 3
								},
								768: {
									items: 4
								},
								1e3: {
									items: 5
								},
								1360: {
									items: 6
								}
							}
						}), $(".js-index-game-slider .owl-next").click(function() {
							return i()
						}), $(".js-index-game-slider").on("drag.owl.carousel", function() {
							return i()
						})
					}
					if (s.userAuth) e && C();
					else {
						var l = new Event("dataPopupBtn");
						document.dispatchEvent(l)
					}
					var n = new Event("gameItemBehavior");
					document.dispatchEvent(n)
				},
				w = function() {
					var e = document.querySelector(".game-list-box"),
						t = '<button style="display:none;" class="btn btn-green btn-all-game">' + s.translate.gameShowAll + "</button>";
					e.insertAdjacentHTML("beforeend", t)
				},
				x = function() {
					var e = document.querySelector(".btn-all-game");
					e.addEventListener("click", function() {
						e.classList.add("disabled", "btn-preloader"), s.incrementPage(), h(), P()
					})
				},
				S = function() {
					var e = document.querySelector(".btn-all-game");
					e && _(e)
				},
				P = function(e) {
					"filterActionFlag" === e && (1 == s.filters.loadingFromURLWithProvider ? (s.filters.loadingFromURLWithProvider = !1, v(), h(), s.filters.dataWasLoaded || (s.filters.dataWasLoaded = !0, y())) : (v(), h(), s.filters.dataWasLoaded || (s.filters.dataWasLoaded = !0, p(), y())));
					var t = new XMLHttpRequest;
					t.open("GET", s.url() + "&page=" + s.currentPage, !0), t.addEventListener("load", function() {
						if (4 === t.readyState) {
							var a = JSON.parse(t.responseText);
							if (200 !== t.status || "error" === a.status) console.log("---error", t.status + ": " + t.statusText);
							else {
								var r = document.querySelector(".game-list"),
									i = document.querySelector(".preloader-wrapp__index-games"),
									l = document.querySelector(".preloader-wrapp__bottom-page"),
									n = document.querySelector(".preloader-wrapp__over-games"),
									d = document.querySelector(".btn-all-game"),
									m = document.querySelector(".game-not-found-box");
								if (b(), f(), a.data.hasOwnProperty("providers") && !1 === s.filters.providerWasChangedInSecond) {
									var u = {},
										g = a.data.providers.filter(function(e) {
											return e.name in u ? 0 : u[e.name] = 1
										});
									if (s.filters.providerWasChangedInSecond = !0, o(g), !s.globalFirstLoad) {
										c();
										document.querySelector(".js-category-filters").classList.remove("is-disabled")
									}
								}
								if (0 == a.data.games.length ? (s.ajaxIsEmpty = !0, S()) : s.ajaxIsEmpty = !1, a.data.hasOwnProperty("newGames") ? s.newGameJSONExist = !0 : s.newGameJSONExist = !1, "filterActionFlag" !== e) s.loading ? (s.loading = !1, _(r), j(a)) : j(a);
								else {
									var v = document.querySelector(".game-list"),
										p = document.querySelector(".game-list-new-box");
									p && _(p), s.loading ? (s.loading = !1, _(v), j(a)) : j(a)
								}
								if ("favorites" == s.urlCategory) {
									var y = document.querySelector(".btn-all-game"),
										h = document.querySelector(".game-list__item");
									s.favoritesFirstPageLoad ? (s.favoritesFirstPageLoad = !1, 0 == a.data.games.length && (k(), _(y))) : 0 == a.data.games.length && (_(y), h || k())
								} else m && _(m);
								i && _(i), d && !s.firstLoad && S(), l && _(l), n && _(n), s.globalFirstLoad = !0
							}
						}
					}), t.send()
				};
			1 == s.filters.loadingFromURLWithProvider ? P("filterActionFlag") : P();
			var C = function() {
					for (var e = document.querySelectorAll(".js-favorite-icon"), t = new XMLHttpRequest, a = 0; a < e.length; a++) void 0 == e[a].dataset.favLoaded && (e[a].dataset.favLoaded = "true", e[a].addEventListener("click", function() {
						var e = this.dataset.id;
						this.classList.toggle("is-active"), t.open("GET", s.urlFavoriteIcon + e, !0), t.send()
					}))
				},
				j = function(e) {
					var a = document.querySelector(".game-list"),
						r = document.querySelector(".game-list-new-box"),
						l = e.data.games,
						n = e.data.newGames,
						o = e.data.providers,
						c = e.data.tiles,
						d = e.data.favorites;
					if (s.userAuth = e.data.authorized, !a) {
						! function() {
							t.insertAdjacentHTML("beforeend", '<ul class="game-list js-progressive-load-games"></ul>'), i = document.querySelector(".game-list")
						}()
					}
					var m = function(e) {
							var t = "";
							if (s.userAuth) {
								var a = "";
								for (var r in d) d[r] == e && (a = "is-active");
								t = s.isMobile ? '\n                            <div class="mobile-favorites-wrapp">\n                                 <svg class="icon-favorites icon-favorites_mobile js-favorite-icon ' + a + '" data-id="' + e + '">\n                                    <use xlink:href="#icon-favorites"></use>\n                                 </svg>\n                            </div>\n                        ' : '\n                             <svg class="icon-favorites js-favorite-icon ' + a + '" data-id="' + e + '">\n                                <use xlink:href="#icon-favorites"></use>\n                             </svg>                                   \n                        '
							}
							return t
						},
						u = function(e, t) {
							var a = "",
								r = "";
							return "" !== e && ("hot" == e ? a = "icon-tape-hot" : "new" == e ? a = t ? "icon-tape-new " + t : "icon-tape-new" : "free" == e ? a = "icon-tape-free" : "top" == e ? a = "icon-tape-top" : "cup" == e ? a = "icon-tape-cup-yggdrasil" : "tournament" == e ? a = "icon-tape-tournament" : "exclusive" == e && (a = "icon-tape-exclusive"), r = '<span class="' + a + '"></span>'), r
						},
						g = function(e, t) {
							var a = "";
							return e && 0 != e && (a = '\n                        <div class="game-jackpot">\n                            <div class="game-jackpot__title"><span class="game-jackpot__image"></span></div>\n                            <div class="game-jackpot__total">' + t + " " + e + "</div>\n                        </div>\n                    "), a
						},
						v = function(e, t) {
							var a = "";
							return t || (a = '<a href="' + e + '" class="btn-link game-hover__btn-demo">' + s.translate.playForDemo + "</a>"), a
						},
						f = function(e, t, a, r, i, l, n, o) {
							var c = "";
							if (1 == r || 1 == i || 1 == l) {
								var d = "";
								r ? d = s.translate.isBlockedForLocal : i ? d = s.translate.isBlockedForCurrency : l && (d = s.translate.isBlockedInCountry), c = '<div class="game-disabled"><div class="game-disabled-inner">' + d + "</div></div>"
							} else {
								var u = "";
								u = s.userAuth ? '<a href="#" onclick="window.location.replace(\'' + t + '\');" class="btn icon-play game-hover__btn-onmoney"></a>' : '<span data-popup-url="/login?redirect-url=' + t + '" class="btn icon-play game-hover__btn-onmoney"></span>', c = s.isMobile ? "" + m(n) : '\n                            <div class="game-hover">\n                                <div class="game-hover-inner">\n                                    <div class="game-item__title" title="' + e + '" itemprop="name">' + e + '</div>\n                                    <div class="game-hover__btn-box">\n                                        ' + u + '\n                                        <div class="game-hover-demo-wrap" style="display:none;">\n                                            ' + m(n) + "\n                                            \n                                            " + v(a, o) + "                                            \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        "
							}
							return c
						};
					if (function() {
							for (var e = "", t = 0; t < l.length; t++) {
								var a = l[t],
									r = "";
								if ("all" !== s.urlCategory && "livegames" !== s.urlCategory || a.isNetentLiveGame && (s.isNetentLiveGame = !0, r = "data-lg-id=" + a.id), s.isMobile) {
									e = '\n                            <li class="game-list__item" ' + r + '>\n                                <div class="game-item game-item-default">\n                                    <a href="' + (null != a.demoUrl ? a.demoUrl : a.realUrl) + '" class="game-list-link">\n                                        ' + u(a.ribbon) + '\n                                                            \n                                        <img src="' + s.imagePattern + '" alt="' + a.title + '" class="game-item__image" data-src="' + a.icon + '" />\n                                        \n                                        ' + g(a.jackpotSum, a.jackpotCurrency) + "\n                                    </a>\n                                    \n                                    " + f(a.title, a.realUrl, a.demoUrl, a.disabledLocale, a.disabledCurrency, a.blockedByCountry, a.id, a.isRealOnly) + "\n                                </div>\n                            </li>\n                        "
								} else e = '\n                            <li class="game-list__item" ' + r + '>\n                                <div class="game-item game-item-default">\n                                    ' + u(a.ribbon) + '\n                                                            \n                                    <img src="' + s.imagePattern + '" alt="' + a.title + '" class="game-item__image" data-src="' + a.icon + '" />\n                                    \n                                    ' + g(a.jackpotSum, a.jackpotCurrency) + "\n                                    \n                                    " + f(a.title, a.realUrl, a.demoUrl, a.disabledLocale, a.disabledCurrency, a.blockedByCountry, a.id, a.isRealOnly) + "\n                                </div>\n                            </li>\n                        ";
								s.gamesDOMList.push(e)
							}
						}(), void 0 !== c && s.categoryNeedsCommercialParam) {
						var p = function() {
							var e = {};
							for (var t in c) ! function(t) {
								var a = c[t],
									r = "",
									i = "";
								a && (i = s.isMobile ? '\n                                    <li class="game-list__item game-list__item_commercial game-list-commercial-' + t + '">\n                                        <div class="game-item game-item_commercial">\n                                            ' + function() {
									return r = null != a.url ? '\n                                        <a href="' + a.url + '" class="game-list-link">\n                                            <img src="' + s.imagePattern + '" alt="" class="game-item__image" data-src="' + a.icon + '" />\n                                        </a>' : '<img src="' + s.imagePattern + '" alt="" class="game-item__image" data-src="' + a.icon + '" />'
								}() + "\n                                        </div>\n                                    </li>\n                                " : '\n                                    <li class="game-list__item game-list__item_commercial game-list-commercial-' + t + '">\n                                        <div class="game-item game-item_commercial">\n                                            <img src="' + s.imagePattern + '" alt="" class="game-item__image" data-src="' + a.icon + '" />\n                                            ' + function() {
									return null != a.url && (r = '<a href="' + a.url + '" class="btn btn-gold btn-commercial">' + a.buttonTitle + "</a>"), r
								}() + "\n                                        </div>\n                                    </li>\n                                ", e[t] = i)
							}(t);
							return e
						};
						! function() {
							var e = p(),
								t = Object.keys(e);
							if (e.hasOwnProperty("1") && e.hasOwnProperty("2") && e.hasOwnProperty("3") && e.hasOwnProperty("4") && e.hasOwnProperty("5")) s.gamesDOMList.splice(1, 0, e[1]), s.gamesDOMList.splice(15, 0, e[2]), s.gamesDOMList.splice(23, 0, e[3]), s.gamesDOMList.splice(41, 0, e[4]), s.gamesDOMList.splice(62, 0, e[5]);
							else {
								if (e.hasOwnProperty("1") && s.gamesDOMList.splice(1, 0, e[1]), e.hasOwnProperty("2")) {
									var a = t.filter(function(e) {
										return e <= 2
									}).length;
									2 === a && s.gamesDOMList.splice(15, 0, e[2]), 1 === a && s.gamesDOMList.splice(18, 0, e[2])
								}
								if (e.hasOwnProperty("3")) {
									var r = t.filter(function(e) {
										return e <= 3
									}).length;
									3 === r && s.gamesDOMList.splice(23, 0, e[3]), 2 === r && s.gamesDOMList.splice(26, 0, e[3]), 1 === r && s.gamesDOMList.splice(29, 0, e[3])
								}
								if (e.hasOwnProperty("4")) {
									var i = t.filter(function(e) {
										return e <= 4
									}).length;
									4 === i && s.gamesDOMList.splice(41, 0, e[4]), 3 === i && s.gamesDOMList.splice(44, 0, e[4]), 2 === i && s.gamesDOMList.splice(47, 0, e[4]), 1 === i && s.gamesDOMList.splice(50, 0, e[4])
								}
								if (e.hasOwnProperty("5")) {
									var l = t.filter(function(e) {
										return e <= 5
									}).length;
									t.includes("4") ? (4 === l && s.gamesDOMList.splice(65, 0, e[5]), 3 === l && s.gamesDOMList.splice(61, 0, e[5]), 2 === l && s.gamesDOMList.splice(64, 0, e[5]), 1 === l && s.gamesDOMList.splice(53, 0, e[5])) : (4 === l && s.gamesDOMList.splice(58, 0, e[5]), 3 === l && s.gamesDOMList.splice(61, 0, e[5]), 2 === l && s.gamesDOMList.splice(57, 0, e[5]), 1 === l && s.gamesDOMList.splice(53, 0, e[5]))
								}
							}
						}(), s.categoryNeedsCommercialParam = !1
					}
					if (s.newGameJSONExist) {
						var y = document.querySelector(".game-list-new-box");
						! function() {
							var e = document.querySelector(".game-list-new"),
								a = function(e) {
									var t = "";
									return o.filter(function(a) {
										e == a.key && null != a.icon && (t = '<div class="game-item-provider">\n                                        <img src="' + a.icon + '" alt="" class="game-item-provider__image" />\n                                    </div>')
									}), t
								};
							if (!y) {
								! function() {
									t.insertAdjacentHTML("afterbegin", '<div class="game-list-new-box">\n                                <div class="game-list-new owl-carousel js-index-game-slider js-progressive-load-games"></div>\n                            </div>'), e = document.querySelector(".game-list-new")
								}()
							}
							for (var r = "", i = 0; i < n.length; i++) {
								var l = n[i];
								if (s.isMobile) {
									var c = null != l.demoUrl ? l.demoUrl : l.realUrl;
									r = '\n                                <div class="game-list-new__item game-list__item">                                                                        \n                                    <div class="game-item game-item-default">\n                                        ' + u(l.ribbon, "icon-tape-new_game-list-new") + '\n                                    \n                                        <a href="' + c + '" class="game-list-link">                                        \n                                            <img src="' + s.imagePattern + '" alt="' + l.title + '" class="game-item__image"  data-src="' + l.icon + '" />\n                                        \n                                            ' + g(l.jackpotSum, l.jackpotCurrency) + "\n                                        </a>\n                                    \n                                        " + f(l.title, l.realUrl, l.demoUrl, l.disabledLocale, l.disabledCurrency, l.blockedByCountry, l.id, l.isRealOnly) + "\n                                    </div>\n                                    \n                                    " + a(l.provider) + "\n                                </div> \n                            "
								} else r = '\n                                <div class="game-list-new__item game-list__item">                                    \n                                    <div class="game-item game-item-default">\n                                        ' + u(l.ribbon, "icon-tape-new_game-list-new") + '    \n                                                                        \n                                        <img src="' + s.imagePattern + '" alt="' + l.title + '" class="game-item__image" data-src="' + l.icon + '" />\n                                        \n                                        ' + g(l.jackpotSum, l.jackpotCurrency) + "\n                                    \n                                        " + f(l.title, l.realUrl, l.demoUrl, l.disabledLocale, l.disabledCurrency, l.blockedByCountry, l.id, l.isRealOnly) + "\n                                    </div>\n                                    \n                                    " + a(l.provider) + "\n                                </div> \n                            ";
								s.newGamesDOMList.push(r), e.insertAdjacentHTML("beforeend", r)
							}
							document.querySelector(".game-list-new-box").classList.remove("is-hide")
						}()
					} else "all" != s.urlCategory && (s.newGamesDOMList = [], _(r));
					! function() {
						i.insertAdjacentHTML("beforeend", s.gamesDOMList.join("")), s.gamesDOMList = [], M()
					}(), L(), s.firstLoad && !1 === s.filters.inAction() && (w(), x(), s.firstLoad = !1)
				},
				k = function() {
					var e = document.querySelector(".game-list-box"),
						t = '\n                <div class="game-not-found-box center">\n                    <div class="game-not-found-inner">' + s.translate.gamesEmpty + "</div>\n                </div>";
					e.insertAdjacentHTML("afterbegin", t)
				},
				M = function() {
					if (("all" === s.urlCategory || "livegames" === s.urlCategory) && s.isNetentLiveGame) {
						s.isNetentLiveGame = !1;
						var e = new Event("NetentLiveGames");
						document.dispatchEvent(e)
					}
				},
				q = function() {
					var e = document.querySelector(".preloader-box"),
						t = document.querySelector(".game-list"),
						a = document.querySelector(".btn-all-game");
					t && helpers.detectScrollBottomByElement(t) && (e || a || 0 != s.ajaxIsEmpty || (t.insertAdjacentHTML("afterend", '<div class="preloader-wrapp preloader-wrapp__bottom-page">\n                        <div class="preloader-box"></div>\n                    </div>'), s.incrementPage(), h(), !1 === s.filters.inAction() ? P() : (s.filters.overPreloaderMustExist = !1, P("filterActionFlag"))))
				};
			document.addEventListener("scroll", q)
		}
	};
	e(), document.addEventListener("detectIndexCategory", e)
}();
var liveGamesDetect = function() {
	if (document.querySelector(".game-list__item")) {
		var e = {
				api: "/api/games_netent_live_additional_data?locale=" + app.locale,
				attrName: "data-lg-id"
			},
			t = function(t, r) {
				for (var i = document.querySelectorAll("[" + e.attrName + "]"), s = 0; s < i.length; s++) {
					var l = i[s].querySelector(".game-item"),
						n = i[s].querySelector(".game-item-live-games"),
						o = i[s].dataset.lgId,
						c = "",
						d = !0,
						m = !1,
						u = void 0;
					try {
						for (var g, v = t[Symbol.iterator](); !(d = (g = v.next()).done); d = !0) {
							var f = g.value;
							parseInt(o) === parseInt(f.id) && (n && n.parentNode.removeChild(n), c = '\n                        <div class="game-item-live-games">\n                            <div class="game-item-live-games-grid">\n                                <div class="game-item-live-games-grid__left">' + app.trans["live.min_bet"] + ": " + f.minBet + r + '</div>\n                                <div class="game-item-live-games-grid__right">' + a(f.availableSeats, f.totalSeats) + "</div>\n                            </div>\n                        </div>\n                    ", l.insertAdjacentHTML("afterbegin", c))
						}
					} catch (e) {
						m = !0, u = e
					} finally {
						try {
							!d && v.return && v.return()
						} finally {
							if (m) throw u
						}
					}
				}
			},
			a = function(e, t) {
				return "unlimited" === e || "unlimited" === t ? "" : e <= t && 0 !== e ? app.trans["live.available_seats"] + ": " + e + "/" + t : 0 === e ? "" + app.trans["live.no_seats"] : void 0
			};
		! function() {
			var a = new XMLHttpRequest;
			a.open("GET", e.api, !0), a.send(), a.addEventListener("load", function() {
				if (4 === a.readyState) {
					var e = JSON.parse(a.responseText);
					200 !== a.status || "error" === e.status ? console.log("---error", a.status + ": " + a.statusText) : t(e.data.gamesInfo, e.data.currencySymbol)
				}
			})
		}()
	}
};
document.addEventListener("NetentLiveGames", liveGamesDetect);