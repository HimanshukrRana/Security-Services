/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";

function Terms() {
  return (
    <>
      <Layout>
        <section className="section-box mt-50 mb-50">
          <div className="container text-center">
            <h1 className="text-heading-1">Terms and Conditions</h1>
          </div>
        </section>
        <section className="section-box mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mx-auto">
                <div className="row">
                  <div className="col-lg-2">
                    <div className="table-of-content">
                      <h6 className="mb-15">Table of content</h6>
                      <ul>
                        <li>
                          <Link href="#section-1" legacyBehavior>
                            <a>LEGAL DISCLAIMER - Terms & Conditions of use</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#section-2" legacyBehavior>
                            <a>PRIVACY POLICY</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#section-3" legacyBehavior>
                            <a>Cookies</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#section-4" legacyBehavior>
                            <a>Personal Information</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#section-5" legacyBehavior>
                            <a>Visiting other sites</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="single-detail">
                      <img
                        className="img-responsive bdr-16"
                        src="assets/imgs/page/blog/single/img-1.png"
                        alt="  Saviour"
                      />
                      <h6 className="mt-35 mb-25" id="section-1">
                        LEGAL DISCLAIMER
                      </h6>
                      <p>
                        The material contained in this web site has been
                        prepared solely for the purpose of providing information
                        about Saviour Security Services, its subsidiaries and
                        associated companies and the services which they offer.
                      </p>
                      <p>
                        Saviour Services has used reasonable care and skill in
                        compiling the content of the site, it makes no warranty
                        (express or implied) as to the accuracy or completeness
                        of any information on the site or published by third
                        parties referred to by a link from the site.
                      </p>
                      <p>
                        By accessing this site, you agree that, to the extent
                        permitted by law, Saviour Secruity shall in no event be
                        liable for any damages whatsoever (including special,
                        indirect or consequential damages), whether in an action
                        of contract or tort, arising out of or in connection
                        with (a) the information on the site or published by
                        third parties referred to by a link from the site, and
                        (b) the performance or non-performance of the site
                        itself.
                      </p>
                      <p>
                        The provision of services and goods by Saviour Security
                        Services subject to Saviour standard conditions of
                        contract for such services and goods, copies of which
                        can be supplied upon request.
                      </p>
                      <p>
                        This site is protected by copyright, and all Saviour
                        Security Services intellectual property (including
                        without limitation trade marks, patents and design
                        rights) and brands included in the material belong to
                        Saviour Services. You may only store on your personal
                        computer or print copies of the material available on
                        these pages for your own personal and non-commercial use
                        and you must not adapt, modify or re-use the text or
                        graphics from the site without the prior written consent
                        of Saviour Services.
                      </p>
                      <h6 className="mt-35 mb-25" id="section-2">
                        PRIVACY POLICY
                      </h6>
                      <p>
                        This privacy policy covers our use of the information
                        collected by the Saviorsecruity.co.in web site (or other
                        linked savior web sites) during your visit to our site.
                      </p>
                      <h6 className="mt-35 mb-25" id="section-3">
                        Cookies
                      </h6>
                      <p>
                        We may store a small file (commonly known as a “cookie”)
                        on your computer when you visit Saviorsecruity.co.in. We
                        use cookies to improve our knowledge of the use of our
                        web site and to help us determine how well our web site
                        is operating.
                      </p>
                      <p>
                        The type of information we collect using cookies is
                        specific to your PC and does not include personal
                        information about you. We collect information such as
                        the IP address, the date and time you visited the web
                        site, which pages of our web sites you looked at and
                        whether those web pages were delivered quickly and
                        successfully. Using this information allows us to
                        improve our web site and to provide you a better online
                        experience.
                      </p>
                      <p>
                        You can delete our cookies or block this information by
                        changing the settings on your PC (please refer to your
                        browser’s help screens for instruction). If you block
                        this information you may not be able to utilize some
                        features of the site.
                      </p>
                      <h6 className="mt-35 mb-25" id="section-4">
                        Personal Information
                      </h6>
                      <p>
                        We collect and use personal information (including name,
                        address, telephone number and email) in order to:
                      </p>

                      <p>*Respond to queries or requests submitted by you</p>
                      <p>*Process orders or applications submitted by you</p>
                      <p>
                        *Administer or otherwise carry out our obligations in
                        relation to any agreement you have with us
                      </p>
                      <p>
                        *Anticipate and resolve problems with any services
                        supplied to you
                      </p>

                      <h6 className="mt-35 mb-25" id="section-5">
                        Visiting other sites
                      </h6>
                      <p>
                        We cannot be responsible for the privacy policies and
                        practices of other web sites even if you accessed the
                        third party web site using links from our web site; or
                        you linked to our web site from a third party web site.
                        We recommend that you check the policy of each site you
                        visit and contact the owner or operator of such web site
                        if you have any concerns or questions.
                      </p>

                      <p>
                        For more information about our privacy policy, please
                        contact: info@security.co.in
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <h3 className="text-heading-6 color-gray-400 mb-20 mt-150">
                      Share
                    </h3>
                    <Link href="https://facebook.com" legacyBehavior>
                      <a
                        className="share-social share-fb"
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                    </Link>
                    <br />
                    <Link href="https://twitter.com" legacyBehavior>
                      <a
                        className="share-social share-tw"
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                    </Link>
                    <br />
                    <Link href="https://www.pinterest.com" legacyBehavior>
                      <a
                        className="share-social share-pi"
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box box-gray-100 mt-120 mb-20">
          <div className="container">
            <div className="icon-wave">
              <div className="row">
                <div className="col-lg-12 mb-60">
                  <span className="text-body-capitalized text-uppercase">
                    Contact us
                  </span>
                  <h2 className="text-heading-3 color-gray-900 mt-10">
                    Do you need Secruity?
                  </h2>
                  <p className="text-body-text color-gray-600 mt-20">
                    The right move at the right time saves your Bussiness or
                    People Life.
                    <br className="d-lg-block d-none" />
                    No need to tense we are here for you.
                  </p>
                </div>
                <div className="col-lg-4 mb-40">
                  <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
                    Saviour Security
                  </h4>
                  <p className="text-body-text color-gray-600">
                    4517 Collector Ave.
                    <br />
                    Hazaribagh, Jharkhand 39495
                  </p>
                  <p className="text-body-text color-gray-600">
                    (+91) 96555-01082
                  </p>
                  <p className="text-body-text color-gray-600">
                    contact@security.com
                  </p>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Company (optional)"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Full Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Tell us about yourself"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 mt-15">
                      <button
                        className="btn btn-black icon-arrow-right-white mr-40 mb-20"
                        type="submit"
                      >
                        Contact Us
                      </button>
                      <br className="d-lg-none d-block" />
                      <span className="text-body-text-md color-gray-500 mb-20">
                        By clicking contact us button, you agree our terms and
                        policy,
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Terms;
