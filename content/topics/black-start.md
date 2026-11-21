---
id: black-start
name: Black Start Service
aliases: [Black Start, BSS, Black Start Service, Black Start Resource, black start back-up fuel]
kind: product
domain: reliability
level: 2
lenses: [analyst, portfolio]
as_of: 2026-11-21
depth: deep
links:
  - to: ancillary-services
    type: is-a
    note: The protocols define Black Start Service as an Ancillary Service. [e1]
  - to: qse
    type: related
    note: Black Start Agreements are with QSEs, and the standby fee is paid to the QSE representing the Black Start Resource. [e3][e7]
  - to: load-ratio-share
    type: related
    note: The total Black Start capacity payment is allocated to QSEs representing Loads by load ratio share. [e8]
  - to: ers
    type: contrasts-with
    note: ERS is an emergency service that is not an Ancillary Service, while Black Start is defined as one. [e1][e14]
  - to: eea
    type: related
    note: A Black Start Resource may use its contracted back-up fuel outside of black start if ERCOT determines it is necessary during an EEA event. [e12]
  - to: uplift
    type: related
    note: The IMM lists Black Start Service Settlement among the items it counts as uplift. [e10]
  - to: cop
    type: related
    note: During a Black Start Resource Availability Test the QSE shows the Resource as ONTEST in its COP and telemetry. [e32]
  - to: nerc
    type: related
    note: Each Generation Resource providing BSS must meet NERC Reliability Standards and the Operating Guides. [e44]
evidence:
  - id: e1
    source: np-02
    locator: "Section 2.1, definition of Black Start Service (BSS)"
    quote: "An Ancillary Service provided by a Resource able to start without support of the ERCOT Transmission Grid."
  - id: e2
    source: np-02
    locator: "Section 2.1, definition of Blackout"
    quote: "A condition in which frequency for the entire ERCOT System has dropped to zero and Generation Resources and Energy Storage Resources (ESRs) are no longer serving Load."
  - id: e3
    source: np-06
    locator: "Section 6.5.9.6, Black Start, paragraph (1)"
    quote: "Black Start Service (BSS) is obtained by ERCOT through Black Start Agreements with QSEs for Generation Resources capable of self-starting or Generation Resources within close proximity of a non-ERCOT Control Area that are capable of starting from that non-ERCOT Control Area under a firm standby power supply contract, without support from the ERCOT System, or transmission equipment in the ERCOT System."
  - id: e4
    source: np-06
    locator: "Section 6.5.9.6, paragraph (2)"
    quote: "ERCOT may Dispatch BSS pursuant to an emergency restoration plan to begin restoration of the ERCOT System to a secure operating state after a Blackout."
  - id: e5
    source: np-03
    locator: "Section 3.14.2, paragraph (3)"
    quote: "ERCOT shall ensure BSSs are arranged, provided, and deployed as necessary to reenergize the ERCOT System following a Blackout or Partial Blackout."
  - id: e6
    source: np-03
    locator: "Section 3.14.2, paragraph (3)"
    quote: "Bids for BSS are due on or before February 15^(th) of each three-year period."
  - id: e7
    source: np-06
    locator: "Section 6.6.8.1, Black Start Hourly Standby Fee Payment, paragraph (1)"
    quote: "ERCOT shall pay an Hourly Standby Fee to the QSEs representing a Black Start Resource. This standby fee is determined through a competitive bi-annual bidding process, with an adjustment for reliability based on a six-month rolling availability equal to 85% in accordance with Section 22, Attachment D, Standard Form Black Start Agreement."
  - id: e8
    source: np-06
    locator: "Section 6.6.8.2, Black Start Capacity Charge, paragraph (1)"
    quote: "ERCOT shall allocate the total Black Start Service Capacity payment to the QSEs representing Loads based on a LRS."
  - id: e9
    source: np-03
    locator: "Section 3.14.2, paragraphs (10) and (11)"
    quote: "Each Generation Resource selected to provide BSS shall be able to utilize BSS Back-up Fuel for BSS and shall maintain a contracted amount of BSS Back-up Fuel to run the Black Start Resource for a minimum of 72 hours at its maximum output."
  - id: e10
    source: imm-som-2025
    locator: "Executive summary, footnote defining uplift"
    quote: "For this analysis “uplift” includes: Reliability Adder Imbalance Settlement, ORDC Adder Imbalance Settlement, Revenue Neutrality Allocation, Emergency Energy Charges, Base Point Deviation Payments, ERS Settlement, Black Start Service Settlement, Block Load Transfer Settlement, Firm Fuel Service Settlement, High Dispatch Limit Override Settlement, RMR Settlement, RUC Settlement, Voltage Services Settlement, and the ERCOT System Administrative Fee."
  - id: e12
    source: np-03
    locator: "Section 3.14.2, paragraph (11)"
    quote: "A Black Start Resource may utilize the contracted amount of BSS Back-up Fuel outside of BSS if ERCOT determines it is necessary during an Energy Emergency Alert (EEA) event."
  - id: e13
    source: np-03
    locator: "Section 3.14.2, paragraph (13)"
    quote: "ERCOT may, at its discretion, waive the BSS Back-up Fuel requirement stated in this Section, in whole or in part, if ERCOT deems necessary in order to procure a sufficient number or preferred combination of Generation Resources to provide BSS."
  - id: e11
    source: np-03
    locator: "Section 3.14.2, paragraphs (4) and (5)"
    quote: "ERCOT may schedule unannounced Black Start testing, to verify that BSS is operable as specified in Section 8.1.1.2.1.5."
  - id: e14
    source: np-02
    locator: "Section 2.1, definition of Emergency Response Service (ERS)"
    quote: "ERS is not an Ancillary Service."
  - id: e15
    source: np-03
    locator: "Section 3.14.2, paragraph (10)"
    quote: "This requirement does not apply to Resources that do not rely on purchased fuel."
  - id: e16
    source: np-03
    locator: "Section 3.14.2, Black Start, paragraph (3)"
    quote: "Bids must be evaluated based on evaluation criteria attached as an appendix to the request for bids and contracted by December 31^(st) for the following three-year period."
  - id: e17
    source: np-03
    locator: "Section 3.14.2, paragraph (3)(b)"
    quote: "BSS bids shall include the hourly stand-by price and the BSS Back-up Fuel costs where applicable."
  - id: e18
    source: np-03
    locator: "Section 3.14.2, paragraph (3)(a)"
    quote: "Resources shall disclose any weather-related limitations that could affect the Resource’s ability to provide BSS using the form provided in Section 22, Attachment M, Generation Resource Disclosure Regarding Bids for Black Start Service, as part of a bid to provide BSS."
  - id: e19
    source: np-03
    locator: "Section 3.14.2, paragraph (5)"
    quote: "QSEs representing Generation Resources contracting for BSSs shall participate in training and restoration drills coordinated by ERCOT."
  - id: e20
    source: np-03
    locator: "Section 3.14.2, paragraph (7)"
    quote: "A Resource Entity representing a Black Start Resource may request that an alternate Generation Resource which is connected to the same black start primary and secondary cranking path as the original Black Start Resource be substituted in place of the original Black Start Resource during the three-year term of an executed Standard Form Black Start Agreement (Section 22, Attachment D, Standard Form Black Start Agreement) if the alternate Generation Resource meets testing and verification under established qualification criteria to ensure BSS."
  - id: e21
    source: np-03
    locator: "Section 3.14.2, paragraph (7)(a)"
    quote: "ERCOT, in its sole discretion, may reject a Resource Entity’s request for an alternate Generation Resource and will provide the Resource Entity an explanation of such rejection."
  - id: e22
    source: np-03
    locator: "Section 3.14.2, paragraph (8)"
    quote: "For the purpose of the Black Start Hourly Standby Fee as described in Section 6.6.8.1, Black Start Hourly Standby Fee Payment, the BSS Availability Reduction Factor shall be determined by using the availability for the original Black Start Resource and any substituted Black Start Resource(s), as appropriate for the rolling 4380-hour period of the evaluation."
  - id: e23
    source: np-03
    locator: "Section 3.14.2, paragraph (12)"
    quote: "A Black Start Resource is not obligated to contract its full on site fuel storage capability for BSS Back-up Fuel."
  - id: e24
    source: np-03
    locator: "Section 3.14.2, paragraph (14)(a)"
    quote: "Shall not nominate the SWGR to satisfy supply adequacy or capacity planning requirements in any Control Area other than the ERCOT Region during the term of the BSS contract;"
  - id: e25
    source: np-08
    locator: "Section 8.1.1.2.1.5, System Black Start Capability Qualification and Testing, paragraph (1)(c) to (f)"
    quote: "Passed the “Basic Starting Test” as defined below; (d) Passed the “Line-Energizing Test” as defined below; (e) Passed the “Load-Carrying Test” as defined below; (f) Passed the “Next Start Resource Test” as defined below;"
  - id: e26
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (3)(a)(viii)"
    quote: "Each Black Start Resource must pass a Basic Starting Test once each calendar year."
  - id: e27
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (3)(b)(vii)"
    quote: "Each Black Start Resource must pass a Line-Energizing Test once every three years."
  - id: e28
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (3)(c)(vi)"
    quote: "Qualification under the Load-Carrying Test is valid for four calendar years."
  - id: e29
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (3)(d)(vii)"
    quote: "Each Black Start Resource must pass the Next Start Resource Test once every four calendar years."
  - id: e30
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (3)(f)"
    quote: "The BSS Back-up Fuel Switching Test will be conducted on odd numbered years and may, at ERCOT’s discretion, also be:"
  - id: e31
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (4)"
    quote: "Each qualified Black Start Resource shall perform a Black Start Resource Availability Test quarterly unless the Black Start Resource has successfully started and operated at LSL or higher for at least four consecutive Settlement Intervals during the quarter."
  - id: e32
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (6)"
    quote: "ERCOT shall provide the QSE representing the Black Start Resource two-hour notice in order to allow the QSE time to update its COP. The QSE representing the Black Start Resource shall show the Resource as “ONTEST” in its COP and through its Real-Time telemetry for the duration of the test."
  - id: e33
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (9)"
    quote: "If the Black Start Resource fails to successfully start during the Black Start Resource Availability Test, the QSE representing the Black Start Resource shall immediately update its Availability Plan for that Black Start Resource showing zero availability. The QSE representing the Black Start Resource shall not receive the Hourly Standby Fee for BSS effective from the date of the failed Black Start Resource Availability Test."
  - id: e34
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (11)"
    quote: "If the Black Start Resource fails a second Black Start Resource Availability Test within the quarter, it shall immediately be disqualified from providing BSS and shall receive no further compensation under the Black Start Service Agreement."
  - id: e35
    source: np-06
    locator: "Section 6.6.8.1, Black Start Hourly Standby Fee Payment, paragraph (3), formula"
    quote: "Otherwise BSSARF _(q, r) = Max (0, 1 - (0.85 - BSSHREAF _(q, r)) * 2)"
  - id: e36
    source: np-22d
    locator: "Section 22, Attachment D, Standard Form Black Start Agreement, Section 9(A)(3), Hourly Standby Fee table"
    quote: "If BSSHREAF is more than or equal to 85% Hourly Standby Price ($) If BSSHREAF is less than 85% but more than 35% Hourly Standby Price * [100%-(85%-BSSHREAF) * 2] ($) If BSSHREAF is equal to or less than 35% Zero"
  - id: e37
    source: np-22d
    locator: "Section 22, Attachment D, Section 9(A)(2), BSSHREAF definition"
    quote: "“Black Start Service Hourly Rolling Equivalent Availability Factor (BSSHREAF)” means, with respect to a given hour, the quotient (expressed as a percentage) of (a) the number of hours, including the given hour and the immediately preceding 4,379 hours, in which the Black Start Resource was Available, divided by (b) 4,380; provided that, to the extent that 4,379 hours have not elapsed since the Start Date (the difference between 4,379 and the hours that have elapsed being referred to herein as the “Assumed Hours”), the Black Start Resource shall be deemed, for purposes of this calculation, to be Available for the Assumed Hour unless the Black Start Resource has failed to perform in response to a blackout event or when a Dispatch Instruction to come On-Line has been issued."
  - id: e38
    source: np-22d
    locator: "Section 22, Attachment D, Section 3(A)(2), Term"
    quote: "The full term (“Full Term”) of this Agreement begins on the Start Date and continues for a period of three years."
  - id: e39
    source: np-22d
    locator: "Section 22, Attachment D, Section 7, Black Start Decertification"
    quote: "If a Black Start Resource does not remain certified, or if it is in default as described in Section 10(A)(2)(e) during the term of this Agreement, then the Hourly Standby Fee is reduced to zero for the remainder of the Full Term, and Participant will be required to refund to ERCOT certain amounts paid by ERCOT under this Agreement during the Full Term as described in the ERCOT Protocols."
  - id: e40
    source: np-22d
    locator: "Section 22, Attachment D, Section 8(D)(2), Delivery"
    quote: "If the ERCOT Transmission Grid at the Black Start Resource becomes deenergized and if Participant cannot communicate with either ERCOT or the Transmission Service Provider (TSP) and/or Distribution Service Provider (DSP) serving the Black Start Resource, then Participant shall follow the procedures specified for the Black Start Resource under ERCOT’s Black Start plan in the Operating Guides, but Participant shall not commence delivering electric energy into the ERCOT System without specific instructions to do so from either ERCOT or the TSP and/or DSP serving the Black Start Resource."
  - id: e41
    source: nog-04
    locator: "Section 4.6.3, Priorities, paragraph (1)(a) to (e)"
    quote: "Priorities for an ERCOT System Black Start recovery are listed below: (a) Secure and/or stabilize generating units where necessary. (b) Prepare Cranking Paths and Synchronization Corridors as necessary to support restoration. (c) Assess ERCOT System condition, and available communication facilities. (d) Restore and maintain communication facilities to the extent possible. (e) Bring units with contracted Black Start capability On-Line."
  - id: e43
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (1)(g)"
    quote: "Provided an attestation, in the form required by ERCOT, of Black Start Service (BSS) Back-up Fuel that will support the Resource for a minimum of 72 hours at maximum output, except to the extent ERCOT has waived this requirement;"
  - id: e44
    source: np-03
    locator: "Section 3.14.2, paragraph (1)"
    quote: "Each Generation Resource providing BSS must meet the requirements specified in North American Electric Reliability Corporation (NERC) Reliability Standards and the Operating Guides."
  - id: e45
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (3)(e)"
    quote: "Demonstrate a Black Start Resource’s ability to successfully switch to a BSS Back-up Fuel source;"
  - id: e46
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (2)"
    quote: "Except under extenuating circumstances, as reasonably determined by ERCOT, all qualification testing for the next year of BSS must be completed by June 1^(st) of each year."

  - id: e47
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (9), second test"
    quote: "The QSE representing the Black Start Resource may schedule a second Black Start Resource Availability Test, subject to ERCOT approval, to be completed within ten Business Days of the date of the failed Black Start Resource Availability Test unless a later date is agreed to by ERCOT."
  - id: e48
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (10)"
    quote: "If the Black Start Resource successfully passes the second Black Start Resource Availability Test, the QSE representing the Black Start Resource shall resume receipt of the Hourly Standby Fee beginning on the date of the successful Black Start Resource Availability Test."
  - id: e49
    source: np-08
    locator: "Section 8.1.1.2.1.5, paragraph (11), claw-back"
    quote: "In addition, ERCOT shall claw-back all Hourly Standby Fee payments made to the QSE representing the Black Start Resource since its last successful Black Start Resource Availability Test or its last successful start and operation under normal system conditions, whichever is later."
  - id: e50
    source: np-22d
    locator: "Section 22, Attachment D, Section 9(A)(1)(a), definition of Available"
    quote: "“Available” means, with respect to a given hour, that Participant has declared, in its Availability Plan, that the Black Start Resource is able to start without a connection to the ERCOT Transmission Grid."
  - id: e51
    source: np-22d
    locator: "Section 22, Attachment D, Section 9(A)(1)(b)(iii), when a Resource is not Available"
    quote: "The Black Start Resource has failed a Black Start Resource Availability Test, as described in the ERCOT Protocols or Operating Guides and has not passed a subsequent Black Start Resource Availability Test;"
  - id: e52
    source: np-06
    locator: "Section 6.6.8.1, paragraph (3), hourly payment"
    quote: "BSSAMT _(q, r) = (-1) * BSSPR _(q, r) * BSSARF _(q, r)"
  - id: e53
    source: np-06
    locator: "Section 6.6.8.1, paragraph (3), BSSHREAF"
    quote: "If (BSSEH _(q, r) < 4380) BSSHREAF _(q, r) = 1 Otherwise BSSHREAF _(q, r) = ([] BSSAFLAG _(q,r,hr)) / 4380"
  - id: e54
    source: np-06
    locator: "Section 6.6.8.1, paragraph (3), variable table, BSSEH"
    quote: "The number of the elapsed hours of BSS Resource r represented by QSE q since the beginning of the BSS Agreement, for the hour."
  - id: e55
    source: np-06
    locator: "Section 6.6.8.1, paragraph (3), variable table, 4380"
    quote: "The number of hours in a six-month period."
  - id: e56
    source: np-06
    locator: "Section 6.6.8.1, paragraph (3), BSSARF at or above 0.85"
    quote: "If (BSSHREAF _(q, r) ≥ 0.85) BSSARF _(q, r) = 1"
---

## Definition

Black Start Service (BSS) is an Ancillary Service provided by a Resource able to start without support of the ERCOT Transmission Grid. [e1] Its job is to let ERCOT re-energize the system after a Blackout, a condition in which frequency for the entire ERCOT System has dropped to zero. [e5][e2]

## How it works

ERCOT obtains BSS through Black Start Agreements with QSEs for generation that can self-start, or that can start from a neighboring non-ERCOT control area under a firm standby power contract, without support from the ERCOT System. [e3] ERCOT may dispatch BSS under an emergency restoration plan after a Blackout. [e4] Bids are due on or before February 15 of each three-year period. [e6]

Each selected Generation Resource must keep contracted back-up fuel to run at maximum output for at least 72 hours (the requirement does not apply to Resources that do not rely on purchased fuel) [e15], though ERCOT may waive the requirement in whole or in part to procure enough resources, and ERCOT may schedule unannounced testing. [e9][e13][e11] ERCOT pays an hourly standby fee to the QSE representing the Black Start Resource, adjusted for availability against a rolling 85% reliability measure, and charges the total capacity payment to QSEs representing Loads by load ratio share. [e7][e8]

Contracting details (Section 3.14.2): bids must be evaluated on criteria attached to the request for bids and contracted by December 31 for the following three-year period. [e16] Bids include the hourly stand-by price and, where applicable, the BSS Back-up Fuel costs, [e17] and a bidder must disclose weather-related limitations on its ability to provide BSS. [e18] The Standard Form Black Start Agreement has a full term of three years from the Start Date. [e38] A Resource Entity may ask to substitute an alternate Generation Resource on the same black start primary and secondary cranking path during the three-year term if it meets testing and verification; ERCOT may reject the request in its sole discretion. [e20][e21] A Black Start Resource is not obligated to contract its full on-site fuel storage capability as BSS Back-up Fuel. [e23] A Switchable Generation Resource that bids or is contracted for BSS may not nominate it to satisfy supply adequacy or capacity planning in any control area other than ERCOT during the contract term. [e24] QSEs for contracted Resources must take part in ERCOT-coordinated training and restoration drills. [e19]

Testing and qualification (Section 8.1.1.2.1.5): To qualify, a Resource must pass the Basic Starting, Line-Energizing, Load-Carrying and Next Start Resource tests (among other requirements). [e25] Each Black Start Resource must pass a Basic Starting Test once each calendar year, a Line-Energizing Test once every three years and the Next Start Resource Test once every four calendar years; Load-Carrying qualification is valid for four calendar years. [e26][e27][e29][e28] The BSS Back-up Fuel Switching Test is conducted in odd-numbered years. [e30] Qualification also requires an attestation of back-up fuel supporting at least 72 hours at maximum output, except to the extent ERCOT has waived it. [e43] Except under extenuating circumstances, qualification testing for the next year of BSS must be completed by June 1 of each year. [e46]

Availability tests: each qualified Black Start Resource performs a Black Start Resource Availability Test quarterly unless it has successfully started and operated at LSL or higher for at least four consecutive Settlement Intervals during the quarter. [e31] ERCOT gives two hours' notice and the QSE shows the Resource as ONTEST in its COP and telemetry for the duration of the test. [e32] A failed start means zero availability in the Availability Plan and no Hourly Standby Fee from the date of the failed test; [e33] the QSE may schedule a second test, subject to ERCOT approval, within ten Business Days of the failed one unless ERCOT agrees to a later date, [e47] and if it passes, the Hourly Standby Fee resumes from the date of the successful test. [e48] Failing a second test within the quarter means immediate disqualification and no further compensation, [e34] and ERCOT claws back the Hourly Standby Fee payments made since the last successful availability test or last successful start and operation under normal system conditions, whichever is later. [e49]

## Formula

Hourly Standby Fee (np-06 Section 6.6.8.1 and the Standard Form Black Start Agreement, Section 9): the protocol hourly payment is BSSAMT = (-1) * BSSPR * BSSARF, [e52] that is, the standby price times a reduction factor that depends on the Black Start Service Hourly Rolling Equivalent Availability Factor (BSSHREAF); the (-1) is a sign convention the saved text does not explain. [e35][e36]

- Standard Form Black Start Agreement definition: BSSHREAF for an hour is the number of hours, including the given hour and the preceding 4,379, in which the Resource was Available, divided by 4,380 (the protocol describes 4380 as the number of hours in a six-month period); [e55] before 4,379 hours have elapsed since the Start Date, missing hours ("Assumed Hours") are deemed Available unless the Resource has failed to perform in response to a blackout event or a Dispatch Instruction to come On-Line. [e37]
- Protocol wording of the same factor: if the elapsed hours of the Black Start Agreement (BSSEH) are fewer than 4380, BSSHREAF = 1; otherwise it is the sum of the hourly availability flags (1 available, 0 unavailable) over the given hour and the previous 4379 hours, divided by 4380. [e53][e54] The protocol sets BSSARF = 1 when BSSHREAF is at least 0.85. [e56] The protocol's first-4380-hours rule (BSSHREAF = 1) is not worded the same as the Agreement's Assumed Hours rule above, and the saved text does not reconcile them.
- If BSSHREAF is 85% or more, the fee is the full Hourly Standby Price; if it is below 85% but above 35%, the fee is the price times [100% - (85% - BSSHREAF) x 2]; if it is 35% or less, the fee is zero. [e36] The protocol form is BSSARF = Max (0, 1 - (0.85 - BSSHREAF) x 2) when BSSHREAF is below 0.85. [e35]
- The BSS Availability Reduction Factor uses the availability of the original and any substituted Black Start Resource over the rolling 4380-hour period. [e22]
- "Available" for an hour means the Participant declared in its Availability Plan that the Resource is able to start without a connection to the ERCOT Transmission Grid, [e50] with listed exceptions in the Agreement (for example, a failed availability test not yet followed by a passed one). [e51]

## ERCOT context

The IMM counts Black Start Service Settlement among the items in the "uplift" it tracks, alongside ERS, firm fuel, RMR and RUC settlements. [e10] The saved sources give no Black Start cost, MW or unit counts for 2024 or 2025.

Operating Guides context: the Operating Guides list restoration priorities, including bringing units with contracted Black Start capability On-Line after preparing Cranking Paths and assessing system conditions. [e41] If the grid at a Black Start Resource is de-energized and the Participant cannot communicate with ERCOT or its TSP/DSP, it follows its Black Start plan procedures but may not deliver energy into the ERCOT System without specific instructions. [e40] Each Generation Resource providing BSS must also meet NERC Reliability Standards and the Operating Guides. [e44]

## Key facts

- BSS is an Ancillary Service delivered by resources that can start without the ERCOT grid. [e1]
- Contract bids are due by February 15 of each three-year period. [e6]
- Selected Black Start Resources must hold contracted back-up fuel for at least 72 hours at maximum output (not required of Resources that do not rely on purchased fuel); ERCOT may waive this in whole or in part. [e9][e13][e15]
- ERCOT pays an hourly standby fee to the QSE; the cost is allocated to Load QSEs by load ratio share. [e7][e8]
- ERCOT may schedule unannounced Black Start testing. [e11]
- The Standard Form Black Start Agreement full term is three years. [e38]
- The Hourly Standby Fee falls to zero at 35% or lower rolling availability and is reduced linearly between 85% and 35%. [e36]
- Under the Standard Form Agreement, if a Black Start Resource does not remain certified or is in default as described in Section 10(A)(2)(e), the Hourly Standby Fee is reduced to zero for the rest of the Full Term and the Participant must refund certain amounts as described in the Protocols. [e39]

## Say it like this

Black start is the grid's restart plan: ERCOT pays selected generators to be able to start from nothing and energize the system after a full blackout. They get a standby fee, and the cost is spread to load.

## Common confusion

Black Start is a defined Ancillary Service, unlike ERS, which the protocols say is not an Ancillary Service. [e1][e14] Black Start is also not about ordinary reserves: it is for re-energizing the system after a Blackout or Partial Blackout. [e5]

## Questions

### What does a Black Start Resource have to be able to do?

Start without support of the ERCOT Transmission Grid, and keep contracted back-up fuel for at least 72 hours at maximum output (ERCOT can waive the fuel requirement in whole or in part). [e1][e9][e13]

### Who pays for Black Start?

ERCOT pays the hourly standby fee to the QSE representing the resource and allocates the total capacity payment to QSEs representing Loads by load ratio share. [e7][e8]

### How often is it procured?

Bids are due on or before February 15 of each three-year period, and contracts are in place by December 31 for the following three-year period. [e6][e16]

### Why is the standby fee tied to a rolling availability factor?

The fee is adjusted for reliability: full price at 85% rolling availability or better, scaled down below 85%, and zero at 35% or below, measured over 4,380 hours. [e36][e37]

### What happens if a Black Start Resource fails its quarterly availability test?

It must show zero availability and loses the Hourly Standby Fee from the date of the failed test. It may schedule a second test, subject to ERCOT approval; passing it resumes the fee from the date of the successful test, [e47][e48] while a second failure within the quarter disqualifies the Resource, ends compensation and triggers a claw-back of standby fees. [e33][e34][e49]

### What if the QSE cannot reach ERCOT when the grid is down?

The Participant follows its Black Start plan procedures but may not commence delivering energy into the ERCOT System without specific instructions from ERCOT or the TSP/DSP. [e40]

### Why must the back-up fuel be tested?

The qualification includes a BSS Back-up Fuel Switching Test (conducted in odd-numbered years) demonstrating the Resource can switch to the back-up fuel source. [e45][e30]

## Open items

- Resolved 2026-11-21: qualification and testing (Section 8.1.1.2.1.5), back-up fuel waiver, alternate Resource substitution and the Standard Form Black Start Agreement terms are now covered; the Section 3.14.2 contracting date (December 31) is now quoted.
- Still open: the protocol says the standby fee comes from a "competitive bi-annual bidding process" (Section 6.6.8.1) while Section 3.14.2 describes three-year bidding terms; the saved text does not reconcile the two.
- Still open: the Default section of the Standard Form Black Start Agreement (Section 10) and the claw-back calculation were not read in detail.
- Black Start costs, number of resources and locations were not found in the saved sources.
