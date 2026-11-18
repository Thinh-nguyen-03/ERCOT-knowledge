---
id: black-start
name: Black Start Service
aliases: [Black Start, BSS, Black Start Service, Black Start Resource, black start back-up fuel]
kind: product
domain: reliability
level: 2
lenses: [analyst, portfolio]
as_of: 2026-11-18
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
    note: ERS is an emergency service that is not an Ancillary Service, while Black Start is defined as one. [e1]
  - to: eea
    type: related
    note: A Black Start Resource may use its contracted back-up fuel outside of black start if ERCOT determines it is necessary during an EEA event. [e12]
  - to: uplift
    type: related
    note: The IMM lists Black Start Service Settlement among the items it counts as uplift. [e10]
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
---

## Definition

Black Start Service (BSS) is an Ancillary Service provided by a Resource able to start without support of the ERCOT Transmission Grid. [e1] Its job is to let ERCOT re-energize the system after a Blackout, a condition in which frequency for the entire ERCOT System has dropped to zero. [e5][e2]

## How it works

ERCOT obtains BSS through Black Start Agreements with QSEs for generation that can self-start, or that can start from a neighboring non-ERCOT control area under a firm standby power contract, without support from the ERCOT System. [e3] ERCOT may dispatch BSS under an emergency restoration plan after a Blackout. [e4] Bids are due on or before February 15 of each three-year period. [e6]

Each selected Generation Resource must keep contracted back-up fuel to run at maximum output for at least 72 hours, though ERCOT may waive the requirement in whole or in part to procure enough resources, and ERCOT may schedule unannounced testing. [e9][e13][e11] ERCOT pays an hourly standby fee to the QSE representing the Black Start Resource, adjusted for availability against a rolling 85% reliability measure, and charges the total capacity payment to QSEs representing Loads by load ratio share. [e7][e8]

## ERCOT context

The IMM counts Black Start Service Settlement among the items in the "uplift" it tracks, alongside ERS, firm fuel, RMR and RUC settlements. [e10] The saved sources give no Black Start cost, MW or unit counts for 2024 or 2025.

## Key facts

- BSS is an Ancillary Service delivered by resources that can start without the ERCOT grid. [e1]
- Contract bids are due by February 15 of each three-year period. [e6]
- Selected Black Start Resources must hold contracted back-up fuel for at least 72 hours at maximum output; ERCOT may waive this in whole or in part. [e9][e13]
- ERCOT pays an hourly standby fee to the QSE; the cost is allocated to Load QSEs by load ratio share. [e7][e8]
- ERCOT may schedule unannounced Black Start testing. [e11]

## Say it like this

Black start is the grid's restart plan: ERCOT pays selected generators to be able to start from nothing and energize the system after a full blackout. They get a standby fee, and the cost is spread to load.

## Common confusion

Black Start is a defined Ancillary Service, unlike ERS, which the protocols say is not an Ancillary Service. [e1] Black Start is also not about ordinary reserves: it is for re-energizing the system after a Blackout or Partial Blackout. [e5]

## Questions

### What does a Black Start Resource have to be able to do?

Start without support of the ERCOT Transmission Grid, and keep contracted back-up fuel for at least 72 hours at maximum output (ERCOT can waive the fuel requirement in whole or in part). [e1][e9][e13]

### Who pays for Black Start?

ERCOT pays the hourly standby fee to the QSE representing the resource and allocates the total capacity payment to QSEs representing Loads by load ratio share. [e7][e8]

### How often is it procured?

Bids are due on or before February 15 of each three-year period. [e6]

## Open items

- Deeper pass: qualification and testing in Section 8.1.1.2.1.5, back-up fuel waiver rules, alternate resource substitution and the Standard Form Black Start Agreement details.
- The protocol says the standby fee comes from a "competitive bi-annual bidding process" (Section 6.6.8.1) while Section 3.14.2 describes three-year bidding terms; the saved text does not reconcile the two.
- Section 3.14.2 says bids are contracted by December 31 for the following three-year period, but that sentence uses a superscript format not quoted here.
- Black Start costs, number of resources and locations were not found in the saved sources.
