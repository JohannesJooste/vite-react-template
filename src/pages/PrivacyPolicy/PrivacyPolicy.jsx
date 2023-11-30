import React from "react";
import './PrivacyPolicy.css'
import CommonLayout from "../../layouts/CommonLayout";

const PrivacyPolicy = () => {
    const breadcrumbItems = [
        { label: 'Home', url: '/' },
        { label: 'Privacy Policy', url: 'privacy-policy/' }
    ];
    return (
        <CommonLayout
            pageTitle='Privacy Policy'
            breadcrumbItems={breadcrumbItems}>
            <div className="container">
                <div className="row">
                    <p><strong>Updated:</strong> 16 September 2023</p>
                </div>
                <div className="row">
                    <p>
                        This Privacy Policy outlines the Personal Information about you that Jooste Heritage Foundation NPC ("we" or "us") collects, uses, and stores on Jooste.org ("Jooste Heritage Foundation" or "Website"). Your Personal Information is any information about you as an identified or identifiable person.
                    </p><br />
                    <p>
                        <strong>We are committed to protecting the Personal Information entrusted to us and to providing visitors and Jooste Heritage Foundation members with a clear understanding of what information we collect and how that information is stored and processed. We also facilitate our members’ full control over the information provided to us, to allow members to change, remove or restrict the use of the information they have provided on Jooste.org.</strong>
                    </p><br />
                    <p>
                        Use of Jooste.org is governed by this Privacy Policy and our <a href="{% url 'core:terms-of-service' %}">Terms of Service</a>.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div data-bs-spy='scroll' data-bs-smooth-scroll='true' className="scrollspy">
                            <ol>
                                <li className="h2" id="Overview">Overview</li>
                                    <p>Jooste.org is intended for genealogy collaboration. Use of this site for any other purpose is unauthorized and prohibited. As a genealogy website, Jooste.org stores extensive Personal Information.</p>
                                    <p>Each member, prior to using Jooste.org, must agree to our Terms of Service, and confirm their understanding that posting information on Jooste.org is the equivalent of making such information available to the public. Although we will endeavor to protect your information and promptly respond to your requests to control the storage, processing and use of your Personal Information, you alone are responsible for the information you share about yourself and other people. Members must understand that sharing information about living people must be done with great caution.</p>
                                <br />
                                <li className="h2" id="PersonalInformationStore">Personal Information We Store</li>
                                    <p>The following information can be stored in profiles of living people:</p>
                                    <ul>
                                        <li>Name</li>
                                        <li>Sex at Birth</li>
                                        <li>Dates and locations of events</li>
                                        <li>E-mail address and password</li>
                                        <li>Family relationships</li>
                                        <li>Unlimited biographical and source information</li>
                                    </ul>
                                    <p>
                                        All of the above is optional on your personal account profile, except an e-mail address and password. Your real name is preferred for your account profile, especially your surname (family name), but you can use "Anonymous" or initials.
                                    </p>
                                    <p>
                                        If you submit Personal Information through Jooste.org, people you allow in your profile's Trusted List will have access to all the information except your password. You can control which people can access your information through your profile's Trusted List but those people could forward this information to other users or non-users. There are also other risks, including those described below. Do not post especially sensitive information on Jooste.org.
                                    </p>
                                    <p>
                                        Some Personal Information about you will be visible to the public so that relatives can find you. Public information may include name, primary photograph, decade of birth (not the exact date), and other information described in our privacy settings.
                                    </p>
                                    <p>
                                        You may update or remove any of your Personal Information on the Website at any time. You may request that we remove your Personal Information by contacting us, with the understanding that we may maintain an archive or back-up of the information not on the Website.
                                    </p>
                                <br />
                                <li className="h2" id="AdditionalInformationUpload">Additional Information You May Upload</li>
                                    <ol>
                                        <li className="h3" id="InformationOnLiving">Information on Living Family Members</li>
                                            <p>Members can add personal information about their living family members and personal friends, however:</p>
                                            <ul>
                                                <li>You must not share information or create a profile for a living person without that person's explicit, prior permission, except in the two very limited cases described on <a href="https://www.jooste.org/kb/People/Living%20People/">KB: Living People</a> </li>
                                                <li>You must not share information about a living child under 16 without parental consent.</li>
                                                <li>You must not share any information about a living child under 13 unless you are their parent and legal guardian. Even profiles of children created by parents should be considered placeholders only and not contain any sensitive information.</li>
                                                <li>You must not share any information about DNA tests for other living people.</li>
                                            </ul>
                                        <br />
                                        <li className="h3" id="GEDCOMs">GEDCOMs</li>
                                            <p>You can upload personal information via the GEnealogical Data COMmunication (GEDCOM) format. GEDCOMs are automatically deleted after you are no longer using them, or on demand.</p>
                                        <br />
                                        <li className="h3" id="Photos">Photos</li>
                                            <p>You can upload family photos and connect them with person profiles.</p>
                                            <p>Photos that include living people may be shared publicly but must not be linked to the name or personal identification of non-members and must not include "<a href="https://en.wikipedia.org/wiki/Exif" target="_blank">Exif metadata</a>"  that could be used to identify a living person other than yourself.</p>
                                            <p>Photos can be removed and deleted at any time by the member who uploaded the photo or upon request of any person that appears in the photo or whose Personal Information is stored in photo metadata.</p>
                                        <br />
                                        <li className="h3" id="CommentsInteraction">Comments and Member Interactions</li>
                                            <p>You are invited to comment on photos, person profiles, in our discussion forum, in social media, and in various other private and public communications with other Jooste.org members. Comments and messages cannot always be deleted, but your name and other personally identifiable information can be removed from them.</p>
                                        <br />
                                        <li className="h3" id="DNATestInfo">DNA Test Information</li>
                                            <p>Although Jooste.org does not store original genetic data, you can enter information about DNA tests you have taken and conclusions made from such tests. You may not store any DNA-related data that can be used to personally identify other living people. Only Jooste.org members are permitted to upload and control their personal DNA test information to Jooste.org and only in connection with that member’s agreement to Jooste.org's <a href="{% url 'core:terms-of-service' %}">Terms of Service</a>  and Privacy Policy.</p>

                                    </ol>
                                <br />
                                <li className="h2" id="Tracking">Tracking</li>
                                    <p>Genealogy collaboration on Jooste.org entails recording and displaying changes that you have made to profiles and other contributions to the Website. Details of changes to private profiles are only visible to the profile manager. The summaries of these changes cannot be deleted, but your name and other personally identifiable information can be removed from them.</p>
                                    <p>We store IP addresses in various log files. We could not protect our community against vandals and spammers without this tracking.</p>
                                    <br />
                                    <li className="h2" id="PersonalDataFromChild">Personal Data Received from Children</li>
                                        <p>The information and services described on Jooste.org are not intended for children under the age of 13. Children under the age of 16 may only use Jooste.org with parental consent. If we learn that we have collected or received Personal Information from a child under 16 without parental consent we will delete that information.</p>
                                    <br />
                                    <li className="h2" id="Security">Security</li>
                                        <p>Jooste.org provides a secure platform through a third-party Platform-as-a-Service (PaaS) to protect your Personal Information from being viewed by an outside user. The technology transmits and receives scrambled data, which is decoded on the server side. We have implemented commercially reasonable technical and organizational measures designed to secure your Personal Information from accidental loss and from unauthorized access, disclosure, use, or alteration.</p>
                                        <p>However, we cannot guarantee that unauthorized third parties will never be able to defeat our measures or use your Personal Information for improper purposes. You acknowledge that you make your Personal Information available publicly through Jooste.org and that <strong>you use the website at your own risk</strong>. You must also guard against unauthorized access by protecting your password and access to your computer or other devices.</p>
                                        <p>In the event that Personal Information is compromised as a result of a br /each of security, we will promptly provide notifications to our members via e-mail notice or through conspicuous posting of such notice on Jooste.org, as determined by us in our sole discretion. We reserve the right to determine the form and means of providing notifications to our users, provided that you may opt out of certain means of notification as described in this Privacy Policy.</p>
                                    <br />
                                    <li className="h2" id="LegalBaseData">Legal Bases for Collecting and Processing Data</li>
                                        <p>By agreeing to our <a href="{% url 'core:terms-of-service' %}">Terms of Service</a>, you have consented to the processing of your data as set forth herein and in the Terms of Service. We rely on your explicit consent to process your information. You have the right to withdraw your consent for future processing, but any processing that took place prior to the withdrawal of your consent shall have been processed with consent.</p>
                                        <p>We may also process your personal data on your direction, to perform services you have requested through your use of Jooste.org. Additionally, we have an interest in processing data regarding members in order to further business goals and improve member services.</p>
                                        <p>Finally, we process your data in order to further the goal of online genealogy collaboration for historical research purposes. Therefore, although we will do everything we can to ensure the safety and security of your Personal Information, the collection and sharing of your Personal Information is necessary to link individuals with their family connections. Please take these considerations into account when you decide to use Jooste.org and to share your personal data on our website.</p>
                                    <br />
                                    <li className="h2" id="CRUDData">Accessing, Deleting and Correcting Personal Information</li>
                                        <p>If you are a resident of the European Economic Area (EEA) you have the right to access Personal Information that we have collected about you and to review how data is processed</p>
                                        <p>Anyone may:</p>
                                        <ul>
                                            <li>Opt out of any future contacts from us.</li>
                                            <li>See what Personal Information we have about you, if any. This can be done by accessing your profile, which we can help you do.</li>
                                            <li>Change or correct any Personal Information. This can be done by accessing your profile as a member.</li>
                                            <li>Have us delete any Personal Information, with the understanding that we may maintain an archive or back-up of the information not on the Website. This can be done with the "PRIVACY TAKE-DOWN REQUEST" form linked from the bottom of the profile.</li>
                                            <li>Obtain a copy of the Personal Information about you. This is best done with a GEDCOM export (when function becomes available) since it creates a portable file that can be imported into almost any major genealogy program or website.</li>
                                            <li>Express any concern you have about our use of your Personal Information</li>
                                        </ul>
                                        <p>You can email info-at-jooste-dot-org (remove hyphens and change "at" and "dot" to @ and a period) for help with any of the above.</p>
                                        <p>We can also help you delete information you have entered about other living people if the information is not being shared with other family members. For example, if you create a profile for your sibling and your sibling becomes a Jooste.org member, you can delete your personal profile but you cannot delete your sibling's profile or profiles of other family members if your sibling is on their profiles' Trusted Lists.</p>
                                        <p>Information that you have publicly shared about non-living people using the "Public" privacy levels can be corrected if there are mistakes but it cannot be deleted unless it reveals Personal Information about living people.</p>
                                    <br />
                                    <li className="h2" id="ContactPreferences">E-Mail and Contact Preferences</li>
                                        <p>We will use your e-mail address to complete the signup process and we will use your friends' and relatives' e-mail addresses to invite them to join you if you choose to provide them. By providing an e-mail address to Jooste.org you consent to our using the e-mail address to send you service-related notices, including notices required by law, in lieu of postal mail. You may not opt out of service-related e-mails. We may also use your e-mail address to send you other messages, including changes to Jooste.org features. If you do not want to receive such e-mail messages, you may opt out by changing your account settings or by sending mail to the following postal address:</p>
                                        <p>
                                            <strong>Jooste Heritage Foundation NPC</strong><br />
                                            40 Old Paarl Road <br />
                                            Belgravia <br />
                                            Cape Town, 7530 <br />
                                            South Africa
                                        </p>
                                    <br />
                                    <li className="h2" id="DataCollection">Data Collection</li>
                                        <p>We only collect Personal Information if members provide it to us voluntarily. Personal Information collected on Jooste.org may be stored and processed in the United States or any other country in which Jooste.org (and its affiliates and agents) maintains facilities. By using Jooste.org you consent to the storage, processing, and transfer of your Personal Information outside your country</p>
                                        <p>We collect general, statistical information about visitors to our site for the purpose of facilitating communication and conducting business between Jooste.org and users of the site. We use this information solely for internal purposes, such as to improve Jooste.org.</p>
                                    <br />
                                    <li className="h2" id="UseOfCookies">Use of Cookies</li>
                                        <p>We make use of "cookies". A cookie is a small text file stored by a website on a user's hard drive which contains information about the user. You can set your browser to decline or accept cookies, though if you choose not to accept cookies, some parts of Jooste.org may function less efficiently.</p>
                            </ol>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-jhf my-2 sticky-top">
                            <div className="card-header card-header-jhf">
                                <h2>Content</h2>
                            </div>
                            <div className="card-body">
                                <div className="nav">
                                    <ol style={{ lineHeight: '0.5px' }}>
                                        <li className="nav-item">
                                            <a href="#Overview" className="nav-link nav-link-jhf"><h6>Overview</h6></a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#PersonalInformationStore" className="nav-link nav-link-jhf"><h6>Personal Information We Store</h6></a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#AdditionalInformationUpload" className="nav-link nav-link-jhf"><h6>Additional Information You May Upload</h6></a>
                                        </li>
                                        <ol style={{ lineHeight: '0.5px' }}>
                                            <li className="nav-item">
                                                <a href="#InformationOnLiving" className="nav-link nav-link-jhf">Information on Living Family Members</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#GEDCOMs" className="nav-link nav-link-jhf">GEDCOMs</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#Photos" className="nav-link nav-link-jhf">Photos</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#CommentsInteraction" className="nav-link nav-link-jhf">Comments and Member Interactions</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#DNATestInfo" className="nav-link nav-link-jhf">DNA Test Information</a>
                                            </li>
                                        </ol>
                                        <li className="nav-item">
                                            <a href="#Tracking" className="nav-link nav-link-jhf"><h6>Tracking</h6></a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#PersonalDataFromChild" className="nav-link nav-link-jhf"><h6>Personal Data Received from Children</h6></a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#Security" className="nav-link nav-link-jhf"><h6>Security</h6></a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#LegalBaseData" className="nav-link nav-link-jhf"><h6>Legal Bases for Collecting and Processing Data</h6></a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#CRUDData" className="nav-link nav-link-jhf"><h6>Accessing, Deleting and Correcting Personal Information</h6></a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#ContactPreferences" className="nav-link nav-link-jhf"><h6>E-Mail and Contact Preferences</h6></a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#DataCollection" className="nav-link nav-link-jhf"><h6>Data Collection</h6></a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#UseOfCookies" className="nav-link nav-link-jhf"><h6>Use of Cookies</h6></a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </CommonLayout>
    );
};

export default PrivacyPolicy;