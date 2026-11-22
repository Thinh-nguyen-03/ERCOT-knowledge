# Audit packet: Resource Entity (resource-entity)

kind entity · domain structure · level 1

## Evidence (quote, where it sits in the source, and the text around it)

### e1 · `np-02` · tier 1 · ERCOT Nodal Protocols, Section 2: Definitions and Acronyms (effective 2026-11-06)
locator: Section 2.1, definition of Resource Entity · text copy line 2654

BEFORE: …The date on which ERCOT declares that a Resource has completed all qualification testing administered by ERCOT as part of the Resource Interconnection process so that a Resource is approved for participation in ERCOT market operations. Resource Connectivity Node (see Electrical Bus) Resource Entity 
QUOTE: An Entity that owns or controls a Generation Resource, an Energy Storage Resource (ESR), a Settlement Only Generator (SOG), or a Load Resource and is registered with ERCOT as a Resource Entity.
AFTER:  +----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ | [NPRR995: Replace the above definition "Resource E…

### e4 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.2.6.1(1) · text copy line 576 · heading above: 16.2.6.1 Designation as an Emergency Qualified Scheduling Entity or Virtual Qualified Scheduling Entity

BEFORE: …ation of Agreements, shall apply to that LSE or Resource Entity, and that LSE or Resource Entity shall not be entitled to become an Emergency QSE. 16.2.6 Emergency Qualified Scheduling Entity 16.2.6.1 Designation as an Emergency Qualified Scheduling Entity or Virtual Qualified Scheduling Entity (1) 
QUOTE: A "Virtual QSE" is defined as an LSE or Resource Entity that has not qualified and been designated as an Emergency QSE, but has been designated by ERCOT to temporarily perform the responsibilities of a QSE.
AFTER:  (2) If a QSE has given Notice of its intent to terminate its relationship with an LSE or Resource Entity, that LSE or Resource Entity, must, by noon on the fourth Business Day after the termination notice date, either: (a) Designate a new QSE with such relationship to take effect on the Termination…

### e14 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.5(6), DG registration threshold · text copy line 764 · heading above: 16.5 Registration of a Resource Entity

BEFORE: …----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ 
QUOTE: (6) DG with an installed capacity greater than one MW, the DG registration threshold, which exports energy into a Distribution System, must register with ERCOT.
AFTER:  16.5.1 Technical and Managerial Requirements for Resource Entity Applicants (1) A Resource Entity applicant must: (a) Be capable of complying with all policies, rules, guidelines, registration requirements, and procedures established by these Protocols, ERCOT, or other Independent Organizations, if…

### e15 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.5.1.1(1), Designation of a QSE · text copy line 776 · heading above: 16.5.1.1 Designation of a Qualified Scheduling Entity

BEFORE: …ished by these Protocols, ERCOT, or other Independent Organizations, if applicable; and (b) Be capable of purchasing power from Entities registered with or by ERCOT or the Independent Organizations and capable of complying with its system rules. 16.5.1.1 Designation of a Qualified Scheduling Entity 
QUOTE: (1) Each Resource Entity applicant within the ERCOT Region shall designate the Qualified Scheduling Entity (QSE) that will perform QSE functions per these Protocols on behalf of the Resource Entity. Each applicant shall acknowledge that it bears sole responsibility for selecting and maintaining a QSE as its representative. The applicant shall include a written statement from the designated QSE acknowledging that the QSE accepts responsibility for the applicant's transactions pursuant to these Protocols. For the Resource Entity that owns or operates a Resource, the Resource Entity's QSE designation must be submitted to ERCOT no later than 45 days prior to the Network Operations Model change date, as described in Section 3.10.1, Time Line for Network Operations Model Changes, for the Resource.
AFTER:  (2) If a Resource Entity fails to maintain a QSE as its representative, the Resource Entity may be designated as an Emergency QSE as provided in Section 16.2.6.1, Designation as an Emergency Qualified Scheduling Entity or Virtual Qualified Scheduling Entity. 16.5.1.2 Waiver for Federal Hydroelectri…

### e22 · `np-16` · tier 1 · ERCOT Nodal Protocols, Section 16: Registration and Qualification of Market Participants (effective 2026-08-01)
locator: Section 16.5.5(2), PCLR de-registration · text copy line 883 · heading above: 16.5.5 Provisional Controllable Load Resources (PCLRs)

BEFORE: …e Entity election to change the Large Load's registration status. After the end date, the PCLR's existing registration shall remain unchanged until the Resource Entity elects to modify the Resource registration for the Large Load. A PCLR may convert to another type of Load Resource or to firm Load. 
QUOTE: (2) A Resource Entity that desires to de-register a Large Load as a PCLR prior to its end date shall provide ERCOT no less than 120 days' written notice. Upon de-registration, the Large Load shall be limited to the maximum Low Power Consumption (LPC) amounts identified in the Batch Zero Interconnection Study and documented in the Load Commissioning Plan (LCP) until new interconnection studies have been performed according to applicable ERCOT Protocols and Guides.
AFTER:  (3) If ownership of a Large Load registered as a PCLR is transferred to another Entity, the acquiring Entity shall be bound by all obligations applicable to the PCLR under these Protocols and Guides. The acquiring Entity shall notify ERCOT and submit an updated, signed, and notarized Part A or Part…

### e29 · `ercot-planning-guide-05` · tier 1 · ERCOT Planning Guide Section 5, Generator Interconnection or Modification (effective 2026-08-01)
locator: Planning Guide Section 5.5(1), Generator Commissioning · text copy line 693 · heading above: 5.5 Generator Commissioning and Continuing Operations

BEFORE: … study or any previous study, ERCOT determines that the generator would create or contribute to a reliability concern, ERCOT may prohibit the synchronization, testing, or commissioning of the generator until the reliability concern is addressed. 5.5 Generator Commissioning and Continuing Operations 
QUOTE: (1) For each interconnecting Generation Resource or Energy Storage Resource (ESR), each Interconnecting Entity (IE) shall meet the conditions established by ERCOT before proceeding to Initial Energization, Initial Synchronization, and commercial operations. These conditions may require proof of meeting applicable ERCOT requirements, which may include, but are not limited to, reactive capability, voltage ride-through standards, dynamic model template submission, Automatic Voltage Regulator (AVR), Primary Frequency Response, Power System Stabilizer (PSS), Subsynchronous Resonance (SSR) models, and telemetry.
AFTER:  (2) Before ERCOT approves Initial Energization for a project that will consume Load other than Wholesale Storage Load (WSL) and that is not behind a Non-Opt-In Entity (NOIE) tie meter: (a) The Resource Entity must request an Electric Service Identifier(s) (ESI ID(s)) from the Distribution Service P…

## Statements to check (new or changed since the last audit)

- **Link to qse** (cites e15, e4): related QSE (Qualified Scheduling Entity): A Resource Entity must designate a QSE, and can be designated a Virtual QSE by ERCOT to temporarily perform QSE responsibilities. [e15][e4]
- **Link to resource-types** (cites e1): composed-of Resource Types (Generation, Load, ESR, SOG): The Resource types a Resource Entity may own or control are Generation Resources, ESRs, Load Resources and SOGs. [e1]
- **Link to lse** (cites e4): contrasts-with LSE (Load Serving Entity): LSEs and Resource Entities can both be designated Virtual QSEs by ERCOT. [e4]
- **Link to clr** (cites e1): related CLR (Controllable Load Resource): A Load Resource is among the Resources a Resource Entity owns or controls. [e1]
- **Link to dgr-sodg** (cites e1, e14): related DGR & SODG (Distribution-Connected Generation): A Settlement Only Generator is among the things a Resource Entity owns or controls, and distribution-connected generation above one MW must register. [e1][e14]
- **Link to energy-storage-resource** (cites e1, e29): related Energy Storage Resource (ESR): An ESR is one of the Resource types a Resource Entity can own or control, and must meet ERCOT's conditions before Initial Energization and commercial operations. [e1][e29]
- **Link to large-load-interconnection** (cites e22): related Large Load Interconnection & Batch Zero: A Resource Entity that registers a Large Load as a PCLR must give ERCOT at least 120 days' written notice to de-register it early. [e22]

