---
title: Open Source
permalink: /resources/opensource
---
We open source many of our tools in order for us to share and work together with developers around the world to tackle common challenges. We hope that by doing so, we can help others to improve public good around the world. 

## Form
**[Official Site](https://form.gov.sg )** | **[GitHub](https://github.com/opengovsg/FormSG)** | **[Contact](mailto:form@open.gov.sg)**

Form builder and manager used by the Singapore government and public healthcare institutions to securely collect data from residents and businesses. Since its launch in 2017, Form has helped 44k public officers to collect over 58 million submissions.

Form has been used for:
* Travel and health declarations by visitors to the country
* Applications for swab tests
* COVID-19 financial assistance applications and distribution (collection of citizens’ bank details)
* 100K+ daily temperature declarations by public officers and students nationwide
* Feedback from public officers on remote work
* Mandatory primary school registration for 7 year olds nationwide 

Key engineering features
* End-to-end encryption (not available in commercial form managers) protecting classified and sensitive data
* Support for delivery of submissions to external systems via webhooks, with SDKs in [TypeScript](https://github.com/opengovsg/formsg-javascript-sdk), [Python](https://github.com/opengovsg/formsg-python-sdk) and [Ruby](https://github.com/opengovsg/formsg-ruby-sdk) to handle form submissions, including decryption of payloads
* Webhook retries to better guarantee delivery of form submissions to webhook destinations
* Rich features that especially support public sector needs, such as table-input fields, OTP verification of contact details, email domain restrictions, logic to disable submissions and date validations

## Go
**[Official Site](https://go.gov.sg )** | **[GitHub](https://github.com/opengovsg/GoGovSG)** | **[Contact](mailto:go@open.gov.sg)**

Government link shortener granting legitimacy to content shared by public officers. To date, Go has been used by over 13k public officers to shorten over 86k links that have been accessed over 78 million times.

Go.gov.sg has been used for shortening links to:
* go.gov.sg/whatsapp: application form of the official WhatsApp broadcast of the Singapore government
* go.gov.sg/passport: application of passport for Singaporean citizen
* Training materials for Covid-19 healthcare volunteers 
* Official press releases from the ministry of health about Covid-19 updates
* Correction directions, guides, articles and documents.

Key engineering features:
* Analytics - track link clicks across government links
* Theming - allows multiple deployments in contexts other than official government communications, such as in healthcare and education

## Postman
**[Official Site](https://postman.gov.sg)** | **[GitHub](https://github.com/opengovsg/postmangovsg)** | **[Contact](https://go.gov.sg/postman-contact-us)**

Official mass communication tool used by Singapore public agencies launched in May 2020. Postman has been supporting COVID-19 related use cases to help our public officers reach citizens in this uncertain period of time. Postman has since helped over 90 Singapore government agencies to send over 3 million messages. 

Postman.gov.sg has been used for:
* Sending negative COVID-19 swab results to patients
* Enabling Ministry of Health's Healthcare Corps in managing COVID-19 volunteers
* Reminding citizens on quarantine notice to reply to the geolocation check for compliance
* Helping teachers communicate with students at home for home-based learning
* Notifying citizens of changes in government agency appointments

Key benefits:
* Password-protecting sensitive information
* Send messages en masse easily
* Omnichannel platform
* Campaign analytics

## Isomer
**[Official Site](https://isomer.gov.sg)** | **[GitHub](https://github.com/isomerpages/)** | **[Contact](https://go.gov.sg/isomer-contact/)**

Isomer is a static site builder for the government. We provide end to end hosting service while the users focus on their site content. Instead of spending months and hefty amounts of money, Isomer enables public officers to launch secure and cheap websites in as fast as 36 hours. 

Isomer has been used for:
* Nationwide covid-19 campaign sites sgunited.gov.sg and business support portal covid.gobusiness.gov.sg.
* Informational sites on travel requirements during COVID-19 safetravel.ica.gov.sg
* Agencies corporate websites such as mlaw.gov.sg, customs.gov.sg, tech.gov.sg

## CheckFirst

**[Official Site](https://checkfirst.gov.sg)** | **[GitHub](https://github.com/opengovsg/checkfirst)** | **[Contact](https://go.gov.sg/checkfirst-contact)**

CheckFirst allows public officers to build online eligibility checkers and calculators to help members of the public better understand policies. This is a better alternative to Excel spreadsheets and bespoke web applications.

CheckFirst has been used for:
* An [online questionnaire](https://www.covid.gov.sg/not-sure) to determine which health protocol to follow during the COVID-19 pandemic
* A tool to determine which travel lane to use for people inbound to Singapore during the COVID-19 pandemic

Key engineering features:
* Use of math.js to evaluate business logic as a series of spreadsheet-like formulas
* A visual interface to build the checker inputs and map them to business logic

## MockPass
**[GitHub](https://github.com/opengovsg/mockpass)**

MockPass is a mock service for SingPass, CorpPass, MyInfo and sgID for local developer environments, allowing for development and integration without the need for connectivity to such services.