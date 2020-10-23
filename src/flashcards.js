const data =
    [
        {
            "id": 1,
            "vocab": "60% Rule",
            "content": "Payroll costs (including SE Reimbursement) must be a minimum of 60% of the PPP loan forgiveness amount.  As a consequence of this rule, Payroll Costs/.60 = the maximum forgiveness amount."
        },
        {
            "id": 2,
            "vocab": "Alternative Covered Period",
            "content": "A borrower with a bi-weekly (or more frequent) payroll cycle may elect to use an alternative payroll covered period that begins on the first day of the first payroll cycle in the covered period and continues for either (a) eight weeks, in the case of a borrower that received its PPP loan before June 5, 2020 and elects to use an eight-week covered period, or (b) 24 weeks, in the case of all other borrowers."
        },
        {
            "id": 3,
            "vocab": "Authorized Use of PPP Loan Funds",
            "content": "The proceeds of a PPP loan are to be used for: i. payroll costs (as defined in the Act and in 2.f.); ii. costs related to the continuation of group health care benefits during periods of paid sick, medical, or family leave, and insurance premiums; iii. mortgage interest payments (but not mortgage prepayments or principal payments); iv. rent payments; v. utility payments; vi. interest payments on any other debt obligations that were incurred before February 15, 2020; and/or vii. refinancing an SBA EIDL loan made between January 31, 2020 and April 3, 2020. If you received an SBA EIDL loan from January 31, 2020 through April 3, 2020, you can apply for a PPP loan. If your EIDL loan was not used for payroll costs, it does not affect your eligibility for a PPP loan. If your EIDL loan was used for payroll costs, your PPP loan must be used to refinance your EIDL loan. Proceeds from any Advance up to $10,000 on the EIDL loan will be deducted from the loan forgiveness amount on the PPP loan."
        },
        {
            "id": 4,
            "vocab": "C-Corp",
            "content": "This is a IRS designation made available to corporations (and LLCs) with many stockholders (aka widely held) that is not exempt from paying taxes at the corporate level."
        },
        {
            "id": 5,
            "vocab": "C-Corp Owner-Employee Cap",
            "content": "C-corporation owner employees are capped by the amount of their 2019 employee cash compensation and employer retirement and health insurance contributions made on their behalf."
        },
        {
            "id": 6,
            "vocab": "Corporation",
            "content": "This is entity chartered by a state or the federal government, that is separate and distinct from the people that own it."
        },
        {
            "id": 7,
            "vocab": "Covered Period",
            "content": "This is the period of time during which the borrower applies the PPP loan proceeds to the approved payroll and other costs. It is the 24-week period beginning on the date the lender disburses the PPP loan. Alternatively, a borrower that received a PPP loan before June 5, 2020 may elect for the covered period to end 8-weeks after the date of disbursement of the PPP loan."
        },
        {
            "id": 8,
            "vocab": "Criminal History PPP  Loan Eligibility",
            "content": "A borrower is ineligible for PPP if an owner of 20 percent or more of the equity of the applicant is presently incarcerated or, for any felony, presently subject to an indictment, criminal information, arraignment, or other means by which formal criminal charges are brought in any jurisdiction; or has been convicted of, pleaded guilty or nolo contendere to, or commenced any form of parole or probation (including probation before judgment) for a felony involving fraud, bribery, embezzlement, or a false statement in a loan application or an application for federal financial assistance within the last five years or any other felony within the last year."
        },
        {
            "id": 9,
            "vocab": "Disbursements On Increased Loans",
            "content": "If a PPP loan is increased (applies to Seasonal Employers or Partnerships) the lender may make a single additional disbursement of the increased loan proceeds prior to submission of the initial SBA Form 1502 report for that loan."
        },
        {
            "id": 10,
            "vocab": "EIDL Advance",
            "content": "As part of their loan application, an EIDL Advance of up to $10,000.  The EIDL Advance is designed to provide emergency economic relief to businesses that are currently experiencing a temporary loss of revenue.  This advance will not have to be repaid, and small businesses may receive an Advance even if they are not approved for a loan."
        },
        {
            "id": 11,
            "vocab": "EIDL Advance Deduction To SBA Funding",
            "content": "If applicable, SBA will deduct EIDL Advance Amounts from the forgiveness amount remitted to the Lender as required by section 1110(e)(6) of the CARES Act."
        },
        {
            "id": 12,
            "vocab": "Eligible Payroll Costs",
            "content": "Payroll costs consist of compensation to employees (whose principal place of residence is the United States) in the form of salary, wages, commissions, or similar compensation; cash tips or the equivalent (based on employer records of past tips or, in the absence of such records, a reasonable, good-faith employer estimate of such tips); payment for vacation, parental, family, medical, or sick leave; allowance for separation or dismissal; payment for the provision of employee benefits consisting of group health care coverage, including insurance premiums, and retirement; payment of state and local taxes assessed on compensation of employees; and for an independent contractor or sole proprietor, wages, commissions, income, or net earnings from self-employment, or similar compensation."
        },
        {
            "id": 13,
            "vocab": "Fishing Boat Crew as Partnership",
            "content": "If the fishing boat on which he or she works has an operating crew that is normally made up of fewer than 10 individuals and the crewmember receives as compensation for his or her work a share of the boat’s catch or of the proceeds from the sale of the catch in an amount that depends on the amount of the catch, the self-employment income of the general active partners of a partnership could be reported as a payroll cost, up to $100,000 annualized, on a PPP loan application filed by or on behalf of the partnership. (In other words, the crew are treated as General Partners and not 1099 Independent Contractors)."
        },
        {
            "id": 14,
            "vocab": "FTE",
            "content": "Full-time equivalent employee means an employee who works 40 hours or more, on average, each week. The hours of employees who work less than 40 hours are calculated as proportions of a single full-time equivalent employee and aggregated."
        },
        {
            "id": 15,
            "vocab": "FTE Calculation Methods",
            "content": "Borrowers seeking forgiveness must document their average number of FTE employees during the covered period (or the alternative payroll covered period) and their selected reference period. For purposes of this calculation, borrowers must divide the average number of hours paid for each employee per week by 40, capping this quotient at 1.0. For example, an employee who was paid 48 hours per week during the covered period would be considered to be an FTE employee of 1.0. For employees who were paid for less than 40 hours per week, borrowers may choose to calculate the full-time equivalency in one of two ways. First, the borrower may calculate the average number of hours a part-time employee was paid per week during the covered period. For example, if an employee was paid for 30 hours per week on average during the covered period, the employee could be considered to be an FTE employee of 0.75. Similarly, if an employee was paid for ten hours per week on average during the covered period, the employee could be considered to be an FTE employee of 0.25. Second, for administrative convenience, borrowers may elect to use a full-time equivalency of 0.5 for each part-time employee. The Administrator recognizes that not all borrowers maintain hours-worked data, and has decided to afford such borrowers this flexibility in calculating the full-time equivalency of their part-time employees. Borrowers may select only one of these two methods, and must apply that method consistently to all of their parttime employees for the covered period or the alternative payroll covered period and the selected reference period. In either case, the borrower shall provide the aggregate total of FTE employees for both the selected reference period and the covered period or the alternative payroll covered period, by adding together all of the employee-level FTE employee calculations. The borrower must then divide the average FTE employees during the covered period or the alternative payroll covered period by the average FTE employees during the selected reference period, resulting in the reduction quotient."
        },
        {
            "id": 16,
            "vocab": "FTE Reduction Exceptions (1-3)",
            "content": "(1) any positions for which the Borrower made a good-faith, written offer to rehire an individual who was an employee on February 15, 2020 and the Borrower was unable to hire similarly qualified employees for unfilled positions on or before December 31, 2020; (2) any positions for which the Borrower made a good-faith, written offer to restore any reduction in hours, at the same salary or wages, during the Covered Period or the Alternative Covered Period and the employee rejected the offer, and (3) any employees who during the Covered Period or the Alternative Payroll Covered Period (a) were fired for cause, (b) voluntarily resigned, or (c) voluntarily requested and received a reduction of their hours. In all of these cases, include these FTEs on this line only if the position was not filled by a new employee. Any FTE reductions in these cases do not reduce the Borrower’s loan forgiveness."
        },
        {
            "id": 17,
            "vocab": "FTE Reduction Reference Period",
            "content": "In general, a reduction in FTE employees during the covered period or the alternative payroll covered period reduces the loan forgiveness amount by the same percentage as the percentage reduction in FTE employees. The borrower must first select a reference period: (i) February 15, 2019 through June 30, 2019; (ii) January 1, 2020 through February 29, 2020; or (iii) in the case of a seasonal employer, either of the two preceding methods or a consecutive 12-week period between May 1, 2019 and September 15, 2019."
        },
        {
            "id": 18,
            "vocab": "FTE Reduction Safe Harbor 1",
            "content": "The Borrower is exempt from the reduction in loan forgiveness based on a reduction in FTE employees if the Borrower, in good faith, is able to document that it was unable to operate between February 15, 2020, and the end of the Covered Period at the same level of business activity as before February 15, 2020, due to compliance with requirements established or guidance issued between March 1, 2020 and December 31, 2020, by the Secretary of Health and Human Services, the Director of the Centers for Disease Control and Prevention, or the Occupational Safety and Health Administration, related to the maintenance of standards for sanitation, social distancing, or any other worker or customer safety requirement related to COVID-19."
        },
        {
            "id": 19,
            "vocab": "FTE Reduction Safe Harbor 2",
            "content": "The Borrower is exempt from the reduction in loan forgiveness based on a reduction in FTE employees if both of the following conditions are met: (a) the Borrower reduced its FTE employee levels in the period beginning February 15, 2020, and ending April 26, 2020; and (b) the Borrower then restored its FTE employee levels by not later than December 31, 2020 to its FTE employee levels in the Borrower’s pay period that included February 15, 2020."
        },
        {
            "id": 20,
            "vocab": "FTE Reductions To Loan Forgiveness Amount",
            "content": "Section 1106(d)(2) of the CARES Act reduces the amount of the PPP loan that may be forgiven if the borrower reduces full-time equivalent employees during the covered period as compared to a base period selected by the borrower. If the average number of FTE employees during the covered period or the alternative payroll covered period is less than during the reference period, the total eligible expenses available for forgiveness is reduced proportionally by the percentage reduction in FTE employees. For example, if a borrower had 10.0 FTE employees during the reference period and this declined to 8.0 FTE employees during the covered period, the percentage of FTE employees declined by 20 percent and thus only 80 percent of otherwise eligible expenses are available for forgiveness. This formula implements section 1106(d)(2) of the CARES Act, which expressly requires that the loan forgiveness amount be reduced by the amount resulting from multiplying the amount that the borrower would otherwise receive by the quotient of the average FTE employees in the covered period divided by the average FTE employees in the relevant reference period."
        },
        {
            "id": 21,
            "vocab": "Gaming Business PPP Loan Eligibility 50% Rule",
            "content": "A business that is otherwise eligible for a PPP Loan is not rendered ineligible due to its receipt of legal gaming revenues if the existing standard in 13 CFR 120.110(g) is met or the following two conditions are satisfied: (a) The business’s legal gaming revenue (net of payouts but not other expenses) did not exceed $1 million in 2019; and (b) legal gaming revenue (net of payouts but not other expenses) comprised less than 50 percent of the business’s total revenue in 2019. Businesses that received illegal gaming revenue are categorically ineligible."
        },
        {
            "id": 22,
            "vocab": "Gaming Revenue PPP Loan Eligibility",
            "content": "A business that is otherwise eligible for a PPP Loan is not rendered ineligible due to its receipt of legal gaming revenues, and 13 CFR 120.110(g) is inapplicable to PPP loans. Businesses that received illegal gaming revenue remain categorically ineligible."
        },
        {
            "id": 23,
            "vocab": "General Partners Self-Employment Cap",
            "content": "General partners are capped by the amount of their 2019 net earnings from self-employment (reduced by claimed section 179 expense deduction, unreimbursed partnership expenses, and depletion from oil and gas properties) multiplied by 0.9235."
        },
        {
            "id": 24,
            "vocab": "Hedge Fund or Private Equity Firm Eligibility",
            "content": "Hedge funds and private equity firms are primarily engaged in investment or speculation, and such businesses are therefore ineligible to receive a PPP loan."
        },
        {
            "id": 25,
            "vocab": "IRS Form 941",
            "content": "This form is submitted quarterly by employers to report employee compensation in the aggregate."
        },
        {
            "id": 26,
            "vocab": "IRS Schedule C",
            "content": "This is the form that independent contractors and sole proprietorships use to report income to the IRS."
        },
        {
            "id": 27,
            "vocab": "IRS Schedule F",
            "content": "This is the form that farmers use to report business income to the IRS."
        },
        {
            "id": 28,
            "vocab": "Lender Approval Packet For SBA",
            "content": "When the lender issues its decision to SBA approving the application (in whole or in part), it must include (1) the PPP Loan Forgiveness Calculation Form; (2) PPP Schedule A; and (3) the (optional) PPP Borrower Demographic Information Form (if submitted to the lender). The lender must confirm that the information provided by the lender to the SBA accurately reflects lender’s records for the loan, and that the lender has made its decision in accordance with the requirements set forth in 2.a."
        },
        {
            "id": 29,
            "vocab": "Lender Disapproval Packet For SBA",
            "content": "When the lender issues its decision to SBA determining that the borrower is not entitled to forgiveness in any amount, the lender must provide SBA with the reason for its denial, together with (1) the PPP Loan Forgiveness Calculation Form; (2) PPP Schedule A; and (3) the (optional) PPP Borrower Demographic Information Form (if submitted to the lender). The lender must confirm that the information provided by the lender to SBA accurately reflects lender’s records for the loan, and that the lender has made its decision in accordance with the requirements set forth in 2.a. The lender must also notify the borrower in writing that the lender has issued a decision to SBA denying the loan forgiveness application."
        },
        {
            "id": 30,
            "vocab": "Lender Duties When Notified of SBA Review",
            "content": "Within five business days of receipt of such notice, the lender shall transmit to SBA electronic copies of the following: i. The Borrower Application Form (SBA Form 2483 or lender’s equivalent form) and all supporting documentation provided by the borrower. ii. The Loan Forgiveness Application (SBA Form 3508 or lender’s equivalent form), and all supporting documentation provided by the borrower (if the lender has received such application). If the lender receives such application after it receives notice that SBA has commenced a loan review, the lender shall transmit electronic copies of the application and all supporting documentation provided by the borrower to SBA within five business days of receipt. The lender must also request that the borrower provide the lender with a copy of the Schedule A Worksheet to the Loan Forgiveness Application, and the lender must submit the worksheet to SBA within 5 business days of receipt from the borrower. iii. A signed and certified transcript of account. iv. A copy of the executed note evidencing the PPP loan. v. Any other documents related to the loan requested by SBA. If SBA has notified the lender that SBA has commenced a loan review, the lender shall not approve any application for loan forgiveness for such loan until SBA notifies the lender in writing that SBA has completed its review."
        },
        {
            "id": 31,
            "vocab": "Lender Forgiveness Review Duties",
            "content": "For all PPP Loan Forgiveness Applications, each lender shall: i. Confirm receipt of the borrower certifications contained in the Loan Forgiveness Application Form. ii. Confirm receipt of the documentation borrowers must submit to aid in verifying payroll and nonpayroll costs, as specified in the instructions to the Loan Forgiveness Application Form. iii. Confirm the borrower’s calculations on the borrower’s Loan Forgiveness Application, including the dollar amount of the (A) Cash Compensation, Non-Cash Compensation, and Compensation to Owners claimed on Lines 1, 4, 6, 7, 8, and 9 on PPP Schedule A and (B) Business Mortgage Interest Payments, Business Rent or Lease Payments, and Business Utility Payments claimed on Lines 2, 3, and 4 on the PPP Loan Forgiveness Calculation Form, by reviewing the documentation submitted with the Loan Forgiveness Application. iv. Confirm that the borrower made the calculation on Line 10 of the Loan Forgiveness Calculation Form correctly, by dividing the borrower’s Eligible Payroll Costs claimed on Line 1 by 0.6."
        },
        {
            "id": 32,
            "vocab": "Lender Forgiveness Review Packet To SBA",
            "content": "SBA may begin a review of any PPP loan of any size at any time at SBA’s discretion. If the SBA undertakes such a review, the SBA will notify the lender in writing and the lender must notify the borrower in writing within five business days of receipt. Within five business days of receipt of such notice, the lender shall transmit to SBA electronic copies of the following: i. The Borrower Application Form (SBA Form 2483 or lender’s equivalent form) and all supporting documentation provided by the borrower. ii. The Loan Forgiveness Application (SBA Form 3508 or lender’s equivalent form), and all supporting documentation provided by the borrower (if the lender has received such application). If the lender receives such application after it receives notice that SBA has commenced a loan review, the lender shall transmit electronic copies of the application and all supporting documentation provided by the borrower to SBA within five business days of receipt. The lender must also request that the borrower provide the lender with a copy of the Schedule A Worksheet to the Loan Forgiveness Application, and the lender must submit the worksheet to the SBA within 5 business days of receipt from the borrower. iii. A signed and certified transcript of account (loan). iv. A copy of the executed note evidencing the PPP loan. v. Any other documents related to the loan requested by SBA. If SBA has notified the lender that SBA has commenced a loan review, the lender shall not approve any application for loan forgiveness for such loan until SBA notifies the lender in writing that SBA has completed its review."
        },
        {
            "id": 33,
            "vocab": "Lender Statutory Review Period",
            "content": "The lender must issue a decision to SBA on a loan forgiveness application not later than 60 days after receipt of a complete loan forgiveness application from the borrower. That decision may take the form of an approval (in whole or in part); denial; or (if directed by SBA) a denial without prejudice due to a pending SBA review of the loan for which forgiveness is sought. In the case of a denial without prejudice, the borrower may subsequently request that the lender reconsider its application for loan forgiveness, unless SBA has determined that the borrower is ineligible for a PPP loan."
        },
        {
            "id": 34,
            "vocab": "LLC",
            "content": "Stands for Limited Liability Company.  This is an entity charted by states that limits the liability of the owners - also known as members.  A single member LLC will file taxes as if a sole proprietorship or independent contractor.  Multi-member LLCs can file as a partnership or a corporation."
        },
        {
            "id": 35,
            "vocab": "Loan Payment Deferral Period",
            "content": "Original: Borrower will not have to make any payments for six months following the date of disbursement of the loan. However, interest will continue to accrue on PPP loans during this sixmonth deferment. The Act authorizes the Administrator to defer loan payments for up to one year. The Administrator determined, in consultation with the Secretary, that a six-month deferment period is appropriate in light of the modest interest rate (one percent) on PPP loans and the loan forgiveness provisions contained in the Act. Later Modified to: If the borrower does not apply for loan forgiveness within 10 months after the last day of the covered period, or if SBA determines that the loan is not eligible for forgiveness (in whole or in part), the PPP loan is no longer deferred and the borrower must begin paying principal and interest. If this occurs, the lender must notify the borrower of the date the first payment is due. The lender must report that the loan is no longer deferred to SBA on the next monthly SBA Form 1502 report filed by the lender."
        },
        {
            "id": 36,
            "vocab": "NAICS Code Designations",
            "content": "Stands for North American Industry Classification System Codes.  It is used by the SBA to establish different Small Business Size Standards for each class of business.Please see the document titled \"US SBA Table of Small Business Size Standards Matched To NAICS Codes."
        },
        {
            "id": 37,
            "vocab": "Non-Eligble Payroll Costs",
            "content": "The Act expressly excludes the following: i. Any compensation of an employee whose principal place of residence is outside of the United States; ii. The compensation of an individual employee in excess of an annual salary of $100,000, prorated as necessary; iii. Federal employment taxes imposed or withheld between February 15, 2020 and June 30, 2020, including the employee’s and employer’s share of FICA (Federal Insurance Contributions Act) and Railroad Retirement Act taxes, and income taxes required to be withheld from employees; and iv. Qualified sick and family leave wages for which a credit is allowed under sections 7001 and 7003 of the Families First Coronavirus Response Act (Pub. L. 116–127)."
        },
        {
            "id": 38,
            "vocab": "Owner-Employee",
            "content": "This is someone that owns stock in the corporation or a membership interest in the LLC  that employs them. Any Employee with an interest equal to or greater than 5% of the outstanding stock or equal to or greater than a 5% membership interest in an LLC that files income taxes as a Corp. is considered an Owner-Employee is subject to a loan forgiveness cap."
        },
        {
            "id": 39,
            "vocab": "Owner-Employee Compensation Cap",
            "content": "For borrowers that received a PPP loan before June 5, 2020 and elect to use an eight-week covered period, the amount of Loan forgiveness requested for owner employees and self-employed individuals’ payroll compensation is capped at eight weeks’ worth (8/52) of 2019 compensation (i.e., approximately 15.38 percent of 2019 compensation) or $15,385 per individual, whichever is less, in total across all businesses. For all other borrowers, the amount of loan forgiveness requested for owner-employees and self-employed individuals’ payroll compensation is capped at 2.5 months’ worth (2.5/12) of 2019 compensation (i.e., approximately 20.83 percent of 2019 compensation) or $20,833 per individual, whichever is less, in total across all businesses."
        },
        {
            "id": 40,
            "vocab": "Paid Non-Payroll Costs",
            "content": "A nonpayroll cost is eligible for forgiveness if it was: i. Paid during the covered period; or ii. incurred during the covered period and paid on or before the next regular billing date, even if the billing date is after the covered period."
        },
        {
            "id": 41,
            "vocab": "Paid Payroll Costs",
            "content": "Payroll costs are considered paid on the day that paychecks are distributed or the borrower originates an ACH credit transaction. Payroll costs incurred during the borrower’s last pay period of the covered period or the alternative payroll covered period are eligible for forgiveness if paid on or before the next regular payroll date; otherwise, payroll costs must be paid during the covered period (or alternative payroll covered period) to be eligible for forgiveness. Payroll costs are generally incurred on the day the employee’s pay is earned (i.e., on the day the employee worked). For employees who are not performing work but are still on the borrower’s payroll, payroll costs are incurred based on the schedule established by the borrower (typically, each day that the employee would have performed work)."
        },
        {
            "id": 42,
            "vocab": "PPP Loan Amount Eligible For Forgiveness",
            "content": "The amount of loan forgiveness can be up to the full principal amount of the loan plus accrued interest. The actual amount of loan forgiveness will depend, in part, on the total amount spent over the 24-week period beginning on the date your PPP loan is disbursed (‘‘covered period’’) on: i. Payroll costs including salary, wages, and tips, up to $100,000 of annualized pay per employee (for 24 weeks, a maximum of $46,154 per individual, or for eight weeks, a maximum of $15,385 per individual), as well as covered benefits for employees (but not owners), including health care expenses, retirement contributions, and state taxes imposed on employee payroll paid by the employer (such as unemployment insurance premiums); ii. owner compensation replacement, calculated based on 2019 net profit as described in Paragraph 1.b. above, with forgiveness of such amounts limited to eight weeks’ worth (8/52) of 2019 net profit (up to $15,385) for an eight-week covered period or 2.5 months’ worth (2.5/12) of 2019 net profit (up to $20,833) for a 24-week covered period, but excluding any qualified sick leave equivalent amount for which a credit is claimed under section 7002 of the Families First Coronavirus Response Act (FFCRA) (Pub. L. 116–127) or qualified family leave equivalent amount for which a credit is claimed under section 7004 of FFCRA; iii. payments of interest on mortgage obligations on real or personal property incurred before February 15, 2020, to the extent they are deductible on Form 1040 Schedule C (business mortgage payments); iv. rent payments on lease agreements in force before February 15, 2020, to the extent they are deductible on Form 1040 Schedule (business rent payments); and v. utility payments under service agreements dated before February 15, 2020 to the extent they are deductible on Form 1040 Schedule C (business utility payments)."
        },
        {
            "id": 43,
            "vocab": "PPP Loan Approval",
            "content": "A loan is considered approved when the loan is assigned a loan number by the SBA."
        },
        {
            "id": 44,
            "vocab": "PPP Loan Disbursement Rule",
            "content": "The lender must make a one-time, full disbursement of the PPP loan within ten calendar days of loan approval; for the purposes of this rule, a loan is considered approved when the loan is assigned a loan number by SBA. For loans that received an SBA loan number prior to the posting of this interim final rule but have not yet been fully disbursed, the following transition rules apply: • The ten calendar-day period described above begins on April 28, 2020. • The eight-week covered period began on the date of first disbursement. Notwithstanding this limitation, lenders are not responsible for delays in disbursement attributable to a borrower’s failure to timely provide required loan documentation, including a signed promissory note. Loans for which funds have not been disbursed because a borrower has not submitted required loan documentation within 20 calendar days of loan approval shall be cancelled by the lender, subject to the transition rules above. When disbursing loans, lenders must send any amount of loan proceeds designated for the refinance of an EIDL loan directly to SBA and not to the borrower."
        },
        {
            "id": 45,
            "vocab": "PPP Loan Eligibility If In Bankruptcy",
            "content": "If the applicant or the owner of the applicant is the debtor in a bankruptcy proceeding, either at the time it submits the application or at any time before the loan is disbursed, the applicant is ineligible to receive a PPP loan. If the applicant or the owner of the applicant becomes the debtor in a bankruptcy proceeding after submitting a PPP application but before the loan is disbursed, it is the applicant’s obligation to notify the lender and request cancellation of the application. Failure by the applicant to do so will be regarded as a use of PPP funds for unauthorized purposes."
        },
        {
            "id": 46,
            "vocab": "PPP Loan Eligible Entities",
            "content": "Under the CARES Act, an entity is eligible for a PPP loan if it is (1) a small business concern, or (2) a business concern, nonprofit organization described in section 501(c)(3) of the Internal Revenue Code, veterans organization described in section 501(c)(19) of the Internal Revenue Code, or Tribal business concern described in section 31(b)(2)(C) of the Small Business Act that employs not more than the greater of 500 employees, or, if applicable, SBA’s employee-based size standard for the industry in which the entity operates. Under existing SBA regulations, an entity is generally considered together with its affiliates for purposes of determining the entity’s eligibility for SBA loans. As described above,\nthe generally applicable 500-employee size standard is subject to the application of SBA’s affiliation rules, as well as numerous other eligibility requirements (See, e.g., 13 CFR 120.110 (listing 18 types of ineligible businesses) including those listed on SBA Form 2483 (including mandatory applicant representations regarding defaults on previous government loans or guarantees, Federal suspension or debarment, and criminal backgrounds)."
        },
        {
            "id": 47,
            "vocab": "PPP Loan Forgiveness Submission Rule",
            "content": "A borrower may submit a loan forgiveness application any time on or before the maturity date of the loan—including before the end of the covered period—if the borrower has used all of the loan proceeds for which the borrower is requesting forgiveness. If the borrower applies for forgiveness before the end of the covered period and has reduced any employee’s salaries or wages in excess of 25 percent, the borrower must account for the excess salary reduction for the full 8-week or 24-week covered period."
        },
        {
            "id": 48,
            "vocab": "PPP Loan Increases For Partnerships",
            "content": "If a partnership received a PPP loan that only included amounts necessary for payroll costs of the partnership’s employees and other eligible operating expenses, but did not include any amount for partner compensation,2 the lender may electronically submit a request through SBA’s E-Tran Servicing site to increase the PPP loan amount to include appropriate partner compensation, even if the loan has been fully disbursed, provided that the lender’s first SBA Form 1502 report to SBA on the PPP loan has not been submitted. After the initial SBA Form 1502 report on the PPP loan has been submitted to SBA, or after the date the first SBA Form 1502 was required to be submitted to SBA, the loan cannot be increased."
        },
        {
            "id": 49,
            "vocab": "PPP Loan Increases For Seasonal Employers",
            "content": "If a seasonal employer received a PPP loan before the alternative criterion for such employers was posted on April 28, 2020, and would be eligible for a higher maximum loan amount under the alternative criterion, the lender may electronically submit a request through SBA’s E-Tran Servicing site to increase the PPP loan amount, even if the loan has been fully disbursed, provided that the lender’s first SBA Form 1502 report to SBA on the PPP loan has not been submitted. After the initial SBA Form 1502 report has been submitted to SBA, or after the date the initial SBA Form 1502 report was required to be submitted to SBA, the loan cannot be increased."
        },
        {
            "id": 50,
            "vocab": "PPP Loan Interest Rate",
            "content": "The interest rate will be 100 basis points or one percent."
        },
        {
            "id": 51,
            "vocab": "PPP Loan Lender Underwriting",
            "content": "Each lender shall: i. Confirm receipt of borrower certifications contained in Paycheck Protection Program Application form issued by the Administration; ii. Confirm receipt of information demonstrating that a borrower had employees for whom the borrower paid salaries and payroll taxes on or around February 15, 2020; iii. Confirm the dollar amount of average monthly payroll costs for the preceding calendar year by reviewing the payroll documentation submitted with the borrower’s application; and iv. Follow applicable SBA requirements. Each lender’s underwriting obligation under the PPP is limited to the items above and reviewing the ‘‘Paycheck Protection Application Form.’’ Borrowers must submit such documentation as is necessary to establish eligibility such as payroll processor records, payroll tax filings, or Form 1099–MISC, or income and expenses from a sole proprietorship. For borrowers that do not have any such documentation, the borrower must provide other supporting documentation, such as bank records, sufficient to demonstrate the qualifying payroll amount."
        },
        {
            "id": 52,
            "vocab": "PPP Loan Maximum Amount",
            "content": "Maximum loan amount allowed under the PPP Program is $10 million for an individual borrower or $20 million for a corporate group."
        },
        {
            "id": 53,
            "vocab": "PPP Loan Maxium Amount Calculation Method",
            "content": "The following methodology, which is one of the methodologies contained in the Act, will be most useful for many applicants. i. Step 1: Aggregate payroll costs (defined in detail below in f.) from the last twelve months for employees whose  principal place of residence is the United States. ii. Step 2: Subtract any compensation paid to an employee in excess of an annual salary of $100,000 and/or any amounts paid to an independent contractor or sole proprietor in excess of $100,000 per year. iii. Step 3: Calculate average monthly payroll costs (divide the amount from Step 2 by 12). iv. Step 4: Multiply the average monthly payroll costs from Step 3 by 2.5. v. Step 5: Add the outstanding amount of an Economic Injury Disaster Loan (EIDL) made between January 31, 2020 and April 3, 2020, less the amount of any ‘‘advance’’ under an EIDL COVID–19 loan (because it does not have to be repaid)."
        },
        {
            "id": 54,
            "vocab": "PPP Loan Need Certification Safe Harbor",
            "content": "The Borrower Application Form requires PPP applicants to certify that ‘‘current economic uncertainty makes this loan request necessary to support the ongoing operations of the Applicant.’’ Any borrower that applied for a PPP loan prior to the issuance of this regulation and repays the loan in full by\nMay 7, 2020 will be deemed by SBA to have made the required certification in good faith."
        },
        {
            "id": 55,
            "vocab": "PPP Loan Program",
            "content": "Among the provisions contained in the CARES Act are provisions authorizing SBA to temporarily guarantee loans under a new 7(a) loan program titled the ‘‘Paycheck Protection Program.’’ Loans guaranteed under the Paycheck Protection Program (PPP) will be 100 percent guaranteed by SBA, and the full principal amount of the loans may qualify for loan forgiveness."
        },
        {
            "id": 56,
            "vocab": "PPP Loan Term",
            "content": "PPP loan term is two years for PPP loans made before June 5, 2020 unless the borrower and lender mutually agree to extend the maturity of such loans to five years, or PPP’s maturity of five years for PPP loans made on or after June 5. The Act provides that a loan will have a maximum maturity of up to ten years from the date the borrower applies for loan forgiveness, however, the actual term is at the discretion of the Administrator, in consultation with the Secretary."
        },
        {
            "id": 57,
            "vocab": "Safe Harbor",
            "content": "This originated a mariner term that refers to a safe place for ships to weather the  storm. Later adopted by financial wizards to mean to describe the conditions under which you will not suffer harm or penalties."
        },
        {
            "id": 58,
            "vocab": "Salary Reduction Reference Period",
            "content": "This is the period from January 1 2020 to March 31, 2020.  The average hourly wage or weekly salary earned by each employee during this period is used as the basis for comparison in calculating any reduction in wages."
        },
        {
            "id": 59,
            "vocab": "SBA Covid 19 EIDL",
            "content": "The COVID 19 EIDL is low interest federal disaster loan for working capital to small businesses and non-profit organizations that are suffering substantial economic injury as a result of COVID-19. These loans may be used to pay debts, payroll, accounts payable and other bills that cannot be paid because of the disaster’s impact, and that are not already covered by a Paycheck Protection Program loan.  The interest rate is 3.75% for small businesses.  The interest rate for non-profits is 2.75%."
        },
        {
            "id": 60,
            "vocab": "SBA EIDL",
            "content": "the Economic Injury Disaster Loan is a long-standing SBA loan program made available to those affected by declared natural disasters."
        },
        {
            "id": 61,
            "vocab": "SBA Form 1502",
            "content": "SBA will make available a specific SBA Form 1502 reporting process through which PPP lenders will report on PPP loans and collect the processing fee on fully disbursed loans to which they are entitled."
        },
        {
            "id": 62,
            "vocab": "SBA Form 1502 Reporting Requirement",
            "content": "Lenders must electronically upload SBA Form 1502 reporting information by the later of: (1) May 29, 2020, or (2) 10 calendar days after disbursement or cancellation of a PPP loan."
        },
        {
            "id": 63,
            "vocab": "SBA Form 2483",
            "content": "This is the PPP Loan application form."
        },
        {
            "id": 64,
            "vocab": "SBA Form 3508",
            "content": "This is the application form used for the forgiveness of the PPP Loan that is used if the borrower reduced pay or working hours during the Covered Period."
        },
        {
            "id": 65,
            "vocab": "SBA Form 3508 EZ",
            "content": "This is the application form used for the forgiveness of the PPP Loan that is used if the borrower either has no employees or has employees but did not reduce pay or working hours during the Covered Period."
        },
        {
            "id": 66,
            "vocab": "SBA Statutory Forgiveness Funding Period",
            "content": "SBA will, subject to any SBA review of the loan or loan application, remit the appropriate forgiveness amount to the lender, plus any interest accrued through the date of payment, not later than 90 days after the lender issues its decision to SBA."
        },
        {
            "id": 67,
            "vocab": "SBA Statutory Forgiveness Review Period",
            "content": "Enabling SBA to use the statutory 90-day period to review the PPP loan and forgiveness documentation is an appropriate procedural protection to prevent fraud or misuse of PPP funds, ensure that recipients of PPP loans are within the scope of entities that the CARES Act is intended to assist, and confirm compliance with the PPP requirements set forth in the statute, rules, and guidance. This protection is also important in light of the large number and diverse types of PPP lenders, many of which were not previously SBA participating lenders and which were approved rapidly in order to enable financial assistance to be provided as rapidly as feasible to millions of small businesses. SBA will use the 90-day period to help ensure that applicable legal requirements have been satisfied."
        },
        {
            "id": 68,
            "vocab": "S-Corp",
            "content": "This is a IRS designation made available to corporations (and LLCs) with few stockholders (aka closely held) that exempts it from paying taxes at the corporate level.  The income tax is paid by the owner-stockholders directly based on their share of the profits."
        },
        {
            "id": 69,
            "vocab": "S-Corp Owner-Employee Cap",
            "content": "S-corporation owner-employees are capped by the amount of their 2019 employee cash compensation and employer retirement contributions made on their behalf, but employer health insurance contributions made on their behalf cannot be separately added because those payments are already included in their employee cash compensation."
        },
        {
            "id": 70,
            "vocab": "Seasonal Business PPP Loan Eligibility",
            "content": "In evaluating eligibility, a seasonal business will be considered to have been in operation as of February 15, 2020, if the business was in operation for any 8-week period between May 1, 2019 and September 15, 2019."
        },
        {
            "id": 71,
            "vocab": "Self-employment Forgiveness Cap",
            "content": "For borrowers that received a PPP loan before June 5, 2020 and elect to use an eight-week covered period, the amount of loan forgiveness requested for owner/employees and self-employed individuals’ payroll compensation is capped at eight weeks’ worth (8/52) of 2019 compensation (i.e., approximately 15.38 percent of 2019 compensation) or $15,385 per individual, whichever is less, in total across all businesses. For all other borrowers, the amount of loan forgiveness requested for owner-employees and self-employed individuals’ payroll compensation is capped at 2.5 months’ worth (2.5/12) of 2019 compensation (i.e., approximately 20.83 percent of 2019 compensation) or $20,833 per individual, whichever is less, in total across all businesses."
        },
        {
            "id": 72,
            "vocab": "Self-Employment Income",
            "content": "Income derived from a trade or business that you run as an independent contractor, sole proprietor or as a General partner."
        },
        {
            "id": 73,
            "vocab": "State/Local Government Hospital Eligibility",
            "content": "A hospital that is otherwise eligible to receive a PPP loan as a business concern or nonprofit organization (described in section 501(c)(3) of the Internal Revenue Code of 1986 and exempt from taxation under section 501(a) of such Code) shall not be rendered ineligible for a PPP loan due to ownership by a state or local government if the hospital receives less than 50% of its funding from state or local government sources, exclusive of Medicaid."
        },
        {
            "id": 74,
            "vocab": "Unauthorized Use of PPP Loan Funds",
            "content": "If you use PPP funds for unauthorized purposes, SBA will direct you to repay those amounts. If you knowingly use the funds for unauthorized purposes, you will be subject to additional liability such as charges for fraud. If one of your shareholders, members, or partners uses PPP funds for unauthorized purposes, SBA will have recourse against the shareholder, member, or partner for the unauthorized use."
        },
        {
            "id": 75,
            "vocab": "Wage Reduction Safe Harbor 1",
            "content": "If certain employee salaries and wages were reduced between February 15, 2020 and April 26, 2020 (the safe harbor period) but the borrower eliminates those reductions by December 31,2020 or earlier, the borrower is exempt from any reduction in loan forgiveness amount."
        },
        {
            "id": 76,
            "vocab": "Wage Reduction Test",
            "content": "Under section 1106(d)(3) of the CARES Act, a reduction in an employee’s salary or wages in excess of 25 percent will generally result in a reduction in the loan forgiveness amount, unless an exception applies. Specifically, for each new employee in 2020 and each existing employee who was not paid more than the annualized equivalent of $100,000 in any pay period in 2019, the borrower must reduce the total forgiveness amount by the total dollar amount of the salary or wage reductions that are in excess of 25 percent of base salary or wages between January 1, 2020 and March 31, 2020 (the Reference Period), subject to exceptions for borrowers who restore reduced wages or salaries (see g. below). This reduction calculation is performed on a per employee basis, not in the aggregate."
        }
    ]

export default data;