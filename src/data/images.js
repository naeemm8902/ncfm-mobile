/**
 * Central image registry. Metro requires static require() paths, so every
 * bundled image is declared once here and referenced elsewhere by key.
 */
export const images = {
  // Brand
  logo: require('../../assets/images/main-logo.png'),
  logoWhite: require('../../assets/images/ncfm-main-logo-2.png'),
  heyGrace: require('../../assets/images/hey-grace-icon.png'),

  // Home hero
  heroBg: require('../../assets/images/hero-section/hero-sec-1.png'),
  heroPortrait: require('../../assets/images/hero-section/hero-2.png'),
  heroCover: require('../../assets/images/hero-section/hero-sec-3.png'),
  advertiseBg: require('../../assets/images/advertise-bg.png'),

  // Partner spotlight / logos
  communityPartnerBadge: require('../../assets/images/partner-logos/community-partner.png'),
  partnerLogoDemos: require('../../assets/images/partner-logos/demos-brands.png'),
  partnerLogoPenthRex: require('../../assets/images/partner-logos/penth-rex.jpg'),
  partnerLogoCtn40: require('../../assets/images/partner-logos/ctn-40.jpg'),
  partnerLogoSalvationArmy: require('../../assets/images/partner-logos/the-salvation-army.jpg'),
  partnerLogo1stHour: require('../../assets/images/partner-logos/1st-hour-for-men.jpg'),
  partnerLogoSwanson: require('../../assets/images/partner-logos/swanson.png'),
  partnerLogoLee: require('../../assets/images/partner-logos/lee-company.jpg'),
  partnerLogoMollyMa: require('../../assets/images/partner-logos/molly-ma.jpg'),

  // About
  aboutHero: require('../../assets/images/about/about-hero-img.jpg'),
  aboutMission2: require('../../assets/images/about/our-mission-2.jpg'),
  statementOfFaithBg: require('../../assets/images/about/statement-of-faith.jpg'),
  publisher: require('../../assets/images/about/publisher.png'),
  stringfellowFamily: require('../../assets/images/about/stringfellow-family.jpg'),
  designerLogo: require('../../assets/images/about/about-designer.png'),

  // Categories
  categoriesHero: require('../../assets/images/categories/categories-background-1.jpg'),
  categorySpiritual: require('../../assets/images/categories/item-01.jpg'),
  categoryFamily: require('../../assets/images/categories/item-02.jpg'),
  categoryLifestyle: require('../../assets/images/categories/item-03.jpg'),
  categoryEntertainment: require('../../assets/images/categories/item-04.jpg'),
  articleHero: require('../../assets/images/categories/article/article-image.jpg'),
  articleThumb1: require('../../assets/images/categories/article/img-1.jpg'),
  articleThumb2: require('../../assets/images/categories/article/img-2.jpg'),
  articleThumb3: require('../../assets/images/categories/article/img-3.jpg'),
  articleThumb4: require('../../assets/images/categories/article/img-4.jpg'),
  articleThumb5: require('../../assets/images/categories/article/img-5.jpg'),

  // Contact / Prayer
  contactHero: require('../../assets/images/contact-hero-img.jpg'),

  // Issues
  issueCover1: require('../../assets/images/issues/book-cover-1.jpg'),
  issueCover2: require('../../assets/images/issues/book-cover-2.jpg'),
  issueCover3: require('../../assets/images/issues/book-cover-3.jpg'),
  issueCover4: require('../../assets/images/issues/book-cover-4.jpg'),
  issueCover5: require('../../assets/images/issues/book-cover-5.jpg'),
  issueCover6: require('../../assets/images/issues/book-cover-6.jpg'),
  issueCover7: require('../../assets/images/issues/book-cover-7.jpg'),
  issueCover8: require('../../assets/images/issues/book-cover-8.jpg'),
  issueCover9: require('../../assets/images/issues/book-cover-9.jpg'),
  issueCover10: require('../../assets/images/issues/book-cover-10.jpg'),
  issueCover11: require('../../assets/images/issues/book-cover-11.jpg'),
  issueCover12: require('../../assets/images/issues/book-cover-12.jpg'),

  // Advertise / Partners page logos
  advertiseMap: require('../../assets/images/advertise-page-map.jpg'),
  wonderCenterLogo: require('../../assets/images/partner/wonder-center.jpg'),
  ctnLogo: require('../../assets/images/partner/ctn.jpg'),
  trevecaLogo: require('../../assets/images/partner/trevecca.jpg'),
  crainLawLogo: require('../../assets/images/partner/crain-law-group.jpg'),
  wonderImg1: require('../../assets/images/wonder-center/image1.jpg'),
  wonderImg2: require('../../assets/images/wonder-center/image2.jpg'),
  wonderImg3: require('../../assets/images/wonder-center/image3.jpg'),
  wonderImg4: require('../../assets/images/wonder-center/image4.jpg'),

  legacyCtn: require('../../assets/images/partner/ctn.jpg'),
  legacyTrevecca: require('../../assets/images/partner/trevecca.jpg'),
  legacyCrainLaw: require('../../assets/images/partner/crain-law-group.jpg'),
  legacySelectPoint: require('../../assets/images/partner/select-point.jpg'),
  legacyCoolSprings: require('../../assets/images/partner/cool-springs.jpg'),
  legacyVistaPoints: require('../../assets/images/partner/vista-points.jpg'),
  legacyWonderCenter: require('../../assets/images/partner/wonder-center.jpg'),
  legacySwanson90: require('../../assets/images/partner/swanson-90.jpg'),
  legacyMollyMaid: require('../../assets/images/partner/molly-maid.jpg'),

  foundationFirstHours: require('../../assets/images/partner/the-first-hours.jpg'),
  foundation94fm: require('../../assets/images/partner/94-fm-the-fish.jpg'),
  foundationDemos: require('../../assets/images/partner/demos-brands.jpg'),
  foundationWingVision: require('../../assets/images/partner/wing-vision.jpg'),
  foundationWhc: require('../../assets/images/partner/w-h-c.jpg'),
  foundationCentury21: require('../../assets/images/partner/century-21.jpg'),
  foundationPenthRex: require('../../assets/images/partner/penth-rex.jpg'),
  foundationLee: require('../../assets/images/partner/lee-company.jpg'),
  foundationUnitedWay: require('../../assets/images/partner/united-way.jpg'),

  publisherPortrait: require('../../assets/images/partner/publisher-img.jpg'),

  // Shop
  shop1: require('../../assets/images/shop/cover-img-1.jpg'),
  shop2: require('../../assets/images/shop/cover-img-2.jpg'),
  shop3: require('../../assets/images/shop/cover-img-3.jpg'),
  shop4: require('../../assets/images/shop/cover-img-4.jpg'),
  shop5: require('../../assets/images/shop/cover-img-5.jpg'),
  shop6: require('../../assets/images/shop/cover-img-6.jpg'),
  shop7: require('../../assets/images/shop/cover-img-7.jpg'),
  shop8: require('../../assets/images/shop/cover-img-8.jpg'),
  shop9: require('../../assets/images/shop/cover-img-9.jpg'),
  shop10: require('../../assets/images/shop/cover-img-10.jpg'),
  shop11: require('../../assets/images/shop/cover-img-11.jpg'),
  shop12: require('../../assets/images/shop/cover-img-12.jpg'),
  shop13: require('../../assets/images/shop/cover-img-13.jpg'),
  shop14: require('../../assets/images/shop/cover-img-14.jpg'),
  shop15: require('../../assets/images/shop/cover-img-15.jpg'),
};

export default images;
